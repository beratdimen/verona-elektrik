"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({ images, selected, setSelected }) {
  const opened = selected !== null;

  const prev = useCallback(() => {
    setSelected((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length, setSelected]);

  const next = useCallback(() => {
    setSelected((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length, setSelected]);

  const close = useCallback(() => {
    setSelected(null);
  }, [setSelected]);

  useEffect(() => {
    if (!opened) return;

    document.body.style.overflow = "hidden";

    const keyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", keyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", keyDown);
    };
  }, [opened, close, prev, next]);

  if (!opened) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
    >
      {/* Kapat */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        className="absolute right-6 top-6 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X className="h-7 w-7" />
      </button>

      {/* Sol */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}

      {/* Sağ */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      {/* Resim */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[85vh] w-full max-w-7xl"
      >
        <Image
          src={images[selected]}
          alt=""
          fill
          priority
          className="object-contain select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
