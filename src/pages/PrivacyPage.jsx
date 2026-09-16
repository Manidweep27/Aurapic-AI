import React from "react";
import { 
  ShieldCheck, Lock, EyeOff, Trash2, KeyRound, Server, 
  FileCheck, CheckCircle2, ArrowRight, HeartHandshake 
} from "lucide-react";

export default function PrivacyPage({ navigate }) {
  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] select-none pb-20">
      {/* Hero */}
      <section className="pt-16 pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="w-14 h-14 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
          <ShieldCheck className="w-7 h-7 text-[#7B9669]" />
        </div>
        <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-white px-3 py-1 rounded-full border border-[#BAC8B1]">
          Privacy-First Architecture
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#404E3B] tracking-tight mt-3 mb-4">
          Your Memories Stay Yours.
        </h1>
        <p className="text-sm sm:text-base text-[#6C8480] max-w-2xl mx-auto leading-relaxed">
          We believe wedding photography should bring joy, not privacy concerns. Here is our solemn commitment to biometric integrity and data security.
        </p>
      </section>

      {/* 4 Core Privacy Guarantees */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#BAC8B1]/50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-[#7B9669]" />
            </div>
            <h3 className="text-xl font-bold text-[#404E3B]">
              1. Temporary Selfie Processing
            </h3>
            <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
              Guest selfies are automatically deleted after face embedding generation within 60 seconds. No actual guest face images are stored long-term in the system.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#7B9669]">
              ✓ Verified 60-second RAM zero-wipe
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#BAC8B1]/50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#7B9669] text-white flex items-center justify-center">
              <EyeOff className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#404E3B]">
              2. Private Galleries
            </h3>
            <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
              Guests only see photos matched to their event profile. Unlike public Google Drive or Dropbox links, other guests cannot browse photos they are not present in.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#7B9669]">
              ✓ Strict guest-to-image isolation
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#BAC8B1]/50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#6C8480] text-white flex items-center justify-center">
              <KeyRound className="w-6 h-6 text-[#BAC8B1]" />
            </div>
            <h3 className="text-xl font-bold text-[#404E3B]">
              3. Secure Image Access
            </h3>
            <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
              High-resolution images are protected using expiring secure access links. Raw images cannot be scraped, index-crawled, or indexed by search engines.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#7B9669]">
              ✓ 15-minute cryptographic presigned tokens
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#BAC8B1]/50 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center">
              <Lock className="w-6 h-6 text-[#BAC8B1]" />
            </div>
            <h3 className="text-xl font-bold text-[#404E3B]">
              4. Encrypted Transfers & Rest
            </h3>
            <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
              All data transfers utilize modern HTTPS/TLS 1.3 encryption. At rest, wedding files are stored in private AWS S3 buckets guarded by AES-256 server-side encryption.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#7B9669]">
              ✓ AES-256 Cloud Vault & TLS 1.3
            </div>
          </div>

        </div>

        {/* Biometric Irreversibility Card */}
        <div className="rounded-3xl bg-[#404E3B] text-white p-8 sm:p-12 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7B9669] flex items-center justify-center text-white">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              The Irreversibility Principle
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#BAC8B1] leading-relaxed max-w-3xl">
            The face embedding vector is a one-way mathematical hash representing distances between facial landmarks. It is completely irreversible and <strong>cannot</strong> be used to reconstruct or recreate the user's likeness. Furthermore, guest vectors are structurally isolated to that specific wedding event and destroyed when the event reaches lifecycle completion.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={() => navigate("/guest")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Privacy Comes First → Try Guest Flow
            </button>
            <button
              onClick={() => navigate("/pricing")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#404E3B] font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              View Event Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
