import React from "react";
import { 
  Sparkles, QrCode, Camera, Download, ShieldCheck, ArrowRight, 
  CheckCircle2, Users, Layers, Zap, HardDrive 
} from "lucide-react";

export default function HowItWorksPage({ navigate }) {
  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] select-none">
      {/* Hero */}
      <section className="pt-16 pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-white px-3 py-1 rounded-full border border-[#BAC8B1]">
          Seamless Event Experience
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#404E3B] tracking-tight mt-3 mb-4">
          How AuraPic Works
        </h1>
        <p className="text-sm sm:text-base text-[#6C8480] max-w-2xl mx-auto leading-relaxed">
          From table QR code scan to uncompressed master photo downloads in 15 seconds. Designed for maximum ease with zero friction.
        </p>
      </section>

      {/* 4 Guest Steps Detailed */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-8">
        {[
          {
            step: "01",
            title: "Scan the Event QR Code",
            subtitle: "No app download or account creation needed.",
            desc: "Guests arrive at the wedding reception and find elegant QR cards on dinner tables, cocktail bars, and wedding programs. Scanning with their standard phone camera opens a lightweight web app in mobile Safari or Chrome.",
            icon: QrCode,
            color: "bg-[#404E3B]"
          },
          {
            step: "02",
            title: "Take a 3-Second Selfie",
            subtitle: "Temporary facial vectorization with zero biometric retention.",
            desc: "A circular face alignment guide assists the guest in capturing a clear selfie. AuraPic converts facial landmarks into a 512-dimensional vector. The raw image is permanently purged from server memory within 60 seconds.",
            icon: Camera,
            color: "bg-[#7B9669]"
          },
          {
            step: "03",
            title: "AI Finds Your Photos",
            subtitle: "High-speed cosine similarity searching thousands of images.",
            desc: "The vector engine compares the guest's facial embedding against all faces previously detected across the photographer's batch. Photos containing the guest are isolated with 98.7% average confidence.",
            icon: Sparkles,
            color: "bg-[#6C8480]"
          },
          {
            step: "04",
            title: "Download Uncompressed Memories",
            subtitle: "Direct access to full-resolution 6000x4000 RAW masters.",
            desc: "Guests instantly browse their private curated gallery, favorite their best moments, and download full-resolution images without messaging app compression.",
            icon: Download,
            color: "bg-[#404E3B]"
          },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#BAC8B1]/50 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center shrink-0 shadow-md`}>
                <Icon className="w-8 h-8" />
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#7B9669]">STEP {item.step}</span>
                  <span className="text-xs text-[#6C8480]">• {item.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#404E3B]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* Photographers Workflow Callout */}
        <div className="rounded-3xl bg-[#404E3B] text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-wider text-[#BAC8B1]">
              For Wedding Photographers
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Ready to automate your client delivery?
            </h3>
            <p className="text-xs sm:text-sm text-[#BAC8B1]">
              Create an event, print table QR codes, and drag-and-drop your photo library.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => navigate("/guest")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#404E3B] font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Try Guest Demo
            </button>
            <button
              onClick={() => navigate("/photographer/events/create")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Create An Event →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
