import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "/lovable-uploads/20250617_1947_Cinematic Petrochemical Dusk_simple_compose_01jxyr00rdf8crrx79e0g4pw8p.mp4";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[600px] flex items-center justify-center relative overflow-hidden"
      style={{
        position: "relative",
        padding: 0,
        margin: 0,
        background: 'transparent',
      }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "rgba(20,30,50,0.45)",
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl text-center mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gradient-gold sm:text-5xl md:text-6xl hero-title">
          Best Engineers Inc
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 sm:text-xl md:text-2xl hero-subtitle">
          Innovative engineering solutions for tomorrow's industrial challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-7 animate-fade-in-up"
          style={{ animationDelay: "0.13s" }}
        >
          {["Innovation", "Excellence", "Sustainability"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 14,
                color: "#fff",
                background: "#475569",
                borderRadius: 25,
                padding: "6px 20px",
                fontWeight: 500,
                letterSpacing: "0.02em"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 w-full animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
          <Button
            asChild
            className="cta-btn flex items-center gap-2 px-[20px] py-[13px] text-[16px] rounded-[10px] font-semibold shadow-lg border-0"
            style={{
              background: "#fff",
              color: "#0b1c3a",
              boxShadow: "0 4px 10px rgba(0,0,0,0.10)",
              fontWeight: 600,
              minWidth: 120,
              maxWidth: 240
            }}
          >
            <Link to="/key-services" className="flex items-center gap-2 w-full h-full justify-center">
              <Rocket size={22} className="mr-2 opacity-90" />
              <span>Our Services</span>
            </Link>
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-title {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) 0.1s both;
        }
        .hero-subtitle {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) 0.3s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.15s cubic-bezier(.23,1.1,.38,1) both;
        }
        .animate-fade-in-up[style*="animation-delay"] {
          animation-delay: var(--animation-delay, 0.1s) !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
