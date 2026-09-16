import React, { useState } from "react";
import { 
  Users, Image, Sparkles, Download, TrendingUp, Calendar, 
  ArrowLeft, ArrowUpRight, BarChart3, Filter 
} from "lucide-react";
import { MOCK_EVENT } from "../../data/mockData";

export default function Analytics({ navigate }) {
  const [timeRange, setTimeRange] = useState("all");

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-6xl mx-auto space-y-8">
        
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
              Event Analytics & Engagement
            </h1>
            <p className="text-xs sm:text-sm text-[#6C8480]">
              Real-time telemetry for <strong>{MOCK_EVENT.name}</strong> ({MOCK_EVENT.date})
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white border border-[#BAC8B1] text-[#404E3B]">
              Last synced: 2 mins ago
            </span>
          </div>
        </div>

        {/* 5 Core Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="text-xs font-semibold text-[#6C8480] uppercase mb-1">Total Guests</div>
            <div className="text-2xl font-extrabold text-[#404E3B]">187</div>
            <div className="text-[11px] text-[#7B9669] font-medium mt-1">187 of 200 enrolled</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="text-xs font-semibold text-[#6C8480] uppercase mb-1">Photos Uploaded</div>
            <div className="text-2xl font-extrabold text-[#404E3B]">1,420</div>
            <div className="text-[11px] text-[#6C8480] font-medium mt-1">100% indexed</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="text-xs font-semibold text-[#6C8480] uppercase mb-1">AI Matches</div>
            <div className="text-2xl font-extrabold text-[#7B9669]">3,842</div>
            <div className="text-[11px] text-[#7B9669] font-medium mt-1">98.7% avg match</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#BAC8B1]/50 shadow-xs">
            <div className="text-xs font-semibold text-[#6C8480] uppercase mb-1">Downloads</div>
            <div className="text-2xl font-extrabold text-[#404E3B]">642</div>
            <div className="text-[11px] text-[#6C8480] font-medium mt-1">Master HD files</div>
          </div>

          <div className="col-span-2 md:col-span-1 p-5 rounded-2xl bg-[#404E3B] text-white border border-[#7B9669]/40 shadow-xs">
            <div className="text-xs font-semibold text-[#BAC8B1] uppercase mb-1">Engagement Rate</div>
            <div className="text-2xl font-extrabold text-[#7B9669]">78.4%</div>
            <div className="text-[11px] text-[#E6E6E6] mt-1">+14% vs benchmark</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Chart 1: Guest Engagement & Hourly Activity */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#404E3B]">Hourly Guest Engagement</h3>
                <p className="text-xs text-[#6C8480]">Selfie scans & gallery visits during the reception</p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#7B9669]/15 text-[#7B9669]">
                Peak: 7:00 PM
              </span>
            </div>

            {/* SVG Bar Chart */}
            <div className="h-56 w-full flex items-end justify-between gap-2 pt-6 pb-2 border-b border-[#BAC8B1]/40">
              {[
                { time: "4 PM", val: 24, label: "24 guests" },
                { time: "5 PM", val: 58, label: "58 guests" },
                { time: "6 PM", val: 92, label: "92 guests" },
                { time: "7 PM", val: 168, label: "168 guests" },
                { time: "8 PM", val: 142, label: "142 guests" },
                { time: "9 PM", val: 110, label: "110 guests" },
                { time: "10 PM", val: 65, label: "65 guests" },
              ].map((item, idx) => {
                const heightPercent = (item.val / 180) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group relative">
                    {/* Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 px-2 py-1 rounded bg-[#404E3B] text-white text-[10px] font-semibold whitespace-nowrap pointer-events-none z-10">
                      {item.label}
                    </div>
                    {/* Bar */}
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[36px] rounded-t-lg bg-[#7B9669] group-hover:bg-[#404E3B] transition-colors"
                    />
                    <span className="text-[10px] font-medium text-[#6C8480]">{item.time}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-[#6C8480]">
              <span>Reception Table QR Placement</span>
              <span className="font-semibold text-[#404E3B]">187 Total Scans</span>
            </div>
          </div>

          {/* Chart 2: Photo Downloads Trend */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#404E3B]">Photo Downloads Velocity</h3>
                <p className="text-xs text-[#6C8480]">Uncompressed original downloads per hour</p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#404E3B] text-white">
                Total: 642
              </span>
            </div>

            {/* SVG Area Curve Chart */}
            <div className="h-56 w-full relative flex items-center justify-center pt-2">
              <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="downloadGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7B9669" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#BAC8B1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal Grid lines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="#BAC8B1" strokeWidth="0.7" strokeDasharray="4 4" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="#BAC8B1" strokeWidth="0.7" strokeDasharray="4 4" />
                <line x1="0" y1="130" x2="400" y2="130" stroke="#BAC8B1" strokeWidth="0.7" />

                {/* Shaded Area */}
                <path
                  d="M 0 130 L 40 110 L 100 85 L 160 35 L 220 50 L 280 20 L 340 45 L 400 30 L 400 130 Z"
                  fill="url(#downloadGradient)"
                />
                {/* Line */}
                <path
                  d="M 0 130 L 40 110 L 100 85 L 160 35 L 220 50 L 280 20 L 340 45 L 400 30"
                  fill="none"
                  stroke="#404E3B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Highlight Point */}
                <circle cx="280" cy="20" r="5" fill="#7B9669" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-xs text-[#6C8480]">
              <span>Average 3.4 HD downloads per guest</span>
              <span className="font-semibold text-[#7B9669]">68% S3 Egress Cached</span>
            </div>
          </div>

          {/* Chart 3: AI Matches Distribution */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#404E3B]">AI Match Confidence Distribution</h3>
                <p className="text-xs text-[#6C8480]">Cosine similarity score thresholds</p>
              </div>
              <span className="text-[11px] font-bold text-[#7B9669]">
                98.7% Avg Confidence
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { range: "98% - 100% (Exact Match)", count: "2,410 photos", percent: 63, color: "bg-[#7B9669]" },
                { range: "95% - 97% (High Confidence)", count: "980 photos", percent: 25, color: "bg-[#6C8480]" },
                { range: "90% - 94% (Angle / Group)", count: "452 photos", percent: 12, color: "bg-[#BAC8B1]" },
              ].map((bracket, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#404E3B]">{bracket.range}</span>
                    <span className="text-[#6C8480]">{bracket.count} ({bracket.percent}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E6E6E6] overflow-hidden">
                    <div className={`h-full ${bracket.color} rounded-full`} style={{ width: `${bracket.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 4: Daily Activity & Storage Lifecycle */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#404E3B]">Dual-Tier Storage Breakdown</h3>
                <p className="text-xs text-[#6C8480]">Cold Glacier IR vs Edge WebP thumbnails</p>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#BAC8B1]/30 text-[#404E3B]">
                18.4 GB Total
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#E6E6E6]/40 border border-[#BAC8B1]/40 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#6C8480]">Web-Optimized WebP (CDN Cached):</span>
                <span className="font-bold text-[#404E3B]">284 MB (1,420 files)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6C8480]">High-Res Master Vault (S3 Glacier IR):</span>
                <span className="font-bold text-[#404E3B]">18.1 GB (1,420 files)</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#BAC8B1]/40">
                <span className="text-[#7B9669] font-bold">Estimated Monthly Cloud Savings:</span>
                <span className="font-extrabold text-[#7B9669]">$38.40 / event</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/guest/gallery")}
              className="w-full py-3 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Open Matched Guest View →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
