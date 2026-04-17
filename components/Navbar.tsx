"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

function HoneycombIcon({ open }: { open: boolean }) {
  const cells = [
    { cx: 14, cy: 5 },
    { cx: 6, cy: 9.5 },
    { cx: 22, cy: 9.5 },
    { cx: 14, cy: 14 },
    { cx: 6, cy: 18.5 },
    { cx: 22, cy: 18.5 },
    { cx: 14, cy: 23 },
  ];
  return (
    <svg width="26" height="28" viewBox="0 0 28 28" fill="none" style={{ pointerEvents: "none" }}>
      {cells.map(({ cx, cy }, i) => (
        <polygon
          key={i}
          points={`${cx},${cy - 4} ${cx + 3.5},${cy - 2} ${cx + 3.5},${cy + 2} ${cx},${cy + 4} ${cx - 3.5},${cy + 2} ${cx - 3.5},${cy - 2}`}
          style={{
            fill: open ? "#F47D31" : "#57534e",
            opacity: open ? (i % 2 === 0 ? 1 : 0.45) : 1,
            transition: `fill 0.2s ease ${i * 0.025}s, opacity 0.2s ease ${i * 0.025}s`,
          }}
        />
      ))}
    </svg>
  );
}

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("navbar-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsAtTop(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const solid = !isAtTop || mobileOpen;

  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        {/* Fondo — pointer-events:none para no bloquear interacciones en mobile */}
        <div
          className="absolute inset-0"
          style={{
            pointerEvents: "none",
            backgroundColor: solid ? "rgba(250,249,247,0.95)" : "rgba(250,249,247,0)",
            backdropFilter: solid ? "blur(18px)" : "blur(0px)",
            WebkitBackdropFilter: solid ? "blur(18px)" : "blur(0px)",
            boxShadow: solid
              ? "0 1px 0 rgba(244,125,49,0.1), 0 6px 30px rgba(0,0,0,0.05)"
              : "none",
            transition:
              "background-color 0.4s ease, backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease, box-shadow 0.4s ease",
          }}
        />

        {/* Línea naranja inferior */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px]"
          style={{
            pointerEvents: "none",
            width: "100%",
            background: "linear-gradient(to right, transparent, #F47D31, transparent)",
            opacity: solid ? 0.45 : 0,
            transform: solid ? "scaleX(1)" : "scaleX(0.2)",
            transformOrigin: "center",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        />

        <div className="flex justify-between items-center w-full px-5 py-3 max-w-7xl mx-auto relative">
          {/* Logo */}
          <a href="#inicio" onClick={() => setMobileOpen(false)}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Image
                src="/images/logo_navbar_crop.png"
                alt="Facilitador Docente"
                width={1909}
                height={494}
                className="h-9 sm:h-10 w-auto"
                priority
              />
            </motion.div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-stone-600 font-medium text-sm relative"
                whileHover={{ color: "#F47D31" }}
                transition={{ duration: 0.15 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: "100%", transformOrigin: "left" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.a
              href="#"
              className="bg-primary text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-sm shadow-sm relative overflow-hidden"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 20px rgba(244,125,49,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative whitespace-nowrap">Empezar gratis</span>
            </motion.a>

            {/* Hamburger colmena — solo mobile */}
            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl -mr-1 touch-manipulation"
              onPointerDown={(e) => {
                e.preventDefault(); // evita el click subsecuente (doble disparo)
                setMobileOpen((v) => !v);
              }}
            >
              <HoneycombIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="absolute left-3 right-3 rounded-2xl overflow-hidden"
              style={{
                top: "64px",
                background: "rgba(250,249,247,0.98)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(244,125,49,0.1)",
                WebkitBackdropFilter: "blur(20px)",
                backdropFilter: "blur(20px)",
              }}
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <div
                className="h-[2px]"
                style={{
                  background: "linear-gradient(to right, transparent, #F47D31, transparent)",
                  opacity: 0.7,
                }}
              />

              <div className="p-3 flex flex-col gap-1">
                {NAV_LINKS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl font-medium text-stone-700 active:bg-orange-50 active:text-primary"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.06, duration: 0.2 }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#F47D31", opacity: 0.5 }}
                    />
                    {item.label}
                  </motion.a>
                ))}

                <div className="h-px bg-stone-200 mx-1 my-1" />

                <motion.a
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="mx-1 mb-1 flex items-center justify-center gap-2 text-white py-3.5 rounded-xl font-medium relative overflow-hidden"
                  style={{
                    backgroundColor: "#F47D31",
                    boxShadow: "0 4px 14px rgba(244,125,49,0.3)",
                  }}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="material-symbols-outlined text-[18px]">hive</span>
                  <span>Empezar gratis</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
