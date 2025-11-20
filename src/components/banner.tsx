"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const name = "Daniel Esemezie".split(" ");
  const title = "Software Developer Engineer".split(" ");

  const textAnimationDuration = 0.5;
  const totalTextDelay = (name.length + title.length) / 5;
  const buttonAnimationDelay = totalTextDelay + textAnimationDuration;

  return (
    <section className="scroll-mt-80 mb-10">
      <div className="flex items-center justify-center">
        <div className="text-center mt-44 sm:mt-48">
          <p className="text-5xl sm:text-8xl font-semibold tracking-tight">
            {name.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 5,
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <p className="text-lg sm:text-2xl">
            {title.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 5 + 0.5,
                }}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <motion.div
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: buttonAnimationDelay,
            }}
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-normal py-2 px-4 rounded-full transition duration-300">
              <a href="#contact">Contact Me</a>
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white font-normal py-2 px-4 rounded-full border border-blue-500 transition duration-300">
              <a
                href="/Daniel_Esemezie_resume.pdf"
                download="Daniel Esemezie's Resume"
              >
                Download CV
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
