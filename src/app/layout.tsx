import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter",
});

// Wordmark font. Swap this one import to audition others (Instrument_Serif,
// Newsreader, Space_Grotesk, etc.) — everything else stays the same.
const wordmark = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-wordmark",
});

export const metadata: Metadata = {
  title: "Good Internet",
  description:
    "A considered community where great things get found, shared, and argued over.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${wordmark.variable}`}>
      <body>{children}</body>
    </html>
  );
}
