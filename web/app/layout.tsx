import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://burnabydigitaltwin.ca"),

  title: {
    default: "Burnaby Digital Twin | AI & Digital Twin Research in Canada",
    template: "%s | Burnaby Digital Twin",
  },

  description:
    "Burnaby Digital Twin is an applied AI research platform in British Columbia, Canada, exploring community digital twins, explainable AI, geospatial intelligence, simulation, and AI-driven decision support.",

  keywords: [
    "Burnaby Digital Twin",
    "digital twin Canada",
    "digital twin British Columbia",
    "digital twin Vancouver",
    "AI digital twin Canada",
    "community digital twin",
    "artificial intelligence Canada",
    "applied AI research",
    "AI decision support",
    "decision intelligence",
    "explainable AI",
    "geospatial intelligence",
    "urban digital twin",
    "smart city AI",
    "scenario simulation",
    "agentic AI",
    "Alem Mekru",
  ],

  authors: [
    {
      name: "Alem Mekru",
      url: "https://github.com/AlemMekru",
    },
  ],

  creator: "Alem Mekru",
  publisher: "Burnaby Digital Twin",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://burnabydigitaltwin.ca",
    siteName: "Burnaby Digital Twin",
    title: "Burnaby Digital Twin | AI & Digital Twin Research in Canada",
    description:
      "Applied AI research platform exploring community digital twins, explainable AI, geospatial intelligence, simulation, and AI-driven decision support in Burnaby, British Columbia, Canada.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Burnaby Digital Twin | AI & Digital Twin Research in Canada",
    description:
      "Applied AI research on community digital twins, explainable AI, geospatial intelligence, simulation, and AI-driven decision support in Canada.",
  },

  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}