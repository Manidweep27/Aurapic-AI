import React from "react";
import { Sparkles, ShieldCheck, Lock, Heart, Camera } from "lucide-react";

export default function Footer({ navigate }) {
  return (
    <footer className="bg-[#404E3B] text-[#E6E6E6] border-t border-[#7B9669]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer select-none inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-[#7B9669] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">AuraPic</span>
            </div>
            
            <p className="text-lg font-semibold text-[#BAC8B1]">
              "Your Moments. Found Instantly."
            </p>
            <p className="text-sm text-[#E6E6E6]/80 max-w-md leading-relaxed">
              AI-powered wedding photo delivery that finds your memories in seconds. Privacy-first, zero biometric retention, and luxury editorial delivery.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs text-[#BAC8B1]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#7B9669]" />
                GDPR & CCPA Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#7B9669]" />
                AES-256 Cloud Vault
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#BAC8B1]">Platform</h4>
            <ul className="space-y-2 text-sm text-[#E6E6E6]/80">
              <li>
                <button onClick={() => navigate("/how-it-works")} className="hover:text-white transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/ai")} className="hover:text-white transition-colors cursor-pointer">
                  AI Technology
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/guest")} className="hover:text-white transition-colors cursor-pointer">
                  Guest Mobile Demo
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/pricing")} className="hover:text-white transition-colors cursor-pointer">
                  Event Pricing Tiers
                </button>
              </li>
            </ul>
          </div>

          {/* For Photographers */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#BAC8B1]">For Photographers</h4>
            <ul className="space-y-2 text-sm text-[#E6E6E6]/80">
              <li>
                <button onClick={() => navigate("/photographer/dashboard")} className="hover:text-white transition-colors cursor-pointer">
                  Photographer Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/photographer/upload")} className="hover:text-white transition-colors cursor-pointer">
                  Batch RAW Uploader
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/photographer/events/create")} className="hover:text-white transition-colors cursor-pointer">
                  Create New Event
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/photographer/analytics")} className="hover:text-white transition-colors cursor-pointer">
                  Live Guest Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Privacy */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#BAC8B1]">Trust & Legal</h4>
            <ul className="space-y-2 text-sm text-[#E6E6E6]/80">
              <li>
                <button onClick={() => navigate("/privacy")} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/privacy")} className="hover:text-white transition-colors cursor-pointer">
                  Zero-Retention Guarantee
                </button>
              </li>
              <li>
                <span className="text-[#E6E6E6]/60 cursor-default">
                  Security Whitepaper
                </span>
              </li>
              <li>
                <span className="text-[#E6E6E6]/60 cursor-default">
                  support@aurapic.ai
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#BAC8B1]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6E6E6]/70">
          <p>© 2026 AuraPic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer" onClick={() => navigate("/privacy")}>Privacy Terms</span>
            <span className="hover:text-white cursor-pointer" onClick={() => navigate("/privacy")}>Biometric Policy</span>
            <span className="hover:text-white cursor-pointer" onClick={() => navigate("/pricing")}>SaaS Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
