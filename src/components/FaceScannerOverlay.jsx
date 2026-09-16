import React, { useState } from "react";
import { Sparkles, Scan, CheckCircle2, UserCheck, Shield } from "lucide-react";

export default function FaceScannerOverlay({ photo, showScanLine = true, isInteractive = true, onSelect }) {
  const [hoveredFace, setHoveredFace] = useState(null);
  const [showBoxes, setShowBoxes] = useState(true);

  return (
    <div 
      onClick={() => onSelect && onSelect(photo)}
      className="relative rounded-2xl overflow-hidden bg-[#404E3B] shadow-xl group border border-[#BAC8B1]/40 select-none cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
    >
      {/* Photo Image */}
      <img
        src={photo.url || photo.thumbnail}
        alt={photo.title || "Wedding moment"}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 aspect-[4/3]"
        loading="lazy"
      />

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#404E3B]/80 via-transparent to-black/20 pointer-events-none" />

      {/* Laser Scanning Line Animation */}
      {showScanLine && (
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#7B9669] to-transparent animate-scan-laser pointer-events-none shadow-[0_0_15px_#7B9669]" />
      )}

      {/* Face Bounding Boxes */}
      {showBoxes && photo.faces && photo.faces.map((face, index) => {
        const isMatchedGuest = face.confidence >= 97;
        const isHighlighted = hoveredFace === face.id || isMatchedGuest;

        return (
          <div
            key={face.id || index}
            onMouseEnter={() => setHoveredFace(face.id)}
            onMouseLeave={() => setHoveredFace(null)}
            style={{
              top: `${face.bbox.top}%`,
              left: `${face.bbox.left}%`,
              width: `${face.bbox.width}%`,
              height: `${face.bbox.height}%`,
            }}
            className={`absolute transition-all duration-300 pointer-events-auto rounded-lg ${
              isMatchedGuest
                ? "border-2 border-[#7B9669] bg-[#7B9669]/15 shadow-[0_0_15px_rgba(123,150,105,0.6)]"
                : "border border-[#BAC8B1]/60 bg-white/5"
            }`}
          >
            {/* Corner brackets */}
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white rounded-tl-xs" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white rounded-tr-xs" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white rounded-bl-xs" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white rounded-br-xs" />

            {/* Floating Tag */}
            {isHighlighted && (
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-[#404E3B]/95 backdrop-blur-md border border-[#7B9669]/60 text-white text-[10px] font-semibold flex items-center gap-1 shadow-lg z-20 animate-in fade-in zoom-in-75">
                <Sparkles className="w-3 h-3 text-[#7B9669]" />
                <span>{face.confidence}% Match</span>
              </div>
            )}
          </div>
        );
      })}

      {/* Floating Hero AI Match Found Card */}
      {photo.matchConfidence && (
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#BAC8B1] shadow-lg flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#7B9669]/20 flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7B9669]" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#404E3B] uppercase tracking-wider">AI Match Found</div>
            <div className="text-[11px] font-semibold text-[#7B9669]">{photo.matchConfidence}% Confidence</div>
          </div>
        </div>
      )}

      {/* Bottom Photo Metadata */}
      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs">
        <div>
          <p className="font-semibold text-white drop-shadow-sm truncate max-w-[180px]">{photo.title}</p>
          <p className="text-[11px] text-[#BAC8B1] flex items-center gap-1">
            <Scan className="w-3 h-3 text-[#7B9669]" />
            {photo.facesCount || 1} Faces Detected
          </p>
        </div>

        <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#404E3B]/80 text-[#BAC8B1] border border-[#BAC8B1]/30">
          {photo.category || "Wedding Moment"}
        </span>
      </div>
    </div>
  );
}
