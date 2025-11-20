"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { skillsData } from "@/lib/data";

const SkillItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mb-10"
    >
      <div className="text-black mb-3 text-3xl">{icon}</div>
      <h3 className="text-black text-base sm:text-lg font-semibold leading-tight">
        {title}
        <span className="text-black-400 text-base sm:text-lg leading-tight sm:font-normal font-semibold">
          {description}
        </span>
      </h3>
    </motion.div>
  );
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      className="max-w-[60rem] mx-auto px-4 scroll-mt-28 mb-28"
      id="skills"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            What do I work with?
          </h2>
          <p className="text-black-50 text-lg max-w-[800px] mx-auto word sm:tracking-normal tracking-tight font-semibold leading-[1.3]">
            Powerful tools. Endless possibilities.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-x-28 max-w-[700px] mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "md:justify-self-end max-w-[300px]"
                  : "md:justify-self-start max-w-[300px]"
              }
            >
              <SkillItem {...skill} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
