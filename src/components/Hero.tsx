"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden
      bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white"
        >
          {/* BADGE */}
          <span className="inline-block mb-5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium text-gray-200">
            👋 Welcome to my portfolio
          </span>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I’m <span className="text-white">Agita Rahel Panjaitan</span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Front End Developer <span className="text-gray-500">|</span> Data Analysis
          </p>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
            Computer Technology student at Institut Teknologi Del with a strong
            interest in frontend development, UI/UX design, and system analysis.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium
              hover:bg-gray-100 transition"
            >
              Let’s Connect
            </a>

            <a
              href="#experience"
              className="px-6 py-3 rounded-full border border-white/30 text-white
              hover:bg-white/10 transition"
            >
              View Projects
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-10 flex gap-4">
            {/* GMAIL */}
            <a
              href="mailto:rahelpanjaitannn@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/agita-rahel-panjaitan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Agitapanjaitan31"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl" />
            <Image
              src="/profile.png"
              alt="Agita Rahel Panjaitan"
              fill
              priority
              className="relative rounded-full object-cover border-4 border-white/20 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
