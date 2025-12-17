"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const educationData = [
  {
    year: "2023 — Sekarang",
    title: "Computer Engineering (Diploma 3)",
    place: "Institut Teknologi Del",
    extra: "GPA: 3.00 / 4.00",
  },
  {
    year: "2023 — Sekarang",
    title: "Associate Degree in Computer Technology",
    place: "Institut Teknologi DEL",
    desc:
      "Fokus praktik jaringan, keamanan sistem, serta pengembangan aplikasi berbasis web dan sistem sederhana.",
  },
  {
    year: "2020 — 2023",
    title: "High School",
    place: "SMAN Bintang Timur Balige",
  },
];

const certificates = [
  { title: "Web Design", file: "/certificates/web-design.pdf" },
  { title: "Website Development: Front End", file: "/certificates/frontend-development.pdf" },
  { title: "Cybershield 2025", file: "/certificates/cybershield-2025.pdf" },
  { title: "HCIA-Storage V5.0 Course", file: "/certificates/hcia-storage-v5.pdf" },
  { title: "HCIA-Datacom V1.0", file: "/certificates/hcia-datacom-v1.pdf" },
  { title: "HCIA-Cloud Computing V5.5 Course", file: "/certificates/hcia-cloud-computing-v5-5.pdf" },
];

export default function Education() {
  return (
    <>
      {/* ================= EDUCATION ================= */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
        {/* BACKGROUND (NO ANIMATION) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-indigo-500/15 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold mb-16 text-white text-center"
          >
            Education
          </motion.h2>

          {/* CARDS */}
          <div className="space-y-8">
            {educationData.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative group"
              >
                {/* EDGE NEON */}
                <div className="absolute -inset-1 rounded-3xl bg-indigo-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* CARD */}
                <div className="relative z-10 bg-slate-100 border border-slate-300 rounded-2xl p-8 transition-transform duration-300 group-hover:scale-[1.015] active:scale-[0.985]">
                  <p className="text-sm text-slate-600 mb-1">{item.year}</p>
                  <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-lg text-slate-800">{item.place}</p>

                  {item.extra && <p className="text-slate-700 mt-1">{item.extra}</p>}
                  {item.desc && <p className="mt-3 text-slate-700 leading-relaxed">{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-600">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-indigo-500/12 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold mb-14 text-white text-center"
          >
            Certificates
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-3xl bg-indigo-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 bg-slate-100 border border-slate-300 rounded-2xl p-7 flex flex-col transition-transform duration-300 group-hover:scale-[1.015] active:scale-[0.985]">
                  <h4 className="text-xl font-semibold text-slate-900">{cert.title}</h4>
                  <span className="mt-auto pt-4 text-xs inline-block px-4 py-2 rounded-full border border-indigo-400/40 text-indigo-700 bg-indigo-50">
                    Click to view certificate
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
