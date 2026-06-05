import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] w-full border-t border-stone-800">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-8">
        <Image
          src="/images/logo_dark_crop.png"
          alt="Facilitador Docente"
          width={989}
          height={1010}
          className="h-16 w-auto"
        />
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: "Privacidad", href: "#" },
            { label: "Términos", href: "#" },
            { label: "Contacto", href: "#" },
            { label: "Ayuda", href: "mailto:facilitadordocenteuy@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-stone-500 hover:text-primary transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-sm font-headline italic text-stone-500">
          © 2025 Facilitador Docente. Hecho en Uruguay 🇺🇾
        </div>
      </div>
    </footer>
  );
}
