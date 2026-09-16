import React, { useState } from "react";
import { 
  Sparkles, Calendar, Users, Image, Download, Upload, Plus, QrCode, 
  BarChart2, HardDrive, Settings, LogOut, CheckCircle2, ChevronRight, 
  ExternalLink, Layers, ArrowUpRight, Clock
} from "lucide-react";
import { MOCK_PHOTOGRAPHER_EVENTS, MOCK_EVENT } from "../../data/mockData";
import QRCodeModal from "../../components/QRCodeModal";

export default function Dashboard({ navigate }) {
  const [selectedQR, setSelectedQR] = useState(null);
  const [events, setEvents] = useState(MOCK_PHOTOGRAPHER_EVENTS);

  return (
    <div className="min-h-screen bg-[#E6E6E6] flex flex-col md:flex-row select-none">
      
      {/* Photographer Sidebar */}
      <aside className="w-full md:w-64 bg-[#404E3B] text-white p-6 flex flex-col justify-between shrink-0 border-r border-[#7B9669]/30">
        <div>
          {/* Brand Logo */}
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-3 cursor-pointer mb-8"
          >
            <div className="w-9 h-9 rounded-xl bg-[#7B9669] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">AuraPic</span>
              <span className="block text-[10px] text-[#BAC8B1] tracking-wider uppercase font-semibold">
                Studio Suite
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-sm font-medium">
            <button
              onClick={() => navigate("/photographer/dashboard")}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#7B9669] text-white font-bold cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate("/photographer/events")}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#BAC8B1] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </button>

            <button
              onClick={() => navigate("/photographer/upload")}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#BAC8B1] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Photos</span>
            </button>

            <button
              onClick={() => navigate("/photographer/analytics")}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#BAC8B1] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Analytics</span>
            </button>

            <button
              onClick={() => navigate("/pricing")}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#BAC8B1] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <HardDrive className="w-4 h-4" />
              <span>Storage & Tier</span>
            </button>

            <button
              onClick={() => navigate("/photographer/settings")}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#BAC8B1] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div className="pt-6 border-t border-[#7B9669]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="Elena Vance"
              className="w-8 h-8 rounded-full object-cover border border-[#7B9669]"
            />
            <div className="truncate">
              <div className="text-xs font-bold text-white truncate">Elena Vance</div>
              <div className="text-[10px] text-[#BAC8B1]">Studio Pro</div>
            </div>
          </div>
          <button
            onClick={() => navigate("/photographer/login")}
            className="p-1.5 text-[#BAC8B1] hover:text-white transition-colors cursor-pointer"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 max-w-7xl mx-auto overflow-y-auto">
        
        {/* Header greeting & action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#BAC8B1]/40">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B9669]">
              Studio Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] mt-1">
              Good morning, Photographer 👋
            </h1>
            <p className="text-xs sm:text-sm text-[#6C8480]">
              You have 3 active wedding galleries. AI face matching is active on all live streams.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/photographer/upload")}
              className="px-4 py-2.5 rounded-xl border border-[#BAC8B1] bg-white text-[#404E3B] hover:bg-[#E6E6E6] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Upload className="w-4 h-4 text-[#7B9669]" />
              <span>Upload Photos</span>
            </button>

            <button
              onClick={() => navigate("/photographer/events/create")}
              className="px-4 py-2.5 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>New Event</span>
            </button>
          </div>
        </div>

        {/* Global Key Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="flex items-center justify-between text-[#6C8480] mb-2">
              <span className="text-xs font-semibold uppercase">Total Guests</span>
              <Users className="w-4 h-4 text-[#7B9669]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#404E3B]">187</div>
            <div className="text-[11px] text-[#7B9669] font-medium mt-1">78.4% engagement</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="flex items-center justify-between text-[#6C8480] mb-2">
              <span className="text-xs font-semibold uppercase">Photos Processed</span>
              <Image className="w-4 h-4 text-[#7B9669]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#404E3B]">1,420</div>
            <div className="text-[11px] text-[#6C8480] mt-1">2,500 event cap</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="flex items-center justify-between text-[#6C8480] mb-2">
              <span className="text-xs font-semibold uppercase">AI Matches Found</span>
              <Sparkles className="w-4 h-4 text-[#7B9669]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#7B9669]">3,842</div>
            <div className="text-[11px] text-[#404E3B] font-medium mt-1">98.7% avg confidence</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="flex items-center justify-between text-[#6C8480] mb-2">
              <span className="text-xs font-semibold uppercase">Downloads</span>
              <Download className="w-4 h-4 text-[#7B9669]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#404E3B]">642</div>
            <div className="text-[11px] text-[#7B9669] font-medium mt-1">Uncompressed HD</div>
          </div>
        </div>

        {/* Section Heading: Event Cards */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#404E3B]">
            Active Event Galleries
          </h2>
          <span className="text-xs text-[#6C8480]">Showing 3 events</span>
        </div>

        {/* Event Cards Grid */}
        <div className="space-y-6">
          {events.map((evt) => {
            const isLive = evt.status === "LIVE";
            const isProcessing = evt.status === "PROCESSING";

            return (
              <div
                key={evt.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 hover:shadow-md transition-shadow"
              >
                {/* Event Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#BAC8B1]/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-extrabold text-[#404E3B] tracking-tight">
                        {evt.name}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        isLive
                          ? "bg-emerald-100 text-emerald-800"
                          : isProcessing
                          ? "bg-amber-100 text-amber-800 animate-pulse"
                          : "bg-[#E6E6E6] text-[#404E3B]"
                      }`}>
                        ● {evt.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#6C8480]">
                      Date: <span className="font-semibold text-[#404E3B]">{evt.date}</span> • Location: {evt.location} • Tier: <span className="font-semibold">{evt.tier}</span>
                    </p>
                  </div>

                  {/* QR Code trigger */}
                  <button
                    onClick={() => setSelectedQR(evt)}
                    className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#BAC8B1] hover:border-[#7B9669] text-xs font-semibold text-[#404E3B] bg-white transition-colors cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-[#7B9669]" />
                    <span>View Event QR</span>
                  </button>
                </div>

                {/* Event Statistics Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-xs">
                  <div>
                    <div className="text-[11px] text-[#6C8480]">Photos Uploaded</div>
                    <div className="text-base font-bold text-[#404E3B] mt-0.5">
                      {evt.photosCount.toLocaleString()} / {evt.maxPhotos.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#6C8480]">Guests Enrolled</div>
                    <div className="text-base font-bold text-[#404E3B] mt-0.5">
                      {evt.guestsCount} Guests
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#6C8480]">AI Face Matches</div>
                    <div className="text-base font-bold text-[#7B9669] mt-0.5">
                      {evt.aiMatches.toLocaleString()} Matches
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#6C8480]">HD Downloads</div>
                    <div className="text-base font-bold text-[#404E3B] mt-0.5">
                      {evt.downloads.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pb-6">
                  <div className="flex items-center justify-between text-[11px] text-[#6C8480]">
                    <span>AI Ingestion & S3 Sync</span>
                    <span className="font-semibold text-[#404E3B]">{evt.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E6E6E6] overflow-hidden">
                    <div 
                      className="h-full bg-[#7B9669] rounded-full transition-all duration-500" 
                      style={{ width: `${evt.progress}%` }}
                    />
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#BAC8B1]/30">
                  <button
                    onClick={() => navigate("/guest/gallery")}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Open Event</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => navigate("/photographer/upload")}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#BAC8B1] bg-white hover:bg-[#E6E6E6]/60 text-[#404E3B] text-xs font-bold transition-all cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#6C8480]" />
                    <span>Upload Photos</span>
                  </button>

                  <button
                    onClick={() => navigate("/photographer/analytics")}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#BAC8B1] bg-white hover:bg-[#E6E6E6]/60 text-[#404E3B] text-xs font-bold transition-all cursor-pointer"
                  >
                    <BarChart2 className="w-3.5 h-3.5 text-[#6C8480]" />
                    <span>Live Analytics</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* QR Modal when requested */}
      {selectedQR && (
        <QRCodeModal
          event={selectedQR}
          onClose={() => setSelectedQR(null)}
          onLaunchGuestView={() => navigate("/guest")}
        />
      )}
    </div>
  );
}
