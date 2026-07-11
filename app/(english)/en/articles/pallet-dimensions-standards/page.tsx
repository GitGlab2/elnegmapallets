import type { Metadata } from "next";
import { getAbsoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Redirecting to Pallet Sizes Guide...",
  alternates: {
    canonical: getAbsoluteUrl("/en/articles/pallet-dimensions-standards/"),
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/pallet-sizes/" />
      <div className="min-h-screen bg-[#111319] text-white flex items-center justify-center font-sans">
        <div className="text-center p-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary mx-auto mb-4"></div>
          <p className="text-gray-400">Redirecting you to Pallet Sizes Guide...</p>
        </div>
      </div>
    </>
  );
}
