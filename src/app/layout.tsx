import type { Metadata } from "next";
import { Dongle, Inter, Radley, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter",
});

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-dongle",
});

// Wordmark font. Swap this one import to audition others (Instrument_Serif,
// Newsreader, Space_Grotesk, etc.) — everything else stays the same.
const wordmark = Radley({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-wordmark",
});

const soon = Geist({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
  variable: "--font-soon",
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
    <html lang="en" className={`${inter.variable} ${dongle.variable} ${wordmark.variable} ${soon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
