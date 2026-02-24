import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../../lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../lib/theme";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-sm border-b border-border-primary">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="text-lg font-bold tracking-tight text-text-primary">
          JT<span className="text-text-secondary">F</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-text-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border-primary overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                {theme === "light" ? "Modo oscuro" : "Modo claro"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
