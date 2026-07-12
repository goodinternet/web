import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./lockup.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
