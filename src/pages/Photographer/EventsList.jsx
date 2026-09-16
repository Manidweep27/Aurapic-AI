import React, { useState } from "react";
import { 
  Plus, QrCode, Upload, Eye, BarChart2, Trash2, Pause, Play, 
  ArrowLeft, CheckCircle2, HardDrive, Download, Calendar, Sparkles 
} from "lucide-react";
import { MOCK_PHOTOGRAPHER_EVENTS } from "../../data/mockData";
import QRCodeModal from "../../components/QRCodeModal";

export default function EventsList({ navigate }) {
  const [events, setEvents] = useState([
    ...MOCK_PHOTOGRAPHER_EVENTS,
    {
      id: "evt_wedding_sophia_ethan_2025",
      name: "Sophia & Ethan's Winter Vows",
      date: "December 12, 2025",
      location: "Aspen, CO",
      status: "EXPIRED",
      tier: "Standard",
      photosCount: 2400,
      maxPhotos: 2500,
      guestsCount: 190,
      aiMatches: 4120,
      downloads: 1280,
      progress: 100
    }
  ]);
  const [selectedQR, setSelectedQR] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const toggleEventStatus = (id) => {
    setEvents((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          const nextStatus = e.status === "LIVE" ? "PAUSED" : "LIVE";
          showToast(`Event status updated to ${nextStatus}`);
          return { ...e, status: nextStatus };
        }
        return e;
      })
    );
  };

  const deleteEvent = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"? This action permanently purges the gallery.`)) {
      setEvents((prev) => prev.filter((e) => e.id !== id));
      showToast(`Event "${name}" deleted.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => navigate("/photographer/dashboard")}
              className="flex items-center gap-2 text-xs font-bold text-[#6C8480] hover:text-[#404E3B] cursor-pointer mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] tracking-tight">
              Event Management
            </h1>
            <p className="text-xs sm:text-sm text-[#6C8480]">
              Manage live AI processing status, storage lifecycles, and guest QR access codes.
            </p>
          </div>

          <button
            onClick={() => navigate("/photographer/events/create")}
            className="px-5 py-3 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Event</span>
          </button>
        </div>

        {/* Toast alert */}
        {toastMessage && (
          <div className="p-3 bg-[#404E3B] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-md animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-[#7B9669]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Table / Cards Container */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#BAC8B1]/50 space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#BAC8B1]/40 text-[#6C8480] uppercase tracking-wider text-[10px]">
                  <th className="pb-3 font-bold">Event & Date</th>
                  <th className="pb-3 font-bold">Status</th>
                  <th className="pb-3 font-bold">Photos / Capacity</th>
                  <th className="pb-3 font-bold">Guests</th>
                  <th className="pb-3 font-bold">AI Matches</th>
                  <th className="pb-3 font-bold">Downloads</th>
                  <th className="pb-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#BAC8B1]/30">
                {events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-[#E6E6E6]/20 transition-colors">
                    {/* Event Name & Date */}
                    <td className="py-4 pr-4">
                      <div className="font-bold text-[#404E3B] text-sm">{evt.name}</div>
                      <div className="text-[11px] text-[#6C8480]">{evt.date} • {evt.location}</div>
                    </td>

                    {/* Status badge */}
                    <td className="py-4 pr-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        evt.status === "LIVE"
                          ? "bg-emerald-100 text-emerald-800"
                          : evt.status === "PROCESSING"
                          ? "bg-amber-100 text-amber-800 animate-pulse"
                          : evt.status === "PAUSED"
                          ? "bg-rose-100 text-rose-800"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        ● {evt.status}
                      </span>
                    </td>

                    {/* Photos Count */}
                    <td className="py-4 pr-4">
                      <div className="font-semibold text-[#404E3B]">
                        {evt.photosCount.toLocaleString()} / {evt.maxPhotos.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-[#6C8480]">{evt.tier} Tier</div>
                    </td>

                    {/* Guests */}
                    <td className="py-4 pr-4 font-semibold text-[#404E3B]">
                      {evt.guestsCount}
                    </td>

                    {/* AI Matches */}
                    <td className="py-4 pr-4 font-bold text-[#7B9669]">
                      {evt.aiMatches.toLocaleString()}
                    </td>

                    {/* Downloads */}
                    <td className="py-4 pr-4 font-semibold text-[#404E3B]">
                      {evt.downloads.toLocaleString()}
                    </td>

                    {/* Actions */}
                    <td className="py-4 text-right space-x-1 whitespace-nowrap">
                      <button
                        onClick={() => setSelectedQR(evt)}
                        title="Generate / Print QR"
                        className="p-2 rounded-lg text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
                      >
                        <QrCode className="w-4 h-4 text-[#7B9669]" />
                      </button>

                      <button
                        onClick={() => navigate("/photographer/upload")}
                        title="Upload Photos"
                        className="p-2 rounded-lg text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
                      >
                        <Upload className="w-4 h-4 text-[#6C8480]" />
                      </button>

                      <button
                        onClick={() => navigate("/guest/gallery")}
                        title="View Matched Gallery"
                        className="p-2 rounded-lg text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#404E3B]" />
                      </button>

                      <button
                        onClick={() => navigate("/photographer/analytics")}
                        title="View Analytics"
                        className="p-2 rounded-lg text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
                      >
                        <BarChart2 className="w-4 h-4 text-[#7B9669]" />
                      </button>

                      <button
                        onClick={() => toggleEventStatus(evt.id)}
                        title={evt.status === "LIVE" ? "Pause Processing" : "Resume Processing"}
                        className="p-2 rounded-lg text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
                      >
                        {evt.status === "LIVE" ? <Pause className="w-4 h-4 text-amber-600" /> : <Play className="w-4 h-4 text-emerald-600" />}
                      </button>

                      <button
                        onClick={() => deleteEvent(evt.id, evt.name)}
                        title="Delete Event"
                        className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
