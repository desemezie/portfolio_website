

"use client";

import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import confetti from "canvas-confetti";

export default function Home() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("desemezie@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);

    // fire confetti from the email button
    const btn = document.getElementById("copy-btn");
    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    confetti({
      particleCount: 25,
      spread: 40,
      startVelocity: 25,
      scalar: 0.8,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
    });
  }

  return (
    <main className="min-h-screen bg-white py-20 flex justify-center">
      <div className="w-[95%] grid grid-cols-1 xl:grid-cols-3 gap-10 h-[420px]">

        {/* LEFT COLUMN */}
        <div className="xl:col-span-2 relative rounded-3xl overflow-hidden h-full">
          <img
            src="/middlesexcollege.png"
            alt="Western University"
            className="w-full h-full object-cover"
          />s
          <div className="absolute inset-0 bg-black/25" />
          <h1 className="absolute top-8 left-8 text-white text-3xl font-semibold leading-tight">
            Honours specialization in Computer Science <br />Western University
          </h1>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-1 h-full flex flex-col">

          {/* TOP CARD */}
          <div className="bg-white rounded-3xl p-20 flex justify-center items-center flex-[3] mb-4">
            <img
              src="/westernlogo.jpg"
              alt="Western Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* BOTTOM CARD */}
          <div className="bg-gradient-to-br from-[#4b2ab0] to-[#9b3ce6] rounded-3xl p-10 flex flex-col justify-center flex-[7] mt-4">

            <h2 className="text-white text-3xl font-semibold mb-8">
              Work Inquiries?
            </h2>

            {/* COPY BUTTON */}
            <button
              id="copy-btn"
              onClick={handleCopy}
              className="px-6 py-4 rounded-xl bg-black text-white text-lg flex items-center gap-3 hover:bg-black/80 transition"
            >
              <FiCopy size={25} />
              Copy my email address
            </button>

            {/* Copied message */}
            {copied && (
              <div className="text-white text-sm mt-2 opacity-80">
                Email copied
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
