"use client";

import { useState } from "react";

export function Portrait({ className = "" }: { className?: string }) {
  const [src, setSrc] = useState("/photo.jpg");
  const [failed, setFailed] = useState(false);

  return (
    <div className={`portrait-frame ${className}`}>
      <div className="portrait-frame__glow" aria-hidden />
      <div className="portrait-frame__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={failed ? "/portrait-placeholder.svg" : src}
          alt="Portrait d'APEDO Kodjo Joel"
          className="portrait-img"
          onError={() => {
            setFailed(true);
            setSrc("/portrait-placeholder.svg");
          }}
        />
        <span className="portrait-frame__scan" aria-hidden />
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
        <span>{failed ? "photo.jpg — slot libre" : "APEDO K. Joel"}</span>
        <span className="text-accent">● live</span>
      </div>
    </div>
  );
}
