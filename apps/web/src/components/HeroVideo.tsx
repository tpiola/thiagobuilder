import { useEffect, useMemo, useState } from 'react';

type HeroVideoProps = {
  src?: string;
  poster: string;
  className?: string;
};

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoKey = useMemo(() => `${src}:${poster}`, [poster, src]);

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  const showVideo = Boolean(src) && !reduceMotion && !videoError;

  return (
    <div className={className ?? 'absolute inset-0'} aria-hidden="true">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {showVideo && (
        <video
          key={videoKey}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setVideoError(true)}
          onStalled={() => setVideoError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(80%_55%_at_50%_40%,rgba(255,255,255,0.14),rgba(0,0,0,0))]" />
    </div>
  );
}
