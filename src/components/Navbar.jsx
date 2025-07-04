import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md transition-shadow border-b border-transparent " +
        (scrolled ? "shadow-xl" : "")
      }
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <nav className="space-x-4 hidden sm:block">
          <a href="#about" className="text-gray-300 hover:text-white transition">
            Om mig
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">
            Projekt
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
