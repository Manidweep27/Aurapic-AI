import React, { useState } from "react";
import { 
  ShieldCheck, HardDrive, Key, Bell, Check, Save, ArrowLeft, 
  Camera, Lock, RefreshCw, CheckCircle2 
} from "lucide-react";

export default function Settings({ navigate }) {
  const [studioName, setStudioName] = useState("Vance Fine Art Studios");
  const [contactEmail, setContactEmail] = useState("elena.vance@fineartweddings.com");
  const [glacierTransitionDays, setGlacierTransitionDays] = useState(30);
  const [purgeDays, setPurgeDays] = useState(90);
  const [autoPurgeSelfie, setAutoPurgeSelfie] = useState(true);
  const [watermarkHD, setWatermarkHD] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div>
          <button
            onClick={() => navigate("/photographer/dashboard")}
            className="flex items-center gap-2 text-xs font-bold text-[#6C8480] hover:text-[#404E3B] cursor-pointer mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] tracking-tight">
            Studio & Cloud Architecture Settings
          </h1>
          <p className="text-xs sm:text-sm text-[#6C8480]">
            Configure S3 Glacier lifecycle transitions, biometric compliance policies, and Lightroom API webhooks.
          </p>
        </div>

        {/* Saved Toast */}
        {saved && (
          <div className="p-3 bg-[#404E3B] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-md animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-[#7B9669]" />
            <span>Settings saved and synced to AWS S3 lifecycle policy rules.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Studio Profile */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <h3 className="text-base font-bold text-[#404E3B] flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#7B9669]" />
              <span>Studio Profile & Branding</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-1.5">
                  Studio Name
                </label>
                <input
                  type="text"
                  value={studioName}
                  onChange={(e) => setStudioName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-xs text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-1.5">
                  Studio Notification Email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-xs text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none"
                />
              </div>
            </div>
          </div>

          {/* S3 Glacier Lifecycle Storage */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <h3 className="text-base font-bold text-[#404E3B] flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-[#7B9669]" />
              <span>Dual-Tier S3 Glacier IR Lifecycle Management</span>
            </h3>
            <p className="text-xs text-[#6C8480]">
              Automate cold storage migration to slash AWS S3 hosting fees by up to 68%.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-1.5">
                  Standard S3 to Glacier IR Transition
                </label>
                <select
                  value={glacierTransitionDays}
                  onChange={(e) => setGlacierTransitionDays(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-xs text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none cursor-pointer"
                >
                  <option value={15}>Day 15 post-event</option>
                  <option value={30}>Day 30 post-event (Recommended)</option>
                  <option value={60}>Day 60 post-event</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-1.5">
                  Full Event Archival & Purge
                </label>
                <select
                  value={purgeDays}
                  onChange={(e) => setPurgeDays(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-xs text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none cursor-pointer"
                >
                  <option value={60}>60 Days (Micro Tiers)</option>
                  <option value={90}>90 Days (Standard & Grand)</option>
                  <option value={365}>365 Days (Enterprise)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Biometric & Security Policies */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <h3 className="text-base font-bold text-[#404E3B] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7B9669]" />
              <span>Biometric Security & Compliance</span>
            </h3>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#E6E6E6]/30 border border-[#BAC8B1]/40 cursor-pointer">
                <div>
                  <span className="font-bold text-[#404E3B] block">Enforce 60-Second Selfie Purge</span>
                  <span className="text-[#6C8480]">Automatically deletes raw guest selfies after 512-D vector extraction.</span>
                </div>
                <input
                  type="checkbox"
                  checked={autoPurgeSelfie}
                  onChange={(e) => setAutoPurgeSelfie(e.target.checked)}
                  className="w-4 h-4 accent-[#7B9669]"
                />
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#E6E6E6]/30 border border-[#BAC8B1]/40 cursor-pointer">
                <div>
                  <span className="font-bold text-[#404E3B] block">Signed Presigned S3 Tokens Only</span>
                  <span className="text-[#6C8480]">Expire uncompressed master download links after 15 minutes.</span>
                </div>
                <input
                  type="checkbox"
                  defaultChecked={true}
                  disabled
                  className="w-4 h-4 accent-[#7B9669]"
                />
              </label>
            </div>
          </div>

          {/* API Keys */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <h3 className="text-base font-bold text-[#404E3B] flex items-center gap-2">
              <Key className="w-4 h-4 text-[#7B9669]" />
              <span>Lightroom / Camera Auto-Tether API Key</span>
            </h3>
            <div className="p-3.5 rounded-xl bg-[#E6E6E6]/50 border border-[#BAC8B1]/40 font-mono text-xs flex items-center justify-between text-[#404E3B]">
              <span>aurapic_live_sec_89dfb37c19a0029b4e</span>
              <span className="text-[10px] font-sans font-bold text-[#7B9669]">Active Key</span>
            </div>
          </div>

          {/* Save Action */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
