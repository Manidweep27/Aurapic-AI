import React, { useState } from "react";
import { Sparkles, Lock, ArrowRight, ShieldCheck, Camera, CheckCircle2 } from "lucide-react";

export default function PhotographerLogin({ navigate }) {
  const [email, setEmail] = useState("elena.vance@fineartweddings.com");
  const [password, setPassword] = useState("••••••••••••");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/photographer/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] flex flex-col justify-center items-center px-4 py-12 select-none">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#BAC8B1]/50 space-y-6">
        
        {/* Logo */}
        <div className="text-center space-y-2">
          <div 
            onClick={() => navigate("/")} 
            className="w-12 h-12 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center mx-auto shadow-md cursor-pointer hover:scale-105 transition-transform"
          >
            <Sparkles className="w-6 h-6 text-[#7B9669]" />
          </div>
          <h1 className="text-2xl font-extrabold text-[#404E3B] tracking-tight">
            Photographer Studio
          </h1>
          <p className="text-xs text-[#6C8480]">
            Sign in to manage wedding galleries, track AI matching, and download analytics.
          </p>
        </div>

        {/* Demo Fast Track Login Pill */}
        <div 
          onClick={() => navigate("/photographer/dashboard")}
          className="p-3.5 rounded-2xl bg-[#BAC8B1]/20 border border-[#BAC8B1] flex items-center justify-between cursor-pointer hover:bg-[#BAC8B1]/40 transition-colors"
        >
          <div className="flex items-center gap-2 text-xs text-[#404E3B]">
            <CheckCircle2 className="w-4 h-4 text-[#7B9669]" />
            <span>Fast-track Demo Pro Session</span>
          </div>
          <span className="text-[11px] font-bold text-[#7B9669] flex items-center gap-1">
            Sign In Now <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#404E3B] uppercase tracking-wider mb-1.5">
              Studio Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-[#404E3B] text-sm focus:border-[#7B9669] focus:bg-white outline-none transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-[#404E3B] uppercase tracking-wider">
                Password
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[11px] text-[#6C8480] hover:text-[#404E3B]">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-[#404E3B] text-sm focus:border-[#7B9669] focus:bg-white outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Access Photographer Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-[#6C8480]">
          Don't have a studio account?{" "}
          <button
            onClick={() => navigate("/photographer/events/create")}
            className="font-bold text-[#7B9669] hover:underline cursor-pointer"
          >
            Create an Event Tier
          </button>
        </div>

        <div className="pt-2 border-t border-[#BAC8B1]/30 flex items-center justify-center gap-2 text-[11px] text-[#6C8480]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#7B9669]" />
          <span>Encrypted with TLS 1.3 & Biometric Isolation</span>
        </div>
      </div>
    </div>
  );
}
