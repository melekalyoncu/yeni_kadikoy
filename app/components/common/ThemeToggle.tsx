"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { toggleTheme } from "@/app/store/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.theme.mode); // 'light' | 'dark'

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const isDark = theme === "dark";

  const onToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      title={`Current: ${theme}\nClick to switch`}
      className={
        [
          "group relative inline-flex h-9 w-16 select-none items-center rounded-full p-1",
          "transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "focus-visible:ring-yellow-400 dark:focus-visible:ring-sky-400 focus-visible:ring-offset-transparent",
          // Track colors
          isDark
            ? "bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900"
            : "bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400",
          // Subtle inner shadow / glass
          "shadow-[inset_0_0_0_1px_rgba(255,255,255,.3)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,.1)]",
        ].join(" ")
      }
    >

      {/* Knob */}
      <motion.span
        aria-hidden
        className={
          [
            "relative z-10 grid h-7 w-7 place-items-center rounded-full",
            "bg-white shadow-md dark:bg-slate-800",
          ].join(" ")
        }
        initial={false}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.6 }}
      >
        {/* Glow */}
        <span
          className={
            "absolute -inset-1 rounded-full blur-md transition-opacity " +
            (isDark
              ? "opacity-60 bg-sky-500/30"
              : "opacity-60 bg-yellow-400/30")
          }
        />
        {isDark ? (
          <Moon size={16} className="text-sky-300" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </motion.span>

      {/* Reduced-motion fallback: move via CSS translate when user prefers no motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          button[role="switch"] > span[aria-hidden="true"] {
            transform: translateX(${isDark ? 28 : 0}px);
            transition: transform 0.2s ease;
          }
        }
      `}</style>
    </button>
  );
}

