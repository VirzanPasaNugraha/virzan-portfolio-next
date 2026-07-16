"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Beranda",
      href: "#home",
    },
    {
      name: "Tentang Saya",
      href: "#about",
    },
    {
      name: "Proyek",
      href: "#projects",
    },
    {
      name: "Sertifikat",
      href: "#certificates",
    },
    {
      name: "Karya Ilmiah",
      href: "#publications",
    },
    {
      name: "☕ Dukung Saya",
      href: "#support",
    },
    {
      name: "Kontak",
      href: "#contact",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => setIsOpen(false)}
        >
          Portfolio<span>.</span>
        </a>

        <div className="navbar-menu">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <ThemeToggle />

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={
              isOpen
                ? "Tutup menu navigasi"
                : "Buka menu navigasi"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;