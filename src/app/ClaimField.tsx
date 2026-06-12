"use client";

import { useState, useRef } from "react";

export default function ClaimField() {
  const [revealed, setRevealed] = useState(false);
  const [shaking, setShaking] = useState(false);
  const revertTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trigger = () => {
    // restart the shake: drop the class, reflow, re-add (per recipe)
    setShaking(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setShaking(true)));

    setRevealed(true);
    if (revertTimer.current) clearTimeout(revertTimer.current);
    revertTimer.current = setTimeout(() => setRevealed(false), 2600);
  };

  return (
    <div
      className={
        "claim-field" +
        (revealed ? " revealed is-error" : "") +
        (shaking ? " is-shaking" : "")
      }
      onPointerDown={trigger}
      onAnimationEnd={() => setShaking(false)}
    >
      <span className="ph">@username</span>
      <span className="reveal-text">Launching soon.</span>
    </div>
  );
}
