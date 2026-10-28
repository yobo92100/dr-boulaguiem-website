"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/Icons";

/**
 * A 16:9 YouTube video that shows a local poster until clicked, so nothing
 * is loaded from YouTube until the visitor asks for it.
 */
export function YouTubeVideo({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-4xl bg-forest-900 shadow-lift ring-1 ring-cream/10">
      {started ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setStarted(true)}
          aria-label={`Lire la vidéo : ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-forest-900/15 transition group-hover:bg-forest-900/5" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-forest-800 shadow-lift transition group-hover:scale-105 sm:h-20 sm:w-20">
            <PlayIcon className="ml-1 h-6 w-6 sm:h-7 sm:w-7" />
          </span>
        </button>
      )}
    </div>
  );
}
