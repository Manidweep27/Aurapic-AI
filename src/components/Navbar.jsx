import React, { useState } from "react";
import { Sparkles, Camera, ShieldCheck, Menu, X, ArrowRight, UserCheck } from "lucide-react";

export default function Navbar({ currentRoute, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "AI Technology", path: "/ai" },
    { name: "Privacy", path: "/privacy" },
    { name: "For Photographers", path: "/photographer/dashboard" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#BAC8B1]/40 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#404E3B] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-[#7B9669]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight text-[#404E3B]">AuraPic</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#BAC8B1]/40 text-[#404E3B] tracking-wider">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-[#6C8480] font-medium hidden sm:block">
                Your Moments. Found Instantly.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? "text-[#404E3B] bg-[#BAC8B1]/30 font-semibold"
                      : "text-[#404E3B]/80 hover:text-[#404E3B] hover:bg-[#E6E6E6]/60"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate("/guest")}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#6C8480] hover:text-[#404E3B] border border-[#6C8480]/30 rounded-lg hover:bg-white transition-all cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#7B9669]" />
              Guest Demo
            </button>

            <button
              onClick={() => navigate("/photographer/login")}
              className="text-sm font-semibold text-[#404E3B] hover:text-[#7B9669] px-3 py-2 transition-colors cursor-pointer"
            >
              Photographer Login
            </button>

            <button
              onClick={() => navigate("/photographer/events/create")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
            >
              <span>Create Event</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => navigate("/guest")}
              className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-[#7B9669] text-white"
            >
              Guest Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#404E3B] hover:bg-[#BAC8B1]/30 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#BAC8B1]/40 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                navigate(link.path);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-[#404E3B] hover:bg-[#E6E6E6]"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-[#BAC8B1]/30 space-y-2">
            <button
              onClick={() => {
                navigate("/photographer/login");
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-xl border border-[#404E3B] text-[#404E3B] font-semibold text-sm"
            >
              Photographer Login
            </button>
            <button
              onClick={() => {
                navigate("/photographer/events/create");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#7B9669] text-white font-semibold text-sm shadow-md"
            >
              <span>Create Event</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
