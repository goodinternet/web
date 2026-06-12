"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";

export default function ClaimField() {
  const [revealed, setRevealed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reveal = () => {
    setRevealed(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setRevealed(false), 2200); // auto-clear (mobile)
  };

  return (
    <motion.div
      className={`claim-field${revealed ? " revealed" : ""}`}
      initial="rest"
      animate="rest"
      whileHover="deny"
      whileTap="deny"
      onClick={reveal}
    >
      <svg
        className="lock"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12C5 10.8954 5.89543 10 7 10H17C18.1046 10 19 10.8954 19 12V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V12Z" />
        <motion.path
          d="M16 9.5V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9.5"
          style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
          variants={{
            rest: { rotate: 0 },
            deny: { rotate: [0, -7, 7, -5, 5, 0], transition: { duration: 0.4 } },
          }}
        />
        <path d="M12 14V17" />
      </svg>

      <span className="ph">@username</span>
      <span className="soon">SOON</span>
    </motion.div>
  );
}
