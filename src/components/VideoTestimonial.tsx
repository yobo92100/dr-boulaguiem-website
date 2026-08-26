"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PlayIcon } from "@/components/Icons";
import type { VideoTestimonial as VideoTestimonialData } from "@/data/testimonials";

/**
 * A 9:16 reel that shows a poster image until clicked, then plays inline.
 * The video element is only mounted on first play, so nothing downloads
 * until the visitor asks for it.
 */
export function VideoTestimonial({ item }: { item: VideoTestimonialData }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasAutoplayed = useRef(false);

  /**
   * Start playback once, right after the element mounts. React re-invokes ref
   * callbacks on every render, so the guard is what stops the video restarting
   * on its own each time the component re-renders.
   */
  const startOnce = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (!node || hasAutoplayed.current) return;
    hasAutoplayed.current = true;

    // `muted` and `volume` are independent — both have to be set, and `muted`
    // has to be re-applied after play() in case the browser flipped it back.
    node.muted = false;
    node.volume = 1;
    void node
      .play()
      .then(() => {
        node.muted = false;
      })
      .catch(() => {
        /* The visitor can still press play in the native controls. */
      });
  }, []);

  // Pause when the reel scrolls out of view or the tab loses focus, so a
  // forgotten video never keeps talking somewhere off-screen.
  useEffect(() => {
    if (!started) return;

    const pause = () => videoRef.current?.pause();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) pause();
      },
      { threshold: 0.35 }
    );
    if (videoRef.current) observer.observe(videoRef.current);

    const onHidden = () => {
      if (document.hidden) pause();
    };
    document.addEventListener("visibilitychange", onHidden);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onHidden);
    };
  }, [started]);

  return (
    <figure className="group relative aspect-[9/16] overflow-hidden rounded-4xl bg-forest-900 shadow-soft">
      {started ? (
        <video
          ref={startOnce}
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => setStarted(true)}
          aria-label={`Lire le témoignage de ${item.author}`}
          className="absolute inset-0 h-full w-full text-left"
        >
          <img
            src={item.poster}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/25 to-transparent" />

          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-forest-800 shadow-lift transition group-hover:scale-110">
            <PlayIcon className="ml-0.5 h-6 w-6" />
          </span>

          <figcaption className="absolute inset-x-0 bottom-0 p-6">
            <p
              className={`font-display text-base leading-7 text-cream ${
                // Only quoted speech is set in italics.
                item.hook.startsWith("«") ? "italic" : ""
              }`}
            >
              {item.hook}
            </p>
            <p className="mt-3 text-sm font-semibold text-cream">
              {item.author}
            </p>
            <p className="text-[13px] text-cream/70">{item.role}</p>
          </figcaption>
        </button>
      )}
    </figure>
  );
}
