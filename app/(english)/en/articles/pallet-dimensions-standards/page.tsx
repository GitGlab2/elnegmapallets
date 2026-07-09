"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/en/pallet-sizes");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#111319] text-white flex items-center justify-center font-sans">
      <div className="text-center p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary mx-auto mb-4"></div>
        <p className="text-gray-400">Redirecting you to Pallet Sizes Guide...</p>
      </div>
    </div>
  );
}
