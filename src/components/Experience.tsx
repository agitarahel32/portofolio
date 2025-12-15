import Image from "next/image";

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
    desc: "Final project focusing on logic implementation, algorithm design, and problem solving.",
    type: "pdf",
    src: "/pdfs/projek-akhir-daspro.pdf",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-semibold mb-12 text-slate-900">
          Experience & Projects
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                p-7
                flex flex-col
                transition
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold text-slate-900">
                {exp.title}
              </h3>

              {/* PERIOD */}
              <p className="text-base text-slate-400 mt-1">
                {exp.period}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-4 text-base text-slate-700 leading-relaxed flex-grow">
                {exp.desc}
              </p>

              {/* IMAGE */}
              {exp.type === "image" && (
                <div className="mt-6">
                  <Image
                    src={exp.src}
                    alt={exp.title}
                    width={500}
                    height={300}
                    className="rounded-xl border border-slate-200 object-cover"
                  />
                </div>
              )}

              {/* PDF */}
              {exp.type === "pdf" && (
                <div className="mt-6">
                  <a
                    href={exp.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-5
                      py-3
                      border
                      border-blue-200
                      rounded-xl
                      text-blue-700
                      text-base
                      font-medium
                      hover:bg-blue-50
                      transition
                      w-full
                    "
                  >
                    📄 View Documentation
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
