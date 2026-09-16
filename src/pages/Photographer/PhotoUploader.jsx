import React, { useState } from "react";
import { 
  UploadCloud, Sparkles, Check, CheckCircle2, Cpu, HardDrive, 
  ArrowLeft, FileText, Image, RefreshCw, Layers, ShieldCheck, AlertCircle 
} from "lucide-react";
import { MOCK_EVENT } from "../../data/mockData";

export default function PhotoUploader({ navigate }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(87);
  const [currentPhotos, setCurrentPhotos] = useState(1420);
  const [facesDetected, setFacesDetected] = useState(3872);
  const [matchesGenerated, setMatchesGenerated] = useState(2941);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const stages = [
    { title: "Image uploaded", status: "completed" },
    { title: "Face detection", status: "completed" },
    { title: "Face alignment", status: "completed" },
    { title: "Embedding generation", status: "completed" },
    { title: "Vector matching", status: "in_progress" },
    { title: "Gallery optimization", status: "pending" },
  ];

  const handleSimulatedDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    triggerBatchSimulation();
  };

  const triggerBatchSimulation = () => {
    setUploading(true);
    setUploadSuccess(false);

    let p = 0;
    const interval = setInterval(() => {
      p += 15;
      if (p >= 100) {
        clearInterval(interval);
        setUploading(false);
        setUploadSuccess(true);
        setCurrentPhotos((prev) => prev + 48);
        setFacesDetected((prev) => prev + 116);
        setMatchesGenerated((prev) => prev + 94);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/photographer/dashboard")}
            className="flex items-center gap-2 text-xs font-bold text-[#6C8480] hover:text-[#404E3B] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#BAC8B1]/40 text-[#404E3B]">
              Active: {MOCK_EVENT.name}
            </span>
          </div>
        </div>

        {/* Upload Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#BAC8B1]/50 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7B9669]">
              High-Throughput Batch Ingestion
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#404E3B] tracking-tight mt-1">
              Upload Wedding Photos
            </h1>
            <p className="text-xs sm:text-sm text-[#6C8480]">
              Drop high-resolution RAW or JPEG files. The dual-tier pipeline compresses 200KB WebP thumbnails for CDN while safely encrypting master originals in AWS S3.
            </p>
          </div>

          {/* Drag & Drop Dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleSimulatedDrop}
            onClick={triggerBatchSimulation}
            className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center transition-all cursor-pointer ${
              isDragging
                ? "border-[#7B9669] bg-[#BAC8B1]/20 scale-[1.01]"
                : "border-[#BAC8B1] bg-[#E6E6E6]/30 hover:border-[#7B9669] hover:bg-[#E6E6E6]/60"
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#404E3B] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
              <UploadCloud className="w-8 h-8 text-[#7B9669]" />
            </div>

            <h3 className="text-lg font-bold text-[#404E3B]">
              Drag & drop your photos here
            </h3>
            <p className="text-xs text-[#6C8480] mt-1 mb-4">
              or <span className="text-[#7B9669] font-bold underline">Browse Files</span> from your computer
            </p>

            <span className="inline-block text-[11px] font-semibold text-[#6C8480] bg-white px-3 py-1 rounded-full border border-[#BAC8B1]">
              Supports RAW, ARW, CR3, NEF, DNG, JPEG, PNG (Up to 50MB per file)
            </span>
          </div>

          {/* Success Banner */}
          {uploadSuccess && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>48 high-resolution photos uploaded successfully! Celery background workers are indexing facial vectors.</span>
            </div>
          )}

          {/* Live Progress & Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#E6E6E6]/40 border border-[#BAC8B1]/40">
            <div>
              <div className="text-[11px] text-[#6C8480]">Uploading</div>
              <div className="text-lg sm:text-xl font-extrabold text-[#404E3B] mt-0.5">
                {currentPhotos.toLocaleString()} / 2,500
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#6C8480]">AI Processing</div>
              <div className="text-lg sm:text-xl font-extrabold text-[#7B9669] mt-0.5">
                {uploading ? "Analyzing..." : `${uploadProgress}%`}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#6C8480]">Faces Detected</div>
              <div className="text-lg sm:text-xl font-extrabold text-[#404E3B] mt-0.5">
                {facesDetected.toLocaleString()}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#6C8480]">Matches Generated</div>
              <div className="text-lg sm:text-xl font-extrabold text-[#7B9669] mt-0.5">
                {matchesGenerated.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-[#6C8480]">
              <span>Dual-Tier Pipeline Ingestion Status</span>
              <span className="font-bold text-[#404E3B]">{uploadProgress}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#E6E6E6] overflow-hidden">
              <div
                className="h-full bg-[#7B9669] rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>

          {/* AI PROCESSING VISUALIZATION */}
          <div className="pt-4 border-t border-[#BAC8B1]/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-extrabold text-[#404E3B] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#7B9669]" />
                <span>Aura AI is processing your memories</span>
              </h3>
              <span className="text-[11px] font-mono text-[#7B9669]">
                InsightFace 512-D
              </span>
            </div>

            {/* Stages checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {stages.map((stg, i) => {
                const isDone = stg.status === "completed";
                const isCurrent = stg.status === "in_progress";

                return (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                      isDone
                        ? "bg-[#7B9669]/10 border-[#7B9669]/30 text-[#404E3B]"
                        : isCurrent
                        ? "bg-white border-[#7B9669] shadow-xs text-[#404E3B]"
                        : "bg-[#E6E6E6]/30 border-[#BAC8B1]/30 text-[#6C8480]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${
                          isDone
                            ? "bg-[#7B9669] text-white"
                            : isCurrent
                            ? "border-2 border-[#7B9669] text-[#7B9669] animate-spin"
                            : "border border-[#BAC8B1]"
                        }`}
                      >
                        {isDone ? "✓" : isCurrent ? "●" : "○"}
                      </div>
                      <span className="font-semibold">{stg.title}</span>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#6C8480]">
                      {isDone ? "OK" : isCurrent ? "LIVE" : "WAIT"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Storage & Egress Savings notice */}
          <div className="p-4 rounded-2xl bg-[#404E3B] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <HardDrive className="w-5 h-5 text-[#7B9669]" />
              <span>Storage Used: <strong>18.4 GB</strong> / 50 GB standard allocation</span>
            </div>
            <button
              onClick={() => navigate("/guest/gallery")}
              className="px-4 py-2 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white font-bold cursor-pointer"
            >
              Preview Live Gallery →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
