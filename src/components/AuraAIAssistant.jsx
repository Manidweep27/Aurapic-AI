import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, User, ChevronRight, RefreshCw, ShieldAlert, Cpu } from "lucide-react";
import { AURA_AI_KNOWLEDGE, MOCK_EVENT } from "../data/mockData";

export default function AuraAIAssistant({ currentRoute, navigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "aura",
      text: "Hi! I'm Aura AI, your wedding photography intelligence assistant. How can I help you today?",
      time: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const isPhotographerMode = currentRoute.startsWith("/photographer");

  const guestSuggestions = [
    "Find my photos",
    "How does AI matching work?",
    "Explain privacy & selfie security",
    "Where are photos stored?",
    "Help me create an event"
  ];

  const photographerSuggestions = [
    "How many photos have been processed?",
    "Show engagement insights",
    "How can I reduce storage costs?",
    "Explain dual-tier S3 pipeline",
    "Is Sarah & John's event ready?"
  ];

  const suggestions = isPhotographerMode ? photographerSuggestions : guestSuggestions;

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (userText) => {
    const text = (userText || inputValue).trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // AI Response generation based on knowledge matching
    setTimeout(() => {
      let botReply = "I'd be glad to help with that! AuraPic uses 512-dimensional facial recognition to connect guests directly to their photos without public gallery exposure. Let me know if you want to explore the guest flow or photographer tools!";

      const lower = text.toLowerCase();

      for (const item of AURA_AI_KNOWLEDGE) {
        if (item.triggers.some((trig) => lower.includes(trig))) {
          botReply = item.answer;
          break;
        }
      }

      if (lower.includes("download") || lower.includes("quality")) {
        botReply = "Guests can download full 6000x4000 uncompressed high-resolution master images directly without compression. Photographers maintain original RAW clarity!";
      } else if (lower.includes("ready") || lower.includes("live")) {
        botReply = `Yes! "${MOCK_EVENT.name}" is currently LIVE. 1,420 photos are ready, 187 guests have connected, and 3,842 face matches have been verified with 98.7% average confidence.`;
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: "aura",
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none">
      {/* Trigger floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#404E3B] text-white shadow-2xl hover:bg-[#344030] hover:shadow-[#7B9669]/20 transition-all duration-300 border border-[#7B9669]/40 cursor-pointer active:scale-95"
          aria-label="Open Aura AI Assistant"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-[#7B9669] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#7B9669] rounded-full ring-2 ring-[#404E3B]" />
          </div>
          <span className="font-semibold text-sm tracking-wide text-[#E6E6E6] group-hover:text-white">
            ✨ Ask Aura
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#7B9669]/30 text-[#BAC8B1]">
            {isPhotographerMode ? "Studio AI" : "AI"}
          </span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[390px] h-[540px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#BAC8B1]/50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#404E3B] px-5 py-4 text-white flex items-center justify-between border-b border-[#7B9669]/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#7B9669] flex items-center justify-center text-white shadow-inner">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm tracking-tight">Aura AI</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                </div>
                <p className="text-[11px] text-[#BAC8B1]">
                  {isPhotographerMode ? "Photographer Studio Intelligence" : "Instant Wedding Assistant"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-[#BAC8B1] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Context Pill */}
          <div className="bg-[#BAC8B1]/25 px-4 py-2 flex items-center justify-between text-[11px] text-[#404E3B] border-b border-[#BAC8B1]/40">
            <span className="flex items-center gap-1.5 font-medium">
              <Cpu className="w-3.5 h-3.5 text-[#7B9669]" />
              InsightFace 512-D Vector Engine
            </span>
            <span className="text-[10px] text-[#6C8480]">v2.6 Live</span>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#E6E6E6]/30">
            {messages.map((msg) => {
              const isAura = msg.sender === "aura";
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isAura ? "justify-start" : "justify-end"}`}
                >
                  {isAura && (
                    <div className="w-7 h-7 rounded-lg bg-[#404E3B] flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#7B9669]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${
                      isAura
                        ? "bg-white text-[#404E3B] shadow-sm border border-[#BAC8B1]/30"
                        : "bg-[#7B9669] text-white font-medium shadow-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`block text-[9px] mt-1.5 text-right ${
                        isAura ? "text-[#6C8480]" : "text-white/80"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>

                  {!isAura && (
                    <div className="w-7 h-7 rounded-lg bg-[#7B9669] flex items-center justify-center text-white shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#6C8480] pl-9">
                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-[#BAC8B1]/30 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B9669] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B9669] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B9669] animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-[11px]">Aura is matching...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-white border-t border-[#BAC8B1]/30">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
              {suggestions.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#E6E6E6] hover:bg-[#BAC8B1]/40 text-[#404E3B] transition-colors cursor-pointer border border-[#BAC8B1]/40 shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#BAC8B1]/30 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about AuraPic AI..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-[#E6E6E6]/60 text-xs text-[#404E3B] px-3.5 py-2.5 rounded-xl border border-transparent focus:border-[#7B9669] focus:bg-white outline-none transition-all placeholder:text-[#6C8480]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-[#7B9669] hover:bg-[#6a8459] text-white disabled:opacity-40 disabled:hover:bg-[#7B9669] transition-all cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
