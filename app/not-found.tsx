import NotFound from "@/pages/NotFound";
import "@/index.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export default function NotFoundPage() {
  return (
    <main className={`${cairo.className} ${cairo.variable} bg-background text-foreground min-h-screen`} dir="rtl">
      <NotFound />
    </main>
  );
}
