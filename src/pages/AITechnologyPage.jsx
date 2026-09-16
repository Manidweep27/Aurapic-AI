import React, { useState } from "react";
import { 
  Sparkles, Cpu, Scan, CheckCircle2, Shield, Layers, Zap, 
  ArrowRight, Database, Server, Binary, GitBranch 
} from "lucide-react";

export default function AITechnologyPage({ navigate }) {
  const [activeTab, setActiveTab] = useState("pipeline");

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] select-none pb-20">
      {/* Hero */}
      <section className="pt-16 pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669] bg-white px-3 py-1 rounded-full border border-[#BAC8B1]">
          Engineered for Real-Time Precision
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#404E3B] tracking-tight mt-3 mb-4">
          AI That Finds You in the Crowd
        </h1>
        <p className="text-sm sm:text-base text-[#6C8480] max-w-2xl mx-auto leading-relaxed">
          How our containerized GPU pipeline performs multi-dimensional facial vector search across thousands of uncompressed images in milliseconds.
        </p>
      </section>

      {/* Main Architecture Showcase */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Visual Pipeline Stages */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#BAC8B1]/50 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#BAC8B1]/30 pb-4">
            <div>
              <h2 className="text-xl font-bold text-[#404E3B]">
                The AuraPic AI Processing Pipeline
              </h2>
              <p className="text-xs text-[#6C8480]">
                From photographer shutter release to instant guest delivery
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#7B9669] bg-[#7B9669]/10 px-3 py-1 rounded-full">
              Average latency: 42ms / vector
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              {
                step: "01",
                name: "Wedding Photos",
                desc: "15MB RAW or JPEG files uploaded by photographer",
                icon: Layers,
                color: "bg-[#404E3B]"
              },
              {
                step: "02",
                name: "Face Detection",
                desc: "RetinaFace isolates all faces with 68 landmark points",
                icon: Scan,
                color: "bg-[#7B9669]"
              },
              {
                step: "03",
                name: "Face Embedding",
                desc: "Generates irreversible 512-dimensional vector u ∈ R⁵¹²",
                icon: Binary,
                color: "bg-[#6C8480]"
              },
              {
                step: "04",
                name: "Vector Search",
                desc: "High-dimensional indexing via pgvector & Milvus HNSW",
                icon: Database,
                color: "bg-[#7B9669]"
              },
              {
                step: "05",
                name: "Similarity Match",
                desc: "Cosine similarity calculation: cos(θ) ≥ 0.75",
                icon: Cpu,
                color: "bg-[#404E3B]"
              },
              {
                step: "06",
                name: "Private Gallery",
                desc: "Instantly mapped to guest's private mobile view",
                icon: Sparkles,
                color: "bg-[#7B9669]"
              },
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-[#E6E6E6]/40 border border-[#BAC8B1]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-xl ${st.color} text-white flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#6C8480]">{st.step}</span>
                    </div>
                    <div className="text-xs font-bold text-[#404E3B] mb-1">{st.name}</div>
                  </div>
                  <p className="text-[11px] text-[#6C8480] mt-2 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Math Formula Card */}
          <div className="bg-[#404E3B] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#7B9669]/40 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#BAC8B1]">
              Mathematical Representation
            </span>
            <h3 className="text-xl font-bold text-white">
              Cosine Similarity Metric
            </h3>
            <p className="text-xs sm:text-sm text-[#BAC8B1] leading-relaxed">
              When a guest submits their selfie vector <span className="font-mono text-white">u ∈ R⁵¹²</span>, the system computes cosine similarity against all gallery face vectors <span className="font-mono text-white">v ∈ R⁵¹²</span>:
            </p>

            {/* Formula Block */}
            <div className="p-4 rounded-2xl bg-black/40 border border-[#7B9669]/30 text-center font-mono text-base text-[#7B9669] my-2">
              Similarity = (u · v) / (||u|| ||v||) ≥ 0.75
            </div>

            <p className="text-xs text-[#BAC8B1]/80">
              Only matches exceeding calibrated confidence thresholds (typically ≥ 94% UI confidence) are presented to the guest.
            </p>
          </div>

          {/* Infrastructure Topology Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#BAC8B1]/50 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#7B9669]">
              Cloud Infrastructure
            </span>
            <h3 className="text-xl font-bold text-[#404E3B]">
              Distributed Worker Topology
            </h3>
            
            <div className="space-y-3 text-xs text-[#6C8480]">
              <div className="flex items-start gap-2.5">
                <Server className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                <span><strong>FastAPI Gateway:</strong> Asynchronous ingestion proxying presigned S3 URLs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                <span><strong>GPU Workers (ECS / RunPod):</strong> PyTorch container running InsightFace ArcFace models.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Database className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                <span><strong>Vector Store (pgvector / Milvus):</strong> Multi-dimensional indexed vector search.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
                <span><strong>Zero-Retention Memory:</strong> Ephemeral Celery queues purge raw selfie buffers within 60s.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate("/guest")}
                className="w-full py-3 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Test AI Matching in Demo →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
