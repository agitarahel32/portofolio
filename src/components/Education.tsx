export default function Education() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-semibold mb-12 text-gray-900">
          Education
        </h2>

        {/* RINGKASAN UTAMA */}
        <div className="mb-12">
          <p className="text-base text-gray-400 mb-1">
            2023 — Sekarang
          </p>
          <h3 className="text-2xl font-semibold text-gray-900">
            Computer Engineering (Diploma 3)
          </h3>
          <p className="text-lg text-gray-700">
            Institut Teknologi Del
          </p>
          <p className="text-base text-gray-600 mt-1">
            GPA: 3.00 / 4.00
          </p>
        </div>

        {/* TIMELINE EDUCATION */}
        <div className="space-y-10 mb-20">
          {/* KULIAH */}
          <div>
            <p className="text-base text-gray-400 mb-1">
              2023 — Sekarang
            </p>
            <h3 className="text-2xl font-semibold text-gray-900">
              Associate Degree in Computer Technology
            </h3>
            <p className="text-lg text-gray-700">
              Institut Teknologi DEL
            </p>
            <p className="mt-3 text-base text-gray-600 leading-relaxed max-w-4xl">
              Fokus praktik jaringan, keamanan, dan pengembangan aplikasi
              sederhana.
            </p>
          </div>

          {/* SMA */}
          <div>
            <p className="text-base text-gray-400 mb-1">
              2020 — 2023
            </p>
            <h3 className="text-2xl font-semibold text-gray-900">
              High School
            </h3>
            <p className="text-lg text-gray-700">
              SMAN Bintang Timur Balige
            </p>
          </div>
        </div>
      </div>

      {/* CERTIFICATES – SECTION TERPISAH */}
      <div className="mt-10 py-16 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-indigo-900">
            Certificates
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Design", file: "/certificates/web-design.pdf" },
              { title: "Website Development: Front End", file: "/certificates/frontend-development.pdf" },
              { title: "Cybershield 2025", file: "/certificates/cybershield-2025.pdf" },
              { title: "HCIA-Storage V5.0 Course", file: "/certificates/hcia-storage-v5.pdf" },
              { title: "HCIA-Datacom V1.0", file: "/certificates/hcia-datacom-v1.pdf" },
              { title: "HCIA-Cloud Computing V5.5 Course", file: "/certificates/hcia-cloud-computing-v5-5.pdf" },
            ].map((cert, i) => (
              <a
                key={i}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  p-7
                  bg-white
                  border border-indigo-200
                  rounded-2xl
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                "
              >
                <h4 className="text-xl font-semibold text-indigo-900">
                  {cert.title}
                </h4>
                <p className="mt-2 text-base text-indigo-600">
                  Click to view certificate
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
