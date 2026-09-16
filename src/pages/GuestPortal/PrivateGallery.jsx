import React, { useState } from "react";
import { 
  Sparkles, Download, Heart, Share2, Lock, Filter, Grid, Check, 
  ArrowLeft, Search, CheckCircle2, ShieldCheck, Eye
} from "lucide-react";
import { MOCK_PHOTOS, MOCK_EVENT } from "../../data/mockData";
import LightboxModal from "../../components/LightboxModal";

export default function PrivateGallery({ navigate, onOpenPhoto }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [favorites, setFavorites] = useState(["img_01", "img_03", "img_05", "img_07"]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);
  const [downloadAllSuccess, setDownloadAllSuccess] = useState(false);

  const filters = ["All", "Solo", "With Family", "With Friends", "Favorites"];

  const toggleFavorite = (photoId) => {
    setFavorites((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]
    );
  };

  const filteredPhotos = MOCK_PHOTOS.filter((photo) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Favorites") return favorites.includes(photo.id);
    return photo.category === activeFilter;
  });

  const handleDownloadAll = () => {
    setIsDownloadingAll(true);
    setTimeout(() => {
      setIsDownloadingAll(false);
      setDownloadAllSuccess(true);
      setTimeout(() => setDownloadAllSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] text-[#404E3B] pb-24 select-none">
      {/* Top Mobile/Desktop Nav */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#BAC8B1]/40 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/guest")}
              className="p-2 rounded-xl text-[#404E3B] hover:bg-[#E6E6E6] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#404E3B] leading-tight">
                {MOCK_EVENT.name}
              </h1>
              <p className="text-xs text-[#6C8480]">Your private memories</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAC8B1]/30 text-[#404E3B] text-xs font-semibold">
              <Lock className="w-3.5 h-3.5 text-[#7B9669]" />
              Private to you
            </span>

            <button
              onClick={handleDownloadAll}
              disabled={isDownloadingAll}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7B9669] hover:bg-[#688257] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer active:scale-95"
            >
              {downloadAllSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ZIP Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{isDownloadingAll ? "Bundling..." : "Download All"}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Stats & Greeting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#BAC8B1]/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7B9669]/15 text-[#404E3B] text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#7B9669]" />
              AI Face Matching Active
            </div>
            <h2 className="text-2xl font-extrabold text-[#404E3B]">
              Welcome, Sarah & John's Guest 👋
            </h2>
            <p className="text-xs sm:text-sm text-[#6C8480]">
              All photos below contain your face verified with 94%+ facial cosine similarity.
            </p>
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-3 sm:gap-6 bg-[#E6E6E6]/60 p-3 sm:p-4 rounded-2xl border border-[#BAC8B1]/40">
            <div className="text-center px-2">
              <div className="text-lg sm:text-2xl font-extrabold text-[#404E3B]">127</div>
              <div className="text-[11px] text-[#6C8480]">Photos</div>
            </div>
            <div className="w-px h-8 bg-[#BAC8B1]" />
            <div className="text-center px-2">
              <div className="text-lg sm:text-2xl font-extrabold text-[#7B9669]">{favorites.length}</div>
              <div className="text-[11px] text-[#6C8480]">Favorites</div>
            </div>
            <div className="w-px h-8 bg-[#BAC8B1]" />
            <div className="text-center px-2">
              <div className="text-lg sm:text-2xl font-extrabold text-[#404E3B]">12</div>
              <div className="text-[11px] text-[#6C8480]">Downloads</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-6 flex items-center justify-between gap-3 overflow-x-auto pb-2">
          <div className="flex items-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#404E3B] text-white shadow-sm"
                      : "bg-white text-[#404E3B] hover:bg-white/80 border border-[#BAC8B1]/50"
                  }`}
                >
                  {filter} {filter === "Favorites" ? `(${favorites.length})` : ""}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[#6C8480] hidden sm:block whitespace-nowrap">
            Showing {filteredPhotos.length} moments
          </span>
        </div>

        {/* Photos Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => {
            const isFav = favorites.includes(photo.id);

            return (
              <div
                key={photo.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#BAC8B1]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Photo Preview Thumbnail */}
                <div 
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative aspect-[4/3] bg-[#404E3B] overflow-hidden cursor-pointer"
                >
                  <img
                    src={photo.thumbnail}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* AI Match Percentage Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#404E3B]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider flex items-center gap-1 border border-[#7B9669]/50 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#7B9669]" />
                    <span>{photo.matchConfidence}% Match</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/85 text-[#404E3B] text-[10px] font-semibold backdrop-blur-xs">
                    {photo.category}
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-xl bg-white/90 text-xs font-semibold text-[#404E3B] flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5 text-[#7B9669]" />
                      View High-Res
                    </span>
                  </div>
                </div>

                {/* Card Meta & Bottom Buttons */}
                <div className="p-3.5 flex items-center justify-between bg-white">
                  <div className="truncate pr-2">
                    <h4 className="text-xs font-bold text-[#404E3B] truncate">
                      {photo.title}
                    </h4>
                    <p className="text-[10px] text-[#6C8480]">
                      {photo.time} • {photo.facesCount} {photo.facesCount === 1 ? "face" : "faces"}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Favorite button */}
                    <button
                      onClick={() => toggleFavorite(photo.id)}
                      className={`p-2 rounded-lg transition-colors cursor-pointer ${
                        isFav
                          ? "text-rose-600 bg-rose-50"
                          : "text-[#6C8480] hover:text-rose-600 hover:bg-[#E6E6E6]/60"
                      }`}
                      title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? "fill-rose-600" : ""}`} />
                    </button>

                    {/* Download button */}
                    <a
                      href={photo.url}
                      download={`AuraPic_${photo.id}.jpg`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg text-[#6C8480] hover:text-[#7B9669] hover:bg-[#E6E6E6]/60 transition-colors cursor-pointer"
                      title="Download HD Photo"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Filter State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#BAC8B1]/40 mt-6">
            <Heart className="w-10 h-10 mx-auto text-[#BAC8B1] mb-2" />
            <h3 className="text-base font-bold text-[#404E3B]">No moments in this filter</h3>
            <p className="text-xs text-[#6C8480] mt-1">
              Try switching to "All" to view all 127 AI-matched photos.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 px-4 py-2 rounded-xl bg-[#7B9669] text-white text-xs font-semibold cursor-pointer"
            >
              Show All Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox for clicked image */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          eventName={MOCK_EVENT.name}
          onClose={() => setSelectedPhoto(null)}
          onToggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(selectedPhoto.id)}
        />
      )}
    </div>
  );
}
