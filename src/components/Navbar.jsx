"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const links = ["home", "about", "skills", "projects", "contact"];
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Smooth scroll with offset for fixed navbar
  const scrollToSection = (id) => {
    setActive(id);
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust this based on navbar height
      const y =
        section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleLetsTalk = () => scrollToSection("contact");

  // ✅ Detect scroll to add navbar background + highlight active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const current = links.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 14 }}
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 transition-all duration-300 z-50
          ${
            isScrolled
              ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
              : "bg-[#0a0a0a] py-5"
          }
        `}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => scrollToSection("home")}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#1DB954]/20 blur-xl rounded-full"></div>
            <svg
              className="w-6 h-6 text-[#1DB954]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold font-['Lexend_Deca'] tracking-wide">
            Mayank<span className="text-[#1DB954]">.</span>
          </h1>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          {links.map((link) => (
            <motion.button
              key={link}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(link)}
              className={`relative uppercase transition-all duration-200 ${
                active === link
                  ? "text-[#1DB954]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
              {active === link && (
                <motion.div
                  layoutId="active-link"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-[#1DB954] to-[#1ed760] rounded-full"
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Right: Buttons + Hamburger */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLetsTalk}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-[#1DB954] to-[#1ed760] text-black text-sm font-semibold hover:shadow-lg hover:shadow-[#1DB954]/30 transition-all"
          >
            <MessageCircle size={16} />
            <span>Let's Talk</span>
          </motion.button>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="fixed top-0 right-0 h-full w-[75%] sm:w-[300px] bg-[#0f0f0f] z-50 flex flex-col py-8 px-6 shadow-2xl border-l border-gray-800"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-xl font-bold text-white font-['Lexend_Deca']">
                  Navigation
                </h2>
                <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X
                    size={26}
                    className="text-gray-400 hover:text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </motion.div>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((link, index) => (
                  <motion.button
                    key={link}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 6 }}
                    onClick={() => scrollToSection(link)}
                    className={`text-lg text-left transition-colors uppercase tracking-wide ${
                      active === link
                        ? "text-[#1DB954] font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
