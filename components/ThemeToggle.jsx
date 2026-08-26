"use client";

import { Moon, Sun, Sunset } from "lucide-react";
import { useEffect, useState } from "react";

const THEMES = ["light", "senja", "dark"];

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const currentTheme = THEMES.includes(savedTheme)
      ? savedTheme
      : "light";

    setTheme(currentTheme);

    document.documentElement.setAttribute(
      "data-theme",
      currentTheme
    );
  }, []);


  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const newTheme = THEMES[(currentIndex + 1) % THEMES.length];

    setTheme(newTheme);

    localStorage.setItem(
      "portfolio-theme",
      newTheme
    );

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );
  };


  const icons = {
    light: <Moon size={19} />,
    senja: <Sun size={19} />,
    dark: <Sunset size={19} />,
  };

  const labels = {
    light: "Ganti ke tema senja",
    senja: "Ganti ke tema gelap",
    dark: "Ganti ke tema terang",
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={labels[theme]}
    >
      {icons[theme]}
    </button>
  );
}

export default ThemeToggle;