"use client"

import { useState } from "react";

const categories = [
  { id: 1, label: "Street", gif: "/no-more-youth.gif" },
  { id: 2, label: "Aerial", gif: "/no-more-youth.gif" },
  { id: 3, label: "Neon", gif: "/no-more-youth.gif" },
  { id: 4, label: "Portrait", gif: "/no-more-youth.gif" },
  { id: 5, label: "Architecture", gif: "/no-more-youth.gif" },
];

const framePositions = [
  { left: 0.2, width: 19.3 },
  { left: 20.5, width: 19.3 },
  { left: 40.5, width: 19.3 },
  { left: 60.5, width: 19.3 },
  { left: 80.5, width: 19.3 },
];

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-[url('/green.jpeg')] w-screen h-screen bg-cover bg-center overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <div className="relative w-[105%]">

          {/* Layer 1: GIFs — blended with the background */}
          <div className="absolute inset-0 rotate-3 mix-blend-multiply pointer-events-none">
            {categories.map((cat, i) => {
              const pos = framePositions[i];
              const isActive = hovered === i;
              return (
                <div
                  key={`gif-${cat.id}`}
                  className="absolute overflow-hidden"
                  style={{
                    left: `${pos.left}%`,
                    width: `${pos.width}%`,
                    top: "15%",
                    height: "70%",
                  }}
                >
                  <img
                    src={cat.gif}
                    alt=""
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Layer 2: Film strip — blended with the background */}
          <img
            className="w-full object-contain mix-blend-multiply rotate-3 contrast-[130%] opacity-90 pointer-events-none select-none"
            src="/film-strip.webp"
            alt=""
          />

          {/* Layer 3: Interactive buttons — NOT blended, sits on top */}
          <div className="absolute inset-0 rotate-3">
            {categories.map((cat, i) => {
              const pos = framePositions[i];
              const isActive = hovered === i;

              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => console.log(`Navigate to /${cat.label.toLowerCase()}`)}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: `${pos.left}%`,
                    width: `${pos.width}%`,
                    top: "15%",
                    height: "70%",
                  }}
                >
                  <div
                    className={`absolute inset-0 border-2 transition-all duration-300 ${
                      isActive
                        ? "border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                        : "border-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}