"use client";

import { motion } from "motion/react";

export default function ClaimField() {
  return (
    <motion.div
      className="claim-field"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <svg
        className="lock"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
        <motion.path
          d="M8 10.5 V7 a4 4 0 0 1 8 0 V10.5"
          style={{ transformBox: "fill-box", transformOrigin: "0% 100%" }}
          variants={{
            rest: {
              rotate: [0, -7, 0],
              transition: { duration: 0.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.4 },
            },
            hover: {
              rotate: -34,
              transition: { type: "spring", bounce: 0.45, visualDuration: 0.45 },
            },
          }}
        />
        <circle cx="12" cy="15.3" r="1.25" fill="currentColor" stroke="none" />
      </svg>

      <span className="ph">@username</span>
      <span className="soon">soon</span>
    </motion.div>
  );
}
