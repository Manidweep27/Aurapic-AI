import React, { useState, useEffect } from "react";
import { Sparkles, Check, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layers } from "lucide-react";
import confetti from "canvas-confetti";

export default function AIMatchingScreen({ navigate, guestSelfie }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const stages = [
    { title: "Image uploaded", desc: "Encrypted memory buffer created" },
    { title: "Face detection", desc: "RetinaFace 68 facial landmarks isolated" },
    { title: "Face alignment", desc: "Affine pose transformation applied" },
    { title: "Embedding generation", desc: "512-dimensional feature vector computed" },
    { title: "Vector matching", desc: "Cosine similarity across 1,420 wedding photos" },
    { title: "Gallery optimization", desc: "Generating private, personalized gallery" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < stages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsDone(true);
          try {
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { y: 0.6 },
              colors: ["#7B9669", "#BAC8B1", "#404E3B"]
            });
          } catch (e) {
            // Ignore if canvas confetti is constrained
          }
          return prev;
        }
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#404E3B] text-white flex flex-col justify-center items-center px-4 py-8 select-none">
      <div className="max-w-md w-full space-y-6">
        
        {/* Selfie Frame with Laser Scan */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-3xl overflow-hidden border-4 border-[#7B9669] shadow-2xl bg-black">
          <img
            src={guestSelfie || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"}
            alt="Analyzing guest selfie"
            className="w-full h-full object-cover"
          />

          {/* AI Laser Scan Line */}
          {!isDone && (
            <div className="absolute inset-x-0 h-1 bg-[#7B9669] animate-scan-laser shadow-[0_0_15px_#7B9669] pointer-events-none" />
          )}

          {/* Overlay Tag */}
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#404E3B]/90 text-[10px] font-mono text-[#BAC8B1] border border-[#7B9669]/40">
            {isDone ? "MATCH COMPLETE" : "SCANNING 512-D"}
          </div>
        </div>

        {/* Dynamic Title */}
        <div className="text-center space-y-1">
          {isDone ? (
            <div className="animate-in zoom-in-95">
              <span className="text-xs uppercase tracking-widest font-bold text-[#7B9669] bg-white/10 px-3 py-1 rounded-full">
                Vector Match Verified
              </span>
              <h1 className="text-3xl font-extrabold text-white mt-2">
                ✨ We Found You!
              </h1>
              <p className="text-sm font-medium text-[#BAC8B1] mt-1">
                127 photos matched your face across Sarah & John's Wedding.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-[#BAC8B1]">
                <Cpu className="w-4 h-4 text-[#7B9669] animate-spin" />
                <span>InsightFace Neural Pipeline</span>
              </div>
              <h1 className="text-2xl font-extrabold text-white mt-1">
                Aura AI is processing your memories
              </h1>
              <p className="text-xs text-[#BAC8B1]/80">
                Matching facial features across thousands of gallery photos...
              </p>
            </div>
          )}
        </div>

        {/* Processing Stages Checklist */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3.5">
          {stages.map((stage, idx) => {
            const isCompleted = idx < currentStep || isDone;
            const isCurrent = idx === currentStep && !isDone;

            return (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                      isCompleted
                        ? "bg-[#7B9669] text-white"
                        : isCurrent
                        ? "border-2 border-[#7B9669] text-[#7B9669] animate-pulse"
                        : "border border-white/20 text-white/30"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-3 h-3 stroke-[3]" />
                    ) : isCurrent ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B9669]" />
                    ) : null}
                  </div>
                  <div>
                    <span className={`font-semibold ${isCompleted || isCurrent ? "text-white" : "text-white/40"}`}>
                      {stage.title}
                    </span>
                    <span className="block text-[10px] text-[#BAC8B1]/70">{stage.desc}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#BAC8B1]">
                  {isCompleted ? "DONE" : isCurrent ? "RUNNING" : "WAITING"}
                </span>
              </div>
            );
          })}
        </div>

        {/* Success Confidence Highlight & CTA */}
        {isDone ? (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-xl bg-white/10 border border-white/15">
              <div>
                <div className="text-lg font-extrabold text-[#7B9669]">98.7%</div>
                <div className="text-[10px] text-[#BAC8B1]">Highest Match</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-lg font-extrabold text-white">127</div>
                <div className="text-[10px] text-[#BAC8B1]">Matched Photos</div>
              </div>
              <div>
                <div className="text-lg font-extrabold text-[#7B9669]">0.42s</div>
                <div className="text-[10px] text-[#BAC8B1]">Vector Speed</div>
              </div>
            </div>

            <button
              onClick={() => navigate("/guest/gallery")}
              className="w-full py-4 rounded-2xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Explore My Matched Gallery</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="text-center text-xs text-[#BAC8B1] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#7B9669]" />
            <span>Raw selfie will be purged from RAM immediately</span>
          </div>
        )}
      </div>
    </div>
  );
}
