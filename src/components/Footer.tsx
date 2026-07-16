import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-xs font-light text-gray-600">
          Seftekra Energy &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-light text-gray-600 transition-colors hover:text-gray-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
