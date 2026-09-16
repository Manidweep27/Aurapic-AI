import React, { useState } from "react";
import { Camera, Sparkles, ShieldCheck, QrCode, Lock, ArrowRight, Heart, CheckCircle2 } from "lucide-react";
import { MOCK_EVENT } from "../../data/mockData";

export default function GuestHome({ navigate }) {
  const [eventCode, setEventCode] = useState("SARAH-JOHN-2026");
  const [consented, setConsented] = useState(true);

  return (
    <div className="min-h-screen bg-[#E6E6E6] flex flex-col justify-between select-none">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 max-w-lg mx-auto w-full">
        <div className="flex items-center justify-between pb-6">
          <div 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#404E3B] flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4 text-[#7B9669]" />
            </div>
            <span className="font-bold text-lg text-[#404E3B]">AuraPic</span>
          </div>

          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#BAC8B1]/40 text-[#404E3B] flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#7B9669]" />
            Private Guest Mode
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#BAC8B1]/50 space-y-6">
          {/* Couple Photo & Title */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
              alt="Sarah and John Wedding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#404E3B] via-transparent to-black/20" />
            
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#BAC8B1]">
                Wedding Celebration
              </div>
              <h1 className="text-xl font-extrabold text-white">
                {MOCK_EVENT.name}
              </h1>
              <p className="text-xs text-[#E6E6E6]/80">{MOCK_EVENT.date} • {MOCK_EVENT.location}</p>
            </div>
          </div>

          {/* Intro text */}
          <div>
            <h2 className="text-lg font-bold text-[#404E3B]">
              Find Your Photos Instantly
            </h2>
            <p className="text-xs sm:text-sm text-[#6C8480] mt-1 leading-relaxed">
              Our AI scans through 1,420 wedding photos and finds your moments in seconds. No sifting required.
            </p>
          </div>

          {/* Privacy Consent Checkbox */}
          <div 
            onClick={() => setConsented(!consented)}
            className="p-4 rounded-2xl bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 flex items-start gap-3 cursor-pointer hover:bg-[#E6E6E6]/70 transition-colors"
          >
            <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
              consented ? "bg-[#7B9669] text-white" : "border-2 border-[#BAC8B1] bg-white"
            }`}>
              {consented && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
            <div className="text-xs text-[#404E3B]">
              <span className="font-bold">Privacy Consent:</span> I agree to temporary selfie processing for facial matching. Raw selfies are permanently deleted within 60 seconds.
            </div>
          </div>

          {/* Primary Action */}
          <button
            disabled={!consented}
            onClick={() => navigate("/guest/selfie")}
            className="w-full py-4 rounded-2xl bg-[#7B9669] hover:bg-[#688257] disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Camera className="w-5 h-5" />
            <span>Take Selfie to Find My Photos</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          {/* Direct Gallery Bypass for Testing */}
          <div className="text-center pt-1">
            <button
              onClick={() => navigate("/guest/gallery")}
              className="text-xs text-[#6C8480] hover:text-[#404E3B] underline underline-offset-4 cursor-pointer font-medium"
            >
              Already enrolled? View My Matched Gallery →
            </button>
          </div>
        </div>
      </div>

      {/* Guest Footer */}
      <div className="p-4 text-center text-xs text-[#6C8480] border-t border-[#BAC8B1]/30">
        Secured by AuraPic Biometric Zero-Retention Protocol
      </div>
    </div>
  );
}
