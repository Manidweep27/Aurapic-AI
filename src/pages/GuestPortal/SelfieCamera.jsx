import React, { useState, useRef, useEffect } from "react";
import { Camera, Sparkles, ArrowLeft, RefreshCw, Upload, ShieldAlert, CheckCircle2, Lock } from "lucide-react";

export default function SelfieCamera({ navigate, setGuestSelfie }) {
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Simulated sample guest selfies to pick quickly
  const sampleSelfies = [
    { label: "Guest Elena", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
    { label: "Guest Marcus", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
    { label: "Guest Sophia", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
  ];

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      setCameraError(false);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 640 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.warn("Camera not accessible or permission denied, using photo upload/preset fallback", err);
      setCameraError(true);
      setCameraActive(false);
      // Fallback default sample selfie
      setPreviewImage(sampleSelfies[0].url);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  const capturePhoto = () => {
    setIsCapturing(true);

    if (cameraActive && videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth || 480;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
      setPreviewImage(dataUrl);
      if (setGuestSelfie) setGuestSelfie(dataUrl);
    } else {
      if (setGuestSelfie) setGuestSelfie(previewImage || sampleSelfies[0].url);
    }

    // Flash animation and redirect to AI matching screen
    setTimeout(() => {
      stopCamera();
      navigate("/guest/matching");
    }, 800);
  };

  const handleCustomUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
        stopCamera();
        setCameraActive(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#404E3B] text-white flex flex-col justify-between select-none">
      {/* Top Navigation */}
      <div className="p-4 sm:p-6 max-w-lg mx-auto w-full flex items-center justify-between">
        <button
          onClick={() => navigate("/guest")}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs uppercase font-bold tracking-wider text-[#BAC8B1]">
          Facial Alignment Guide
        </span>
        <div className="w-9" />
      </div>

      {/* Main Camera View Area */}
      <div className="max-w-md mx-auto w-full px-4 text-center space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let's Find Your Photos
          </h1>
          <p className="text-xs sm:text-sm text-[#BAC8B1] mt-1 max-w-sm mx-auto leading-relaxed">
            Take a clear selfie so Aura AI can find photos containing you.
          </p>
        </div>

        {/* Circular Face Guide Camera Feed */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#7B9669] shadow-2xl bg-black flex items-center justify-center">
          {/* Flash Effect on capture */}
          {isCapturing && (
            <div className="absolute inset-0 bg-white z-40 animate-out fade-out duration-500" />
          )}

          {/* Live Video Element */}
          {cameraActive ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover -scale-x-100"
            />
          ) : (
            <img
              src={previewImage || sampleSelfies[0].url}
              alt="Selfie Frame"
              className="w-full h-full object-cover"
            />
          )}

          {/* Facial Circular Guide Overlay & Brackets */}
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#7B9669]/70 pointer-events-none animate-pulse" />
          
          {/* Facial Crosshairs */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-8 h-0.5 bg-[#7B9669]/60" />
            <div className="h-8 w-0.5 bg-[#7B9669]/60 absolute" />
          </div>

          {/* Scanning status tag */}
          <div className="absolute bottom-3 inset-x-0 mx-auto w-max px-3 py-1 rounded-full bg-[#404E3B]/85 text-[10px] font-bold tracking-wider text-[#BAC8B1] backdrop-blur-sm border border-[#7B9669]/40 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#7B9669]" />
            {isCapturing ? "Analyzing your selfie..." : "Face in Frame"}
          </div>
        </div>

        {/* Quick Sample Selector if camera is fallback or user wants demo faces */}
        <div className="pt-1">
          <p className="text-[11px] text-[#BAC8B1] mb-2 font-medium">
            Choose a demo guest profile or upload your own:
          </p>
          <div className="flex items-center justify-center gap-2">
            {sampleSelfies.map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setPreviewImage(s.url);
                  stopCamera();
                  setCameraActive(false);
                }}
                className={`text-[10px] px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  previewImage === s.url
                    ? "bg-[#7B9669] border-[#7B9669] text-white font-bold"
                    : "bg-white/10 border-white/20 text-[#E6E6E6] hover:bg-white/20"
                }`}
              >
                {s.label}
              </button>
            ))}

            <label className="text-[10px] px-2.5 py-1.5 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-[#E6E6E6] flex items-center gap-1 cursor-pointer">
              <Upload className="w-3 h-3 text-[#BAC8B1]" />
              Upload
              <input type="file" accept="image/*" onChange={handleCustomUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Shutter Capture Button */}
        <div className="pt-4">
          <button
            onClick={capturePhoto}
            disabled={isCapturing}
            className="w-full py-4 rounded-2xl bg-[#7B9669] hover:bg-[#688257] active:scale-95 text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Camera className="w-5 h-5" />
            <span>{isCapturing ? "Capturing..." : "Take Selfie"}</span>
          </button>
        </div>

        {/* Privacy Note */}
        <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-[11px] text-[#BAC8B1] flex items-start gap-2 text-left">
          <Lock className="w-4 h-4 text-[#7B9669] shrink-0 mt-0.5" />
          <p>
            Your selfie is processed temporarily and is not intended to be stored as a long-term photo. The raw image is permanently purged after 60 seconds.
          </p>
        </div>
      </div>

      <div className="p-4" />
    </div>
  );
}
