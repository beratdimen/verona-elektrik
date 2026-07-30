"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

export default function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* Büyük resim */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
        onClick={() => setIndex(0)}
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Küçük resimler */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Thumbnails, Counter]}
        carousel={{
          finite: false,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        animation={{
          fade: 300,
          swipe: 350,
        }}
        styles={{
          container: {
            backgroundColor: "rgba(0,0,0,.94)",
          },
        }}
        thumbnails={{
          position: "bottom",
          border: 0,
          borderRadius: 12,
          gap: 10,
          vignette: false,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          scrollToZoom: true,
        }}
      />
    </>
  );
}
