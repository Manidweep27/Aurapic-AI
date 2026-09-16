import React, { useState } from "react";
import { X, Download, Heart, Share2, Check, Sparkles, Lock, ShieldCheck, Eye, EyeOff, Maximize2 } from "lucide-react";

export default function LightboxModal({ photo, eventName = "Sarah & John's Wedding", onClose, onToggleFavorite, isFavorite }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showFaceBoxes, setShowFaceBoxes] = useState(true);

  if (!photo) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Trigger download simulation
    const link = document.createElement("a");
    link.href = photo.url;
    link.download = `AuraPic_${photo.id || "memory"}_HighRes.jpg`;
    link.target = "_blank";
    link.click();

    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#404E3B]/90 backdrop-blur-xl animate-in fade-in duration-200 select-none">
      {/* Container Card */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#BAC8B1]/40">
        {/* Top Bar */}
        <div className="px-5 py-3.5 bg-white border-b border-[#BAC8B1]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#BAC8B1]/30 text-[#404E3B] text-xs font-semibold">
              <Lock className="w-3 h-3 text-[#7B9669]" />
              Private to you
            </span>
            <div className="hidden sm:block text-xs text-[#6C8480]">
              Event: <span className="font-semibold text-[#404E3B]">{eventName}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B9669]/15 border border-[#7B9669]/40 text-[#404E3B] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#7B9669]" />
              AI Match: {photo.matchConfidence || "98.7"}%
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Photo Area */}
        <div className="relative flex-1 bg-[#404E3B] flex items-center justify-center overflow-hidden min-h-[380px] sm:min-h-[460px]">
          <img
            src={photo.url}
            alt={photo.title}
            className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
          />

          {/* Facial Bounding Boxes Toggle */}
          {showFaceBoxes && photo.faces && photo.faces.map((face, index) => (
            <div
              key={index}
              style={{
                top: `${face.bbox.top}%`,
                left: `${face.bbox.left}%`,
                width: `${face.bbox.width}%`,
                height: `${face.bbox.height}%`,
              }}
              className="absolute border-2 border-[#7B9669] rounded-lg bg-[#7B9669]/10 pointer-events-none transition-all"
            >
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#404E3B] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#7B9669]/50 whitespace-nowrap shadow-md">
                {face.name} ({face.confidence}%)
              </span>
            </div>
          ))}

          {/* Toggle facial scan overlay switch */}
          {photo.faces && photo.faces.length > 0 && (
            <button
              onClick={() => setShowFaceBoxes(!showFaceBoxes)}
              className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20 hover:bg-black/80 transition-all cursor-pointer"
            >
              {showFaceBoxes ? <EyeOff className="w-3.5 h-3.5 text-[#BAC8B1]" /> : <Eye className="w-3.5 h-3.5 text-[#BAC8B1]" />}
              {showFaceBoxes ? "Hide Face Boxes" : "Show Face Boxes"}
            </button>
          )}

          {/* Quality badge */}
          <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-mono border border-white/10">
            {photo.dimensions || "6000 x 4000 RAW"} • {photo.fileSize || "14.2 MB"}
          </div>
        </div>

        {/* Bottom Details & Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#BAC8B1]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[#404E3B]">{photo.title}</h3>
            <p className="text-xs text-[#6C8480]">
              Captured at {photo.time || "Ceremony"} • Verified by InsightFace Vector Engine
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Favorite button */}
            <button
              onClick={() => onToggleFavorite && onToggleFavorite(photo.id)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                isFavorite
                  ? "bg-rose-50 border-rose-200 text-rose-600"
                  : "bg-white border-[#BAC8B1] text-[#404E3B] hover:bg-[#E6E6E6]"
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? "fill-rose-600" : ""}`} />
              <span>{isFavorite ? "Favorited" : "Favorite"}</span>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#BAC8B1] bg-white text-[#404E3B] hover:bg-[#E6E6E6] text-sm font-semibold transition-all cursor-pointer"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#7B9669]" /> : <Share2 className="w-4 h-4 text-[#6C8480]" />}
              <span>{copiedLink ? "Link Copied!" : "Share"}</span>
            </button>

            {/* HD Download button */}
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-sm font-semibold shadow-md transition-all cursor-pointer active:scale-95"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download HD</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
