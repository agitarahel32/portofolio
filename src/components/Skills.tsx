const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "WordPress",
  "Git & GitHub",
  "Figma",
  "SQL",
  "Python",
  "C / C++",
  "Virtual Machine",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-blue-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-semibold mb-12 text-blue-900">
          Skills
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="
                w-full
                max-w-[160px]
                px-4
                py-5
                bg-white
                border border-blue-200
                rounded-xl
                text-center
                text-base
                font-medium
                text-blue-900
                shadow-sm
                hover:shadow-lg
                hover:border-blue-400
                transition
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
