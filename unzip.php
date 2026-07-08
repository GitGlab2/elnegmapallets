<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$zipFile = 'out.zip';
$extractTo = './';

if (file_exists($zipFile)) {
    $zip = new ZipArchive;
    $res = $zip->open($zipFile);
    if ($res === TRUE) {
        $zip->extractTo($extractTo);
        $zip->close();
        echo "Extraction completed successfully!";
        unlink($zipFile); // clean up the zip archive
    } else {
        echo "Error: Failed to open zip file (Code: $res)";
    }
} else {
    echo "Error: out.zip not found.";
}
?>
