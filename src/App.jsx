import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuraAIAssistant from "./components/AuraAIAssistant";
import LightboxModal from "./components/LightboxModal";

// Pages
import LandingPage from "./pages/LandingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AITechnologyPage from "./pages/AITechnologyPage";
import PrivacyPage from "./pages/PrivacyPage";
import PricingPage from "./pages/PricingPage";

// Guest Flow
import GuestHome from "./pages/GuestPortal/GuestHome";
import SelfieCamera from "./pages/GuestPortal/SelfieCamera";
import AIMatchingScreen from "./pages/GuestPortal/AIMatchingScreen";
import PrivateGallery from "./pages/GuestPortal/PrivateGallery";

// Photographer Flow
import PhotographerLogin from "./pages/Photographer/PhotographerLogin";
import Dashboard from "./pages/Photographer/Dashboard";
import EventsList from "./pages/Photographer/EventsList";
import CreateEvent from "./pages/Photographer/CreateEvent";
import PhotoUploader from "./pages/Photographer/PhotoUploader";
import Analytics from "./pages/Photographer/Analytics";
import Settings from "./pages/Photographer/Settings";

export default function App() {
  // Synchronize with window.location
  const getInitialRoute = () => {
    const path = window.location.pathname;
    return path && path !== "" ? path : "/";
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [guestSelfie, setGuestSelfie] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine whether to show main site navbar & footer
  const isGuestMobileFlow = currentRoute.startsWith("/guest/selfie") || currentRoute.startsWith("/guest/matching");
  const isPhotographerDashboard = currentRoute.startsWith("/photographer/dashboard");

  // Route view rendering
  const renderRoute = () => {
    switch (currentRoute) {
      case "/":
        return <LandingPage navigate={navigate} onOpenPhoto={setSelectedPhoto} />;
      case "/how-it-works":
        return <HowItWorksPage navigate={navigate} />;
      case "/ai":
        return <AITechnologyPage navigate={navigate} />;
      case "/privacy":
        return <PrivacyPage navigate={navigate} />;
      case "/pricing":
        return <PricingPage navigate={navigate} />;
      
      // Guest Portal
      case "/guest":
        return <GuestHome navigate={navigate} />;
      case "/guest/selfie":
        return <SelfieCamera navigate={navigate} setGuestSelfie={setGuestSelfie} />;
      case "/guest/matching":
        return <AIMatchingScreen navigate={navigate} guestSelfie={guestSelfie} />;
      case "/guest/gallery":
        return <PrivateGallery navigate={navigate} onOpenPhoto={setSelectedPhoto} />;

      // Photographer Studio
      case "/photographer/login":
        return <PhotographerLogin navigate={navigate} />;
      case "/photographer/dashboard":
        return <Dashboard navigate={navigate} />;
      case "/photographer/events":
        return <EventsList navigate={navigate} />;
      case "/photographer/events/create":
        return <CreateEvent navigate={navigate} />;
      case "/photographer/upload":
        return <PhotoUploader navigate={navigate} />;
      case "/photographer/analytics":
        return <Analytics navigate={navigate} />;
      case "/photographer/settings":
        return <Settings navigate={navigate} />;

      default:
        return <LandingPage navigate={navigate} onOpenPhoto={setSelectedPhoto} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#E6E6E6] flex flex-col selection:bg-[#7B9669] selection:text-white font-sans">
      {/* Global Navbar when outside mobile camera/processing views */}
      {!isGuestMobileFlow && !isPhotographerDashboard && (
        <Navbar currentRoute={currentRoute} navigate={navigate} />
      )}

      {/* Main Page View */}
      <div className="flex-1">
        {renderRoute()}
      </div>

      {/* Global Footer on public information pages */}
      {!isGuestMobileFlow && !currentRoute.startsWith("/guest") && !currentRoute.startsWith("/photographer") && (
        <Footer navigate={navigate} />
      )}

      {/* Persistent Floating Aura AI Assistant */}
      <AuraAIAssistant currentRoute={currentRoute} navigate={navigate} />

      {/* Global Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onToggleFavorite={() => {}}
          isFavorite={selectedPhoto.isFavorite}
        />
      )}
    </div>
  );
}
