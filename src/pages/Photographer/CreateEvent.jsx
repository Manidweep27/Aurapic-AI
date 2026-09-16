import React, { useState } from "react";
import { Sparkles, Calendar, MapPin, Users, Image, ArrowRight, ArrowLeft, Check, QrCode, Download, Copy, Printer } from "lucide-react";
import { PRICING_TIERS } from "../../data/mockData";

export default function CreateEvent({ navigate }) {
  const [eventName, setEventName] = useState("Chloe & Liam's Garden Wedding");
  const [eventDate, setEventDate] = useState("2026-10-18");
  const [eventLocation, setEventLocation] = useState("Meadowood Estate, St. Helena, CA");
  const [expectedGuests, setExpectedGuests] = useState(175);
  const [expectedPhotos, setExpectedPhotos] = useState(2000);
  const [selectedTier, setSelectedTier] = useState("standard");
  const [createdEvent, setCreatedEvent] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: `evt_${Date.now()}`,
      name: eventName,
      date: new Date(eventDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      location: eventLocation,
      guestsCount: Number(expectedGuests),
      photosCount: 0,
      maxPhotos: selectedTier === "micro" ? 600 : selectedTier === "standard" ? 2500 : selectedTier === "grand" ? 6000 : 99999,
      tier: selectedTier.toUpperCase(),
      status: "LIVE",
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://aurapic.ai/guest?event=evt_${Date.now()}&color=40-78-59`
    };
    setCreatedEvent(newEvent);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://aurapic.ai/guest?event=${createdEvent?.id}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = createdEvent.qrCodeUrl;
    link.download = `${createdEvent.name.replace(/\s+/g, "_")}_QR.png`;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] py-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-3xl mx-auto">
        
        {/* Top Back Nav */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/photographer/dashboard")}
            className="flex items-center gap-2 text-xs font-bold text-[#6C8480] hover:text-[#404E3B] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#BAC8B1]/40 text-[#404E3B]">
            Event Setup Wizard
          </span>
        </div>

        {!createdEvent ? (
          /* Event Form Card */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#BAC8B1]/50 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7B9669]">
                Step 1 of 2
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] tracking-tight mt-1">
                Create Your Event
              </h1>
              <p className="text-xs sm:text-sm text-[#6C8480]">
                Configure event details and pick a tier to automatically generate dynamic QR cards for reception tables.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Event Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-2">
                  Event Name
                </label>
                <input
                  type="text"
                  required
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="e.g. Sarah & John's Wedding"
                  className="w-full px-4 py-3 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-sm text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Date & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-2">
                    Event Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-sm text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-2">
                    Location / Venue
                  </label>
                  <input
                    type="text"
                    required
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="e.g. Sonoma Valley, CA"
                    className="w-full px-4 py-3 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-sm text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              {/* Expected Guests & Expected Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-2">
                    Expected Guests
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="10000"
                    value={expectedGuests}
                    onChange={(e) => setExpectedGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-sm text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-2">
                    Expected Photos
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="50000"
                    value={expectedPhotos}
                    onChange={(e) => setExpectedPhotos(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#E6E6E6]/40 border border-[#BAC8B1] text-sm text-[#404E3B] focus:border-[#7B9669] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subscription Tier Picker */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404E3B] mb-3">
                  Select Event Subscription Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {PRICING_TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.id;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#404E3B] text-white border-[#7B9669] shadow-md ring-2 ring-[#7B9669]"
                            : "bg-[#E6E6E6]/30 text-[#404E3B] border-[#BAC8B1]/60 hover:bg-[#E6E6E6]/60"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider">
                              {tier.name}
                            </span>
                            {tier.popular && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#7B9669] text-white">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="text-xl font-extrabold mt-1">
                            {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                          </div>
                          <p className="text-[11px] opacity-80 mt-1">
                            {tier.guests} Guests • {tier.photos} Photos
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-current/15 flex items-center gap-1 text-[11px] font-semibold">
                          <Check className="w-3.5 h-3.5 text-[#7B9669]" />
                          <span>{isSelected ? "Selected" : "Choose"}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Create Event & Generate QR Code</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* Post-Creation Success Card with QR Code Generator */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#BAC8B1]/50 text-center space-y-6 animate-in zoom-in-95">
            <div className="w-14 h-14 rounded-2xl bg-[#7B9669] text-white flex items-center justify-center mx-auto shadow-md">
              <QrCode className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B9669]">
                Event Successfully Created!
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] mt-1">
                Your Event QR Code
              </h2>
              <p className="text-xs sm:text-sm text-[#6C8480] mt-1 max-w-md mx-auto">
                Ready to print or display on reception tables for <strong>{createdEvent.name}</strong>.
              </p>
            </div>

            {/* Generated QR Card */}
            <div className="p-6 rounded-2xl bg-[#E6E6E6]/60 border-2 border-dashed border-[#BAC8B1] inline-block shadow-xs">
              <img
                src={createdEvent.qrCodeUrl}
                alt="Event QR Code"
                className="w-56 h-56 mx-auto rounded-lg shadow-sm"
              />
              <div className="mt-3 text-sm font-extrabold text-[#404E3B]">
                {createdEvent.name}
              </div>
              <div className="text-xs text-[#6C8480]">
                {createdEvent.date} • {createdEvent.location}
              </div>
            </div>

            {/* Required Action Buttons: Download QR, Copy Event Link, Print QR */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
              <button
                onClick={handleDownloadQR}
                className="py-3 px-4 rounded-xl border border-[#BAC8B1] bg-white hover:bg-[#E6E6E6] text-[#404E3B] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-[#7B9669]" />
                <span>Download QR</span>
              </button>

              <button
                onClick={handleCopy}
                className="py-3 px-4 rounded-xl border border-[#BAC8B1] bg-white hover:bg-[#E6E6E6] text-[#404E3B] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                {copiedLink ? <Check className="w-4 h-4 text-[#7B9669]" /> : <Copy className="w-4 h-4 text-[#6C8480]" />}
                <span>{copiedLink ? "Link Copied!" : "Copy Event Link"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="py-3 px-4 rounded-xl border border-[#BAC8B1] bg-white hover:bg-[#E6E6E6] text-[#404E3B] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Printer className="w-4 h-4 text-[#404E3B]" />
                <span>Print QR</span>
              </button>
            </div>

            {/* Next Steps Buttons */}
            <div className="pt-4 border-t border-[#BAC8B1]/40 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate("/photographer/upload")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Proceed to Upload Photos →
              </button>
              <button
                onClick={() => navigate("/photographer/dashboard")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-[#BAC8B1] text-[#404E3B] text-xs font-semibold cursor-pointer"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
