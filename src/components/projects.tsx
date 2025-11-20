"use client";

import React from "react";
import { motion } from "framer-motion"; // Remove AnimatePresence
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { projectsData } from "@/lib/data";

// Add this gradient array at the top of the file, outside of any component
const gradients = [
  "from-red-400 via-purple-400 to-blue-400",
  "from-green-400 via-emerald-400 to-cyan-400",
  "from-purple-400 via-pink-400 to-red-400",
];

interface Project {
  subtitle: string;
  title: string;
  description: string;
  link?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative rounded-3xl overflow-hidden group cursor-pointer w-[280px] sm:w-[300px] h-[400px] sm:h-[390px] mx-2 flex-shrink-0"
      >
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              gradients[index % gradients.length]
            } opacity-75`}
          />
        </div>

        <div className="relative h-full p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-white/90 mb-2">
              {project.subtitle}
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-white">
              {project.description}
            </p>
          </div>

          <div className="self-end">
            {project.link ? (
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <span className="text-white text-xl sm:text-2xl">🔗</span>
                </a>
              </button>
            ) : (
              <div className="flex items-center justify-center">
                <p className="text-white text-xs sm:text-sm">
                  Coming this fall
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      className="w-full mx-auto scroll-mt-28 mb-28 px-4"
      id="projects"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-[70rem] mx-auto"
      >
        <motion.p
          className="bg-gradient-to-r from-cyan-300 from-[5%] via-cyan-400 via-[50%] to-blue-700 to-[85%] inline-block text-transparent bg-clip-text text-4xl lg:text-3xl font-semibold -tracking-[.015em] mb-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.p>

        <div className="relative">
          <div
            className="flex snap-x snap-mandatory overflow-x-auto gap-2 px-4 pb-4 scrollbar-hide"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projectsData.map((project, index) => (
              <div key={index} className="snap-center shrink-0">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
