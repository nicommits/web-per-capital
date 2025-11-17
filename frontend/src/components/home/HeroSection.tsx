"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import ImageCarousel from "@/components/home/ImageCarousel";

const IMG_A = "https://res.cloudinary.com/doyt5r47e/image/upload/v1763279374/1_ymyyxy.png";
const IMG_B = "https://res.cloudinary.com/doyt5r47e/image/upload/v1763279373/3_uvepqn.png";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 120);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full bg-[var(--site-bg)]">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="hero-title text-[var(--text-default)]">
            Invertir en Venezuela
            <br />
            <span className="block">nunca fue tan fácil.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Convierte tu ahorro en inversión y deja que tu dinero trabaje por ti. Invierte
            en Acciones, Bonos y Fondos Mutuales
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button href="#" className="px-6 py-3">Descarga la app</Button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-64 sm:w-80 md:w-96 lg:w-[520px] h-[520px]">
            {/* Layer A */}
            <Image
              src={IMG_A}
              alt="Per Capital app mockup A"
              width={520}
              height={1040}
              className={`object-contain -rotate-12 lg:-rotate-6 drop-shadow-2xl transition-opacity duration-700 ease-in-out ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Layer B (on top) */}
            <Image
              src={IMG_B}
              alt="Per Capital app mockup B"
              width={520}
              height={1040}
              className={`absolute inset-0 object-contain -rotate-12 lg:-rotate-6 drop-shadow-2xl transition-opacity duration-700 ease-in-out ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
        {/* Carousel below hero */}
        <div className="mt-8">
          {/* Lazy load the carousel component */}
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}
