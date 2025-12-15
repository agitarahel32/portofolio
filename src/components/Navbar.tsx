export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO / NAME */}
        <span className="text-2xl font-semibold text-white">
          Agita Rahel
        </span>

        {/* MENU */}
        <div className="flex space-x-8">
          <a
            href="#about"
            className="text-lg font-medium text-slate-300 hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-lg font-medium text-slate-300 hover:text-blue-400 transition"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-lg font-medium text-slate-300 hover:text-blue-400 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-slate-300 hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
