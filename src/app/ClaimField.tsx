"use client";

import { useState, useRef } from "react";

export default function ClaimField() {
  const [revealed, setRevealed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reveal = () => {
    setRevealed(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setRevealed(false), 2200); // auto-clear (mobile)
  };

  return (
    <div
      className={`claim-field${revealed ? " revealed" : ""}`}
      onPointerDown={reveal}
    >
      <span className="ph">@username</span>
      <span className="soon">SOON</span>
    </div>
  );
}
