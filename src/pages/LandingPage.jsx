import React, { useState } from "react";
import { 
  Sparkles, Camera, QrCode, Download, ShieldCheck, Lock, ArrowRight, 
  CheckCircle2, Heart, Eye, Users, Layers, Zap, ChevronRight, Check
} from "lucide-react";
import FaceScannerOverlay from "../components/FaceScannerOverlay";
import StoragePipelineGraphic from "../components/StoragePipelineGraphic";
import { MOCK_PHOTOS, PRICING_TIERS } from "../data/mockData";

export default function LandingPage({ navigate, onOpenPhoto }) {
  // Guest Demo Simulated Mobile State
  const [demoStep, setDemoStep] = useState(1);
  const [matchedFilter, setMatchedFilter] = useState("All");

  const heroPhoto = MOCK_PHOTOS[0];
  const sidePhoto1 = MOCK_PHOTOS[1];
  const sidePhoto2 = MOCK_PHOTOS[2];

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] select-none">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BAC8B1]/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BAC8B1] shadow-xs text-xs font-bold uppercase tracking-wider text-[#404E3B]">
                <Sparkles className="w-3.5 h-3.5 text-[#7B9669]" />
                <span>AI-POWERED PHOTO DELIVERY</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#404E3B] tracking-tight leading-[1.12]">
                Your Wedding Photos. <br />
                <span className="text-[#7B9669]">Found Instantly.</span>
              </h1>

              {/* Supporting Text */}
              <div className="space-y-2 text-[#6C8480] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                <p className="font-semibold text-[#404E3B]">
                  Scan. Smile. Find your moments.
                </p>
                <p>
                  AuraPic uses AI-powered face matching to securely find your photos from thousands of wedding images — without making you search through endless galleries.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate("/guest")}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 group"
                >
                  <span>Find My Photos</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate("/photographer/dashboard")}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-[#E6E6E6]/60 border border-[#BAC8B1] text-[#404E3B] font-semibold text-base transition-all duration-300 cursor-pointer shadow-xs"
                >
                  For Photographers
                </button>
              </div>

              {/* Social proof metric */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#6C8480]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#7B9669]" />
                  <span>Zero Biometric Retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#7B9669]" />
                  <span>Sub-2s Vector Search</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Wedding Gallery with Face Detection */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Hero Card with Scanner */}
                <div className="relative z-20">
                  <FaceScannerOverlay
                    photo={heroPhoto}
                    showScanLine={true}
                    onSelect={onOpenPhoto}
                  />
                </div>

                {/* Floating Matched Badge Overlay */}
                <div className="absolute -top-6 -right-4 sm:-right-6 z-30 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#BAC8B1] flex items-center gap-3 animate-bounce [animation-duration:3.5s]">
                  <div className="w-10 h-10 rounded-xl bg-[#7B9669] flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#404E3B]">AI Match Found</div>
                    <div className="text-sm font-extrabold text-[#7B9669]">98.7% Match</div>
                  </div>
                </div>

                {/* Secondary Staggered Preview Cards */}
                <div className="hidden sm:grid grid-cols-2 gap-4 mt-4 relative z-10">
                  <div className="opacity-90 hover:opacity-100 transition-opacity">
                    <FaceScannerOverlay
                      photo={sidePhoto1}
                      showScanLine={false}
                      onSelect={onOpenPhoto}
                    />
                  </div>
                  <div className="opacity-90 hover:opacity-100 transition-opacity">
                    <FaceScannerOverlay
                      photo={sidePhoto2}
                      showScanLine={false}
                      onSelect={onOpenPhoto}
                    />
                  </div>
                </div>

                {/* Floating stats tag */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 z-30 bg-[#404E3B] text-white px-4 py-2.5 rounded-xl shadow-xl border border-[#7B9669]/40 flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7B9669] animate-ping" />
                  <span className="font-semibold text-[#BAC8B1]">Live Event:</span>
                  <span className="font-bold">1,420 Photos Analyzed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-white border-y border-[#BAC8B1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-[#7B9669]/10 px-3 py-1 rounded-full">
              Seamless 4-Step Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404E3B] mt-3 mb-4">
              From QR Code to Your Memories
            </h2>
            <p className="text-sm sm:text-base text-[#6C8480]">
              No app store downloads. No accounts required. Discover all your photos in under 15 seconds.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 flex flex-col justify-between hover:bg-[#E6E6E6]/70 transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#6C8480]">STEP 01</span>
                <div className="w-12 h-12 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center my-4 shadow-sm">
                  <QrCode className="w-6 h-6 text-[#BAC8B1]" />
                </div>
                <h3 className="text-xl font-bold text-[#404E3B] mb-2">Scan the QR</h3>
                <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                  Scan the event QR code placed on wedding tables, invitations, or welcome boards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#BAC8B1]/40 text-xs font-semibold text-[#7B9669]">
                Zero App Download Required
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 flex flex-col justify-between hover:bg-[#E6E6E6]/70 transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#6C8480]">STEP 02</span>
                <div className="w-12 h-12 rounded-2xl bg-[#7B9669] text-white flex items-center justify-center my-4 shadow-sm">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#404E3B] mb-2">Take a Selfie</h3>
                <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                  Take a quick selfie to securely create your temporary AI face profile.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#BAC8B1]/40 text-xs font-semibold text-[#7B9669]">
                Auto-Deleted in 60 Seconds
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 flex flex-col justify-between hover:bg-[#E6E6E6]/70 transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#6C8480]">STEP 03</span>
                <div className="w-12 h-12 rounded-2xl bg-[#6C8480] text-white flex items-center justify-center my-4 shadow-sm">
                  <Sparkles className="w-6 h-6 text-[#BAC8B1]" />
                </div>
                <h3 className="text-xl font-bold text-[#404E3B] mb-2">AI Finds Your Photos</h3>
                <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                  Our AI analyzes the event gallery and identifies photos containing you with high precision.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#BAC8B1]/40 text-xs font-semibold text-[#7B9669]">
                512-D Cosine Similarity
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 flex flex-col justify-between hover:bg-[#E6E6E6]/70 transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#6C8480]">STEP 04</span>
                <div className="w-12 h-12 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center my-4 shadow-sm">
                  <Download className="w-6 h-6 text-[#7B9669]" />
                </div>
                <h3 className="text-xl font-bold text-[#404E3B] mb-2">Download Your Memories</h3>
                <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                  View your private gallery and download your high-resolution photos in uncompressed original quality.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#BAC8B1]/40 text-xs font-semibold text-[#7B9669]">
                Full 6000x4000 RAW Resolution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI TECHNOLOGY SECTION */}
      <section className="py-20 bg-[#404E3B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-[#BAC8B1] bg-white/10 px-3 py-1 rounded-full">
              Deep Neural Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
              AI That Finds You in the Crowd
            </h2>
            <p className="text-sm sm:text-base text-[#BAC8B1] leading-relaxed">
              Photographers often capture thousands of moments. AuraPic converts facial landmarks into irreversible 512-dimensional mathematical vectors, searching through thousands of images in milliseconds.
            </p>
          </div>

          {/* AI Pipeline Horizontal Flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {[
              "Wedding Photos",
              "Face Detection",
              "AI Face Embedding",
              "Vector Search",
              "Similarity Matching",
              "Private Guest Gallery"
            ].map((stepTitle, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-[#7B9669]/30 text-center flex flex-col justify-center items-center"
              >
                <div className="w-7 h-7 rounded-full bg-[#7B9669] text-white text-xs font-bold flex items-center justify-center mb-2">
                  {idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#E6E6E6]">
                  {stepTitle}
                </div>
              </div>
            ))}
          </div>

          {/* Animated AI Processing Dashboard Mockup */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#344030] border border-[#7B9669]/40 shadow-2xl">
            <div className="text-center p-3 border-r border-[#7B9669]/20 last:border-r-0">
              <div className="text-2xl sm:text-4xl font-extrabold text-white">1,420</div>
              <div className="text-xs text-[#BAC8B1] mt-1">Photos Analyzed</div>
            </div>

            <div className="text-center p-3 border-r border-[#7B9669]/20 last:border-r-0">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#7B9669]">3,872</div>
              <div className="text-xs text-[#BAC8B1] mt-1">Faces Detected</div>
            </div>

            <div className="text-center p-3 border-r border-[#7B9669]/20 last:border-r-0">
              <div className="text-2xl sm:text-4xl font-extrabold text-white">127</div>
              <div className="text-xs text-[#BAC8B1] mt-1">Matches Found</div>
            </div>

            <div className="text-center p-3">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#7B9669]">98.7%</div>
              <div className="text-xs text-[#BAC8B1] mt-1">Avg Match Confidence</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUEST EXPERIENCE INTERACTIVE DEMO */}
      <section className="py-20 bg-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-white px-3 py-1 rounded-full border border-[#BAC8B1]">
              Live Guest Simulator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404E3B] mt-3 mb-4">
              Find Your Photos in Seconds
            </h2>
            <p className="text-sm sm:text-base text-[#6C8480]">
              Experience the intuitive guest journey firsthand. Test the 4-step mobile flow right here:
            </p>
          </div>

          {/* Interactive Mobile Device Mockup */}
          <div className="max-w-md mx-auto bg-white rounded-[40px] shadow-2xl border-8 border-[#404E3B] overflow-hidden">
            {/* Phone Top Notch */}
            <div className="bg-[#404E3B] h-6 flex items-center justify-center">
              <div className="w-20 h-3 bg-black/40 rounded-full" />
            </div>

            {/* Simulated Mobile Header */}
            <div className="p-4 bg-white border-b border-[#BAC8B1]/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#404E3B] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 text-[#7B9669]" />
                </div>
                <span className="font-bold text-sm text-[#404E3B]">Sarah & John's Wedding</span>
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#7B9669]/15 text-[#7B9669]">
                Step {demoStep} of 4
              </span>
            </div>

            {/* Mobile State Transitions */}
            <div className="p-5 min-h-[440px] flex flex-col justify-between bg-[#E6E6E6]/20">
              {/* Step 1: Scan QR */}
              {demoStep === 1 && (
                <div className="space-y-6 text-center my-auto animate-in fade-in">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#BAC8B1]/30 flex items-center justify-center text-[#404E3B]">
                    <QrCode className="w-8 h-8 text-[#404E3B]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#404E3B]">Step 1: Scan Event QR</h4>
                    <p className="text-xs text-[#6C8480] mt-1">
                      Welcome to Sarah & John's Celebration. Ready to discover your memories?
                    </p>
                  </div>
                  <button
                    onClick={() => setDemoStep(2)}
                    className="w-full py-3 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-sm shadow-md cursor-pointer"
                  >
                    Continue to Selfie
                  </button>
                </div>
              )}

              {/* Step 2: Take Selfie */}
              {demoStep === 2 && (
                <div className="space-y-4 text-center my-auto animate-in fade-in">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#7B9669] shadow-md bg-[#404E3B]">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                      alt="Selfie preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border-2 border-dashed border-white/60 rounded-full pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#404E3B]">Step 2: Take a Selfie</h4>
                    <p className="text-xs text-[#6C8480] mt-1">
                      Align your face inside the circle. Deleted immediately after vector generation.
                    </p>
                  </div>
                  <button
                    onClick={() => setDemoStep(3)}
                    className="w-full py-3 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold text-sm shadow-md cursor-pointer"
                  >
                    Extract Face Vector
                  </button>
                </div>
              )}

              {/* Step 3: AI Matching */}
              {demoStep === 3 && (
                <div className="space-y-6 text-center my-auto animate-in fade-in">
                  <div className="relative w-20 h-20 mx-auto rounded-2xl bg-[#404E3B] flex items-center justify-center shadow-lg">
                    <Sparkles className="w-10 h-10 text-[#7B9669] animate-spin" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#404E3B]">Step 3: AI Matching...</h4>
                    <p className="text-xs text-[#6C8480] mt-1">
                      Searching 1,420 event photos with 512-dimensional cosine similarity...
                    </p>
                  </div>
                  <div className="w-full bg-[#BAC8B1]/40 rounded-full h-2 overflow-hidden">
                    <div className="bg-[#7B9669] h-full w-4/5 animate-pulse" />
                  </div>
                  <button
                    onClick={() => setDemoStep(4)}
                    className="w-full py-3 rounded-xl bg-[#6C8480] hover:bg-[#5b706d] text-white font-bold text-sm cursor-pointer"
                  >
                    View Matched Photos
                  </button>
                </div>
              )}

              {/* Step 4: Your Gallery */}
              {demoStep === 4 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="text-center">
                    <div className="text-xs uppercase tracking-wider font-bold text-[#7B9669]">
                      Your Memories Are Ready ✨
                    </div>
                    <div className="text-sm font-bold text-[#404E3B]">127 photos found</div>
                  </div>

                  {/* Photo Cards Grid in phone */}
                  <div className="grid grid-cols-2 gap-2 max-h-[260px] overflow-y-auto pr-1">
                    {MOCK_PHOTOS.slice(0, 4).map((p) => (
                      <div
                        key={p.id}
                        onClick={() => onOpenPhoto(p)}
                        className="relative rounded-xl overflow-hidden shadow-xs cursor-pointer group"
                      >
                        <img src={p.thumbnail} alt={p.title} className="w-full h-24 object-cover" />
                        <span className="absolute top-1 right-1 px-1.5 py-0.5 rounded-md bg-[#404E3B]/90 text-white text-[9px] font-bold">
                          {p.matchConfidence}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => navigate("/guest/gallery")}
                      className="flex-1 py-2.5 rounded-xl bg-[#7B9669] text-white font-bold text-xs shadow-md cursor-pointer"
                    >
                      Open Full Gallery
                    </button>
                    <button
                      onClick={() => setDemoStep(1)}
                      className="px-3 py-2.5 rounded-xl border border-[#BAC8B1] text-[#404E3B] text-xs font-semibold cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Stepper Dots */}
            <div className="p-3 bg-white border-t border-[#BAC8B1]/40 flex justify-center gap-2">
              {[1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  onClick={() => setDemoStep(step)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    demoStep === step ? "w-6 bg-[#7B9669]" : "bg-[#BAC8B1]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRIVACY SECTION */}
      <section className="py-20 bg-white border-y border-[#BAC8B1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-[#7B9669]/10 px-3 py-1 rounded-full">
              Biometric Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404E3B] mt-3 mb-4">
              Your Memories Stay Yours.
            </h2>
            <p className="text-sm sm:text-base text-[#6C8480]">
              Built from the ground up to respect personal privacy. We never build facial databases or sell biometric information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#7B9669]" />
              </div>
              <h3 className="text-lg font-bold text-[#404E3B]">Temporary Selfie Processing</h3>
              <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                Guest selfies are automatically deleted after face embedding generation within 60 seconds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#7B9669] text-white flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#404E3B]">Private Galleries</h3>
              <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                Guests only see photos matched to their event profile, preventing unwanted public browsing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#6C8480] text-white flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#BAC8B1]" />
              </div>
              <h3 className="text-lg font-bold text-[#404E3B]">Secure Image Access</h3>
              <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                High-resolution images are protected using expiring secure access links valid for 15 minutes.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#E6E6E6]/40 border border-[#BAC8B1]/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#BAC8B1]" />
              </div>
              <h3 className="text-lg font-bold text-[#404E3B]">Encrypted Transfers</h3>
              <p className="text-xs sm:text-sm text-[#6C8480] leading-relaxed">
                Data transfers use modern HTTPS/TLS 1.3 encryption with AES-256 cloud encryption at rest.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/privacy")}
              className="px-8 py-3.5 rounded-2xl bg-[#404E3B] text-white font-bold text-sm hover:bg-[#323e2e] transition-colors cursor-pointer"
            >
              Privacy Comes First → Read Whitepaper
            </button>
          </div>
        </div>
      </section>

      {/* 6. STORAGE ARCHITECTURE */}
      <section className="py-20 bg-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StoragePipelineGraphic />
        </div>
      </section>

      {/* 7. PRICING SECTION */}
      <section className="py-20 bg-white border-t border-[#BAC8B1]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-[#7B9669]/10 px-3 py-1 rounded-full">
              Transparent Pay-Per-Event
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404E3B] mt-3 mb-4">
              Simple, Event-Based Pricing
            </h2>
            <p className="text-sm sm:text-base text-[#6C8480]">
              No monthly lock-in. Pay only when you have an active wedding celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#404E3B] text-white shadow-2xl ring-2 ring-[#7B9669] -translate-y-2"
                    : "bg-[#E6E6E6]/40 text-[#404E3B] border border-[#BAC8B1]/60 hover:bg-[#E6E6E6]"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#7B9669] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#7B9669] mb-1">
                    {tier.name}
                  </div>
                  <div className="text-xs text-[#6C8480] mb-4">
                    {tier.badge}
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold">
                      {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                    </span>
                    <span className={`text-xs ${tier.popular ? "text-[#BAC8B1]" : "text-[#6C8480]"}`}>
                      {tier.priceNote}
                    </span>
                  </div>

                  <div className="text-xs font-semibold pb-4 border-b border-[#BAC8B1]/30 mb-6 space-y-1">
                    <div>{tier.guests} Guests Capacity</div>
                    <div>{tier.photos} High-Res Photos</div>
                  </div>

                  <ul className="space-y-3 text-xs mb-8">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? "text-[#7B9669]" : "text-[#7B9669]"}`} />
                        <span className={tier.popular ? "text-[#E6E6E6]" : "text-[#6C8480]"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate("/photographer/events/create")}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    tier.popular
                      ? "bg-[#7B9669] hover:bg-[#688257] text-white shadow-md"
                      : "bg-white hover:bg-[#E6E6E6] border border-[#BAC8B1] text-[#404E3B]"
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PHOTOGRAPHER SaaS SECTION */}
      <section className="py-20 bg-[#BAC8B1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-[#404E3B] bg-white px-3 py-1 rounded-full border border-[#BAC8B1]">
                For Professional Studios
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404E3B]">
                Delight Couples & Boost Print Sales
              </h2>
              <p className="text-sm sm:text-base text-[#6C8480] leading-relaxed">
                Empower your photography business with automated client delivery. No more distributing thousands of unsorted photos via cumbersome Google Drive folders.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#404E3B] font-medium">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7B9669]" />
                  <span>Instant table QR printouts for reception tables</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7B9669]" />
                  <span>Batch upload hundreds of RAW/JPEG files with auto-compression</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7B9669]" />
                  <span>Real-time guest analytics and download velocity insights</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate("/photographer/dashboard")}
                  className="px-8 py-4 rounded-2xl bg-[#404E3B] hover:bg-[#344030] text-white font-bold text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Launch Photographer Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Dashboard Teaser */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#BAC8B1]/60">
              <div className="flex items-center justify-between pb-4 border-b border-[#BAC8B1]/40 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-[#404E3B]">Good morning, Photographer 👋</h4>
                  <p className="text-xs text-[#6C8480]">Sarah & John's Wedding is LIVE</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  ● LIVE
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#E6E6E6]/40 border border-[#BAC8B1]/40 flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#404E3B]">Photos Processed</span>
                  <span className="text-sm font-bold text-[#7B9669]">1,420 / 2,500</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#E6E6E6]/40 border border-[#BAC8B1]/40 flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#404E3B]">Guests Enrolled</span>
                  <span className="text-sm font-bold text-[#404E3B]">187</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#E6E6E6]/40 border border-[#BAC8B1]/40 flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#404E3B]">AI Matches Generated</span>
                  <span className="text-sm font-bold text-[#7B9669]">3,842</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
