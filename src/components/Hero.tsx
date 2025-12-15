import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center text-center px-6 pt-20 pb-10">
      <div className="max-w-4xl flex flex-col items-center">
        
        {/* FOTO PROFIL */}
        <div className="mb-5">
          <Image
            src="/profile.png"
            alt="Agita Rahel Panjaitan"
            width={260}
            height={260}
            className="rounded-2xl border-4 border-gray-200 shadow-xl object-cover"
            priority
          />
        </div>

        {/* NAMA */}
        <h1 className="text-5xl md:text-6xl font-bold">
          Agita Rahel Panjaitan
        </h1>

        {/* ROLE */}
        <p className="mt-3 text-2xl md:text-3xl font-medium text-gray-700">
          Front End Developer <span className="text-gray-400">|</span> Data Analysis
        </p>

        {/* DESKRIPSI */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
          Computer Technology student at Institut Teknologi Del with a strong
          interest in frontend development, UI/UX design, and system analysis.
        </p>
      </div>
    </section>
  );
}
