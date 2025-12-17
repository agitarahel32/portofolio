"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaPlug,
  FaProjectDiagram,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-24 px-6
        bg-gradient-to-br
        from-slate-600
        via-slate-500
        to-slate-600
      "
    >
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-slate-100 text-center">
        About Me
      </h2>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div
          className="
            bg-slate-700
            rounded-3xl
            p-10 md:p-12
            border border-white/10
            grid grid-cols-1 md:grid-cols-2 gap-12
            shadow-[0_25px_60px_rgba(0,0,0,0.35)]
          "
        >
          {/* LEFT — DESCRIPTION (SECOND CARD → WHITE) */}
          <div>
            <motion.div
              whileHover={{
                boxShadow: "0 0 28px rgba(99,102,241,0.35)",
              }}
              transition={{ duration: 0.3 }}
              className="
                bg-white
                rounded-2xl
                p-8
                border border-slate-200
                text-base md:text-lg
                leading-relaxed
                text-slate-700
                text-justify
              "
            >
              <p>
                I am a Computer Technology (D3) student in my fifth semester at
                Institut Teknologi Del with a strong interest in frontend
                development, UI/UX design, and system analysis. I have experience
                in building responsive web-based applications, integrating
                RESTful APIs, and documenting system workflows. Through academic
                and team-based projects, I am accustomed to collaborating in
                structured environments and translating user requirements into
                intuitive digital interfaces while continuously improving my
                technical skills and learning new technologies.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — SKILLS */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-6 text-xl font-semibold text-slate-100">
              Skills
            </h3>

            <div className="grid grid-cols-3 gap-5">
              {[
                { icon: <FaCode />, label: "Frontend" },
                { icon: <FaPalette />, label: "UI / UX" },
                { icon: <FaPlug />, label: "API" },
                { icon: <FaProjectDiagram />, label: "System" },
                { icon: <FaUsers />, label: "Teamwork" },
                { icon: <FaRocket />, label: "Learning" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                    boxShadow: "0 0 26px rgba(99,102,241,0.45)",
                  }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="
                    w-28 h-28
                    rounded-2xl
                    flex flex-col items-center justify-center
                    bg-white
                    border border-slate-200
                    cursor-pointer
                  "
                >
                  <div
                    className="text-4xl text-indigo-600"
                    style={{
                      textShadow: "0 0 12px rgba(99,102,241,0.6)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium text-slate-700">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
