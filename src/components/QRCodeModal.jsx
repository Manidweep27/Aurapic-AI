import React, { useState } from "react";
import { X, Download, Copy, Printer, Check, QrCode, Sparkles, ExternalLink } from "lucide-react";

export default function QRCodeModal({ event, onClose, onLaunchGuestView }) {
  const [copied, setCopied] = useState(false);

  if (!event) return null;

  const eventLink = `https://aurapic.ai/guest?event=${event.id || "evt_demo"}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(eventLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(eventLink)}&color=40-78-59`;
    link.download = `${event.name.replace(/\s+/g, "_")}_AuraPic_QR.png`;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#404E3B]/80 backdrop-blur-md animate-in fade-in select-none">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#BAC8B1]/40 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#6C8480] hover:text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B9669]/15 text-[#404E3B] text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#7B9669]" />
          Instant Guest Onboarding
        </div>

        <h3 className="text-xl font-bold text-[#404E3B]">Your Event QR Code</h3>
        <p className="text-xs text-[#6C8480] mt-1 mb-6">
          Display this card on wedding reception tables. Guests scan it to discover their photos instantly.
        </p>

        {/* QR Display Card */}
        <div className="p-6 rounded-2xl bg-[#E6E6E6]/60 border-2 border-dashed border-[#BAC8B1] inline-block mb-6 relative group">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(eventLink)}&color=40-78-59`}
            alt="Event QR Code"
            className="w-48 h-48 mx-auto rounded-lg shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="mt-3 text-xs font-bold tracking-tight text-[#404E3B]">
            {event.name}
          </div>
          <div className="text-[10px] text-[#6C8480]">Powered by AuraPic AI Face Matching</div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          <button
            onClick={handleDownloadQR}
            className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#BAC8B1] hover:border-[#7B9669] text-[#404E3B] text-xs font-semibold transition-all cursor-pointer hover:shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7B9669]" />
            Download QR
          </button>

          <button
            onClick={handleCopy}
            className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#BAC8B1] hover:border-[#7B9669] text-[#404E3B] text-xs font-semibold transition-all cursor-pointer hover:shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-[#7B9669]" /> : <Copy className="w-4 h-4 text-[#6C8480]" />}
            {copied ? "Copied!" : "Copy Link"}
          </button>

          <button
            onClick={handlePrint}
            className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#BAC8B1] hover:border-[#7B9669] text-[#404E3B] text-xs font-semibold transition-all cursor-pointer hover:shadow-xs"
          >
            <Printer className="w-4 h-4 text-[#404E3B]" />
            Print QR
          </button>
        </div>

        {/* Direct Test Simulator CTA */}
        {onLaunchGuestView && (
          <button
            onClick={() => {
              onClose();
              onLaunchGuestView();
            }}
            className="w-full py-3 px-4 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Test Guest Scan Flow Now</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
