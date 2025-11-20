"use client";

import React from "react";
import Memoji from "@/app/memoji.png";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactCard() {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      className="max-w-[60rem] mx-auto px-4 scroll-mt-28 mb-16"
      ref={ref}
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div className="bg-gray-50 rounded-[2.5rem] p-6 sm:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between">
          <div className="flex flex-col max-w-[500px] text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.275 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-gray-900"
            >
              Let&apos;s work together.
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.375 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition w-fit mx-auto md:mx-0"
              onClick={() =>
                (window.location.href = "mailto:desemezie@gmail.com")
              }
            >
              Email me
            </motion.button>
          </div>

          <motion.div
            className="w-48 md:w-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.475 }}
          >
            <Image
              src={"/profile.jpg"}
              alt="Memoji"
              width={400}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
