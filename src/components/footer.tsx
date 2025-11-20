import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full px-8 py-8 sm:max-w-[70rem] mx-auto">
      <div className="h-px bg-black/90 mb-4" />
      <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between text-black-900 gap-4 sm:gap-0">
        <div>
          <small className="text-sm">© 2025 DANIEL ESEMEZIE | desemezie@gmail.com</small>
        </div>

        <div className="hidden sm:block h-5 w-px bg-gray-800 mx-8" />

        <div className="flex gap-6 items-center">
          <Link
            href="https://www.linkedin.com/in/desemezie/"
            target="_blank"
            className="hover:text-gray-200 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/desemezie"
            target="_blank"
            className="hover:text-gray-200 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
