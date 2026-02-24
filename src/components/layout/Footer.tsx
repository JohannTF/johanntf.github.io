import { Mail } from "lucide-react";
import { SOCIAL_LINKS, CONTACT } from "../../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} Johann Daniel Trejo Flores. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
