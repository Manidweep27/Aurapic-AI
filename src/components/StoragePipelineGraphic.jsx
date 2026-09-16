import React, { useState } from "react";
import { Camera, Cpu, Image, Globe, Shield, Download, ArrowRight, ArrowDown, HardDrive, CheckCircle2 } from "lucide-react";

export default function StoragePipelineGraphic() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "RAW Upload",
      badge: "15MB Original",
      desc: "Direct multi-gigabyte ingestion via presigned S3 URLs",
      icon: Camera,
      color: "bg-[#404E3B]"
    },
    {
      id: 2,
      title: "AI Processing",
      badge: "InsightFace 512-D",
      desc: "Facial landmark extraction & vector indexing in pgvector",
      icon: Cpu,
      color: "bg-[#7B9669]"
    },
    {
      id: 3,
      title: "Web Thumbnail",
      badge: "200KB WebP",
      desc: "Ultra-compressed WebP rendering for instantaneous scrolling",
      icon: Image,
      color: "bg-[#6C8480]"
    },
    {
      id: 4,
      title: "Global CDN",
      badge: "Cloudflare Edge",
      desc: "Sub-50ms latency cached across worldwide edge nodes",
      icon: Globe,
      color: "bg-[#7B9669]"
    },
    {
      id: 5,
      title: "High-Res Master",
      badge: "S3 Glacier IR",
      desc: "68% cost reduction while keeping retrieval under 100ms",
      icon: Shield,
      color: "bg-[#404E3B]"
    },
    {
      id: 6,
      title: "Secure Download",
      badge: "Expiring Token",
      desc: "Single-use 15-minute signed token for full-fidelity files",
      icon: Download,
      color: "bg-[#7B9669]"
    }
  ];

  return (
    <div className="rounded-3xl bg-white border border-[#BAC8B1]/50 p-6 sm:p-10 shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAC8B1]/30 text-[#404E3B] text-xs font-bold uppercase tracking-wider mb-2">
            <HardDrive className="w-3.5 h-3.5 text-[#7B9669]" />
            Dual-Tier Storage Architecture
          </span>
          <h3 className="text-2xl font-bold text-[#404E3B]">Engineered for Speed and 68% Cost Savings</h3>
        </div>
        <p className="text-xs sm:text-sm text-[#6C8480] max-w-md">
          Optimized thumbnails make galleries fast while high-resolution originals remain securely stored for downloads.
        </p>
      </div>

      {/* Visual Pipeline flow */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === step.id;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`relative rounded-2xl p-4 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-[#E6E6E6]/60 border-[#7B9669] shadow-md ring-2 ring-[#7B9669]/20"
                  : "bg-white border-[#BAC8B1]/40 hover:border-[#6C8480] hover:bg-[#E6E6E6]/30"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${step.color} text-white flex items-center justify-center shadow-xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-[#6C8480]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-sm font-bold text-[#404E3B] leading-tight mb-1">
                  {step.title}
                </div>
                <span className="inline-block text-[10px] font-semibold text-[#7B9669] bg-[#7B9669]/10 px-2 py-0.5 rounded-full mb-2">
                  {step.badge}
                </span>
              </div>

              <p className="text-[11px] text-[#6C8480] leading-snug">
                {step.desc}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-[#BAC8B1]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Step Technical Explanation Box */}
      <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-[#404E3B] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#7B9669] flex items-center justify-center text-white shrink-0 shadow-inner">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#BAC8B1] font-bold">
              Stage {activeStep}: {steps[activeStep - 1].title} Details
            </div>
            <div className="text-sm font-semibold text-[#E6E6E6]">
              {activeStep === 1 && "Guest cameras and wedding pros upload uncompressed 6000x4000 RAW files. Bandwidth is parallelized directly to AWS S3 without overloading API servers."}
              {activeStep === 2 && "PyTorch Celery worker nodes detect facial landmarks and compute 512-dimensional vector hashes in less than 45ms per image."}
              {activeStep === 3 && "Images are compressed into lightweight 200KB WebP files. Over 1,000 photos load in seconds even on reception venue 4G connections."}
              {activeStep === 4 && "Global edge caching guarantees instant mobile guest gallery scrolling with zero lag."}
              {activeStep === 5 && "Raw originals transition into AWS S3 Glacier Instant Retrieval on Day 31, saving 68% on recurring storage overhead."}
              {activeStep === 6 && "Guests receive short-lived cryptographic signed links (15 min validity) when requesting high-res master files."}
            </div>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs text-[#BAC8B1] block">Cost Reduction</span>
          <span className="text-2xl font-bold text-[#7B9669]">68%</span>
        </div>
      </div>
    </div>
  );
}
