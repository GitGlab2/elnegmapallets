const fs = require("fs");
const path = require("path");
const ftp = require("basic-ftp");
const https = require("https");

function getFtpPassword() {
  const envPath = path.join(__dirname, ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error("Error: .env.local file not found.");
    process.exit(1);
  }
  const content = fs.readFileSync(envPath, "utf-8");
  const match = content.match(/FTP_PASSWORD=(.+)/);
  if (!match || !match[1]) {
    console.error("Error: FTP_PASSWORD not found in .env.local.");
    process.exit(1);
  }
  return match[1].trim();
}

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = false; // Set to true if you need debugging logs

  try {
    const password = getFtpPassword();
    console.log("Connecting to FTP server at 194.36.184.34...");
    await client.access({
      host: "194.36.184.34",
      user: "u665169601.elnegmapallets.com",
      password: password,
      port: 21,
      secure: false
    });

    console.log("Connection established. Navigating to /public_html...");
    await client.cd("/public_html");

    // Clean up any failed upload temp files
    try {
      await client.remove(".in.out.zip.");
      console.log("Removed existing temporary file .in.out.zip.");
    } catch (e) {}
    try {
      await client.remove("out.zip");
    } catch (e) {}

    console.log("Uploading unzip.php...");
    await client.uploadFrom(path.join(__dirname, "unzip.php"), "unzip.php");

    console.log("Uploading out.zip (this may take a moment)...");
    await client.uploadFrom(path.join(__dirname, "out.zip"), "out.zip");

    console.log("Uploads complete. Triggering extraction via https://elnegmapallets.com/unzip.php...");

    https.get("https://elnegmapallets.com/unzip.php", (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", async () => {
        console.log("Extraction Output:", data);

        // Delete unzip.php from remote server for security
        try {
          console.log("Deleting unzip.php from server...");
          await client.remove("unzip.php");
          console.log("Clean-up complete.");
        } catch (deleteError) {
          console.warn("Warning: Could not delete unzip.php from server:", deleteError.message);
        }

        client.close();
        console.log("🚀 Deployment successful!");
      });
    }).on("error", (httpError) => {
      console.error("HTTP request to unzip.php failed:", httpError.message);
      client.close();
      process.exit(1);
    });

  } catch (ftpError) {
    console.error("FTP Operations failed:", ftpError.message);
    client.close();
    process.exit(1);
  }
}

deploy();
