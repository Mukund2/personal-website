import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "REEL — A video studio for founders.",
  description:
    "REEL is a video studio making UGC, brand films, and founder-led content for early-stage companies. 2M+ combined audience across our team.",
  openGraph: {
    title: "REEL — A video studio for founders.",
    description:
      "UGC, brand films, and founder-led content. Built for early-stage companies in San Francisco.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <body className="bg-cream text-ink antialiased selection:bg-coral/20 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
