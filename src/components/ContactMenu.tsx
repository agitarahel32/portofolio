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
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Contact Me</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* DOWNLOAD CV */}
          <a
            href="/CV.pdf"
            download
            className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-gray-800 transition"
          >
            <FaDownload size={20} />
            <span>Download CV</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6281262506855"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-gray-800 transition"
          >
            <FaWhatsapp size={20} />
            <span>WhatsApp</span>
          </a>

          {/* GMAIL */}
          <a
            href="mailto:rahelpanjaitannn@gmail.com"
            className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-gray-800 transition"
          >
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/agita-rahel-panjaitan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-gray-800 transition"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/hy_angrey/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-gray-800 transition"
          >
            <FaInstagram size={20} />
            <span>Instagram</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Agitapanjaitan31"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:bg-gray-800 transition"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>

        </div>
      </div>
    </section>
  );
}
