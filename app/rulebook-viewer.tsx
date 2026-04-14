"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function RulebookViewer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pdf = searchParams.get("pdf");
  const title = searchParams.get("title") || "Rulebook";

  if (!pdf) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-2xl font-bold mb-4">No Rulebook Provided</h1>
        <button
          className="px-6 py-2 rounded bg-[#ff4d00] text-white font-mono mt-4"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#181a20] to-[#0a0a0a] p-4">
      <div className="w-full max-w-5xl bg-black/80 rounded-2xl shadow-2xl border border-[#ff4d00]/30 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-orbitron font-bold text-[#ff4d00] mb-6 text-center uppercase tracking-widest drop-shadow">{title} - Rulebook</h1>
        <iframe
          src={pdf}
          title="Rulebook PDF"
          className="w-full h-[70vh] rounded-xl border border-white/10 bg-black/60 shadow-lg mb-6"
          allowFullScreen
        />
        <button
          className="px-8 py-2 rounded bg-[#ff4d00] text-white font-mono text-lg hover:bg-[#ff7a3d] transition-colors"
          onClick={() => router.back()}
        >
          Close
        </button>
      </div>
    </div>
  );
}
