"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

export default function ContactMenu() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white"
    >
      {/* BACKGROUND GLOW (DIAM) */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl" />

      {/* CONTENT (YANG DIANIMASIKAN) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Contact Me
        </h2>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* DOWNLOAD CV */}
          <a
            href="/CV.pdf"
            download
            className="group flex items-center justify-center gap-3 p-5 rounded-xl
              border border-white/10 bg-white/5 backdrop-blur-md
              transition-colors duration-300
              hover:bg-white/10 hover:border-white/30
              active:scale-95"
          >
            <FaDownload className="text-gray-300 group-hover:text-white transition" />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              Download CV
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6281262506855"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 p-5 rounded-xl
              border border-white/10 bg-white/5 backdrop-blur-md
              transition-colors duration-300
              hover:bg-white/10 hover:border-white/30
              active:scale-95"
          >
            <FaWhatsapp className="text-gray-300 group-hover:text-green-400 transition" />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              WhatsApp
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:rahelpanjaitannn@gmail.com"
            className="group flex items-center justify-center gap-3 p-5 rounded-xl
              border border-white/10 bg-white/5 backdrop-blur-md
              transition-colors duration-300
              hover:bg-white/10 hover:border-white/30
              active:scale-95"
          >
            <FaEnvelope className="text-gray-300 group-hover:text-red-400 transition" />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              Email
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/agita-rahel-panjaitan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 p-5 rounded-xl
              border border-white/10 bg-white/5 backdrop-blur-md
              transition-colors duration-300
              hover:bg-white/10 hover:border-white/30
              active:scale-95"
          >
            <FaLinkedin className="text-gray-300 group-hover:text-blue-400 transition" />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              LinkedIn
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/hy_angrey/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 p-5 rounded-xl
              border border-white/10 bg-white/5 backdrop-blur-md
              transition-colors duration-300
              hover:bg-white/10 hover:border-white/30
              active:scale-95"
          >
            <FaInstagram className="text-gray-300 group-hover:text-pink-400 transition" />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              Instagram
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Agitapanjaitan31"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 p-5 rounded-xl
              border border-white/10 bg-white/5 backdrop-blur-md
              transition-colors duration-300
              hover:bg-white/10 hover:border-white/30
              active:scale-95"
          >
            <FaGithub className="text-gray-300 group-hover:text-purple-400 transition" />
            <span className="text-gray-300 group-hover:text-white font-medium transition">
              GitHub
            </span>
          </a>

        </div>
      </motion.div>
    </section>
  );
}
