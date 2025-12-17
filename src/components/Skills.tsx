"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaPython,
  FaCuttlefish,
  FaServer,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C / C++", icon: <FaCuttlefish /> },
  { name: "Virtual Machine", icon: <FaServer /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative py-28 px-6
        bg-gradient-to-br
        from-slate-600
        via-slate-500
        to-slate-600
      "
    >
      {/* SOFT GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-indigo-500/15 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        {/* TITLE */}
        <h1 className="text-4xl font-semibold mb-14 text-slate-100 text-center">
          Skills
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                rotate: 3,
                boxShadow: "0 0 28px rgba(99,102,241,0.55)",
              }}
              transition={{ type: "spring", stiffness: 260 }}
              className="
                w-full max-w-[150px] h-[150px]
                rounded-2xl
                flex flex-col items-center justify-center
                gap-3
                cursor-pointer

                bg-white
                border border-slate-200
              "
            >
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -5 }}
                className="text-4xl text-indigo-600"
                style={{
                  textShadow: "0 0 14px rgba(99,102,241,0.7)",
                }}
              >
                {skill.icon}
              </motion.div>

              {/* LABEL */}
              <span className="text-sm font-semibold text-slate-700 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
