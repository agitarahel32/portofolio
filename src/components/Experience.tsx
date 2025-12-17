"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "Load Balancing Strategy for SDN",
    period: "Jan 2025 – May 2025",
    desc: "Built an SDN system with multiple controllers using the Raft algorithm and implemented load balancing and logging.",
    type: "image",
    src: "/images/sdn.jpeg",
  },
  {
    title: "Ansible-based Infrastructure Automation",
    period: "Jan 2025 – May 2025",
    desc: "Automated server provisioning, service configuration, and system updates using Ansible Playbooks.",
    type: "image",
    src: "/images/ansible.jpeg",
  },
  {
    title: "Website Hometown",
    period: "2024",
    desc: "Developed a website showcasing hometown information, culture, and local attractions.",
    type: "image",
    src: "/images/hometown.png",
  },
  {
    title: "CyberFox Chatbot (RAG-based)",
    period: "Jan 2025 – May 2025",
    desc: "Developed an educational chatbot using React, Node.js, LangChain, OpenAI GPT-4, Pinecone, and PostgreSQL.",
    type: "pdf",
    src: "/pdfs/cyberfox-chatbot.pdf",
  },
  {
    title: "E-Commerce Website for UMKM Toba",
    period: "Jan 2024 – Jul 2024",
    desc: "Built a responsive WordPress & MySQL website for local SMEs in Toba Regency.",
    type: "pdf",
    src: "/pdfs/ecommerce-umkm-toba.pdf",
  },
  {
    title: "Final Project – Dasar Pemrograman",
    period: "2023",
    desc: "Final project focusing on algorithm design, logic implementation, and problem solving.",
    type: "pdf",
    src: "/pdfs/projek-akhir-daspro.pdf",
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="experience"
        className="
          relative py-28 px-6 scroll-mt-28
          bg-gradient-to-br
          from-slate-900 via-slate-800 to-gray-900
        "
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-3xl rounded-full" />
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-14 text-white">
            Experience & Projects
          </h2>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  boxShadow: "0 0 30px rgba(99,102,241,0.35)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  p-7 flex flex-col
                  text-slate-800
                "
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {exp.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {exp.period}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 flex-grow">
                  {exp.desc}
                </p>

                {/* IMAGE (CLICK TO VIEW) */}
                {exp.type === "image" && (
                  <button
                    onClick={() => setActiveImage(exp.src)}
                    className="mt-6 overflow-hidden rounded-xl border border-slate-200 group"
                  >
                    <Image
                      src={exp.src}
                      alt={exp.title}
                      width={500}
                      height={300}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>
                )}

                {/* PDF */}
                {exp.type === "pdf" && (
                  <div className="mt-6">
                    <a
                      href={exp.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full inline-flex items-center justify-center
                        px-5 py-3 rounded-xl
                        border border-indigo-500/40
                        text-indigo-600 font-medium
                        hover:bg-indigo-50
                        hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]
                        transition
                      "
                    >
                      📄 View Documentation
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= IMAGE VIEWER MODAL ================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-black/80 backdrop-blur
              flex items-center justify-center
              px-6
            "
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-indigo-400 transition"
              >
                ✕
              </button>

              <Image
                src={activeImage}
                alt="Project Preview"
                width={1200}
                height={800}
                className="rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
