import React, { useState } from "react";
import { Sparkles, Check, ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";
import { PRICING_TIERS } from "../data/mockData";

export default function PricingPage({ navigate }) {
  const [guestCount, setGuestCount] = useState(150);

  // Determine recommended tier based on guest slider
  let recommendedTier = "standard";
  if (guestCount <= 50) recommendedTier = "micro";
  else if (guestCount <= 200) recommendedTier = "standard";
  else if (guestCount <= 500) recommendedTier = "grand";
  else recommendedTier = "enterprise";

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] select-none pb-24">
      {/* Hero */}
      <section className="pt-16 pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-white px-3 py-1 rounded-full border border-[#BAC8B1]">
          Transparent Per-Event Billing
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#404E3B] tracking-tight mt-3 mb-4">
          Simple, Fair Event Pricing
        </h1>
        <p className="text-sm sm:text-base text-[#6C8480] max-w-2xl mx-auto leading-relaxed">
          No recurring monthly overhead. Pay only when you have a wedding celebration. All plans include full AI face matching and uncompressed high-res downloads.
        </p>
      </section>

      {/* Interactive Guest Count Slider Calculator */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 text-center space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C8480]">
              Expected Guests at Event:
            </span>
            <span className="text-2xl font-extrabold text-[#7B9669]">
              {guestCount} Guests
            </span>
          </div>

          <input
            type="range"
            min="20"
            max="600"
            step="10"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            className="w-full h-2 bg-[#E6E6E6] rounded-lg appearance-none cursor-pointer accent-[#7B9669]"
          />

          <div className="flex items-center justify-between text-[11px] text-[#6C8480]">
            <span>20 (Intimate)</span>
            <span>200 (Average)</span>
            <span>600+ (Grand Gala)</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#E6E6E6]/40 text-xs text-[#404E3B] font-medium flex items-center justify-between">
            <span>Recommended Tier:</span>
            <span className="font-bold text-[#7B9669] uppercase tracking-wider">
              {recommendedTier.toUpperCase()} PLAN
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => {
            const isHighlight = tier.popular || recommendedTier === tier.id;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? "bg-[#404E3B] text-white shadow-2xl ring-2 ring-[#7B9669] -translate-y-2"
                    : "bg-white text-[#404E3B] border border-[#BAC8B1]/60 hover:bg-[#E6E6E6]/40"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#7B9669] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#7B9669] mb-1">
                    {tier.name}
                  </div>
                  <div className={`text-xs mb-4 ${isHighlight ? "text-[#BAC8B1]" : "text-[#6C8480]"}`}>
                    {tier.badge}
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold">
                      {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                    </span>
                    <span className={`text-xs ${isHighlight ? "text-[#BAC8B1]" : "text-[#6C8480]"}`}>
                      {tier.priceNote}
                    </span>
                  </div>

                  <div className={`text-xs font-semibold pb-4 border-b mb-6 space-y-1 ${
                    isHighlight ? "border-white/20" : "border-[#BAC8B1]/40"
                  }`}>
                    <div>{tier.guests} Guests Capacity</div>
                    <div>{tier.photos} High-Res Photos</div>
                    <div>{tier.storageDays} Days Active Lifecycle</div>
                  </div>

                  <ul className="space-y-3 text-xs mb-8">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                        <span className={isHighlight ? "text-[#E6E6E6]" : "text-[#6C8480]"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate("/photographer/events/create")}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isHighlight
                      ? "bg-[#7B9669] hover:bg-[#688257] text-white shadow-md"
                      : "bg-white hover:bg-[#E6E6E6] border border-[#BAC8B1] text-[#404E3B]"
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
          <h3 className="text-lg font-bold text-[#404E3B]">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3 text-xs text-[#6C8480]">
            <div>
              <span className="font-bold text-[#404E3B] block">What happens if an event exceeds the guest or photo limit?</span>
              You can easily upgrade your tier at any time from your photographer dashboard with seamless delta billing.
            </div>
            <div>
              <span className="font-bold text-[#404E3B] block">How long are photos stored?</span>
              Galleries stay live in fast WebP for 30–90 days depending on tier, after which master files can be downloaded as a full-resolution ZIP archive.
            </div>
            <div>
              <span className="font-bold text-[#404E3B] block">Are there monthly subscription fees?</span>
              No! AuraPic is purely pay-per-event. You only pay when you have an active wedding celebration.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
