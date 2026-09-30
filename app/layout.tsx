import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camilpieplucoaching.netlify.app"),

  title: {
    default:
      "Coach sportif à Lyon | Camil Pieplu - Coaching & Préparation Physique",
    template: "%s | Camil Pieplu",
  },

  description:
    "Coach sportif et préparateur physique à Lyon. Accompagnement physique à distance, nutrition, coaching à domicile et préparation physique individuelle.",

  keywords: [
    "coach sportif Lyon",
    "coach sportif à domicile Lyon",
    "coach sportif à distance",
    "préparateur physique Lyon",
    "préparation physique Lyon",
    "accompagnement nutritionnel",
    "Camil Pieplu",
  ],

  authors: [{ name: "Camil Pieplu" }],
  creator: "Camil Pieplu",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Camil Pieplu Coaching",
    title:
      "Coach sportif à Lyon | Camil Pieplu - Coaching & Préparation Physique",
    description:
      "Accompagnement physique, nutrition et préparation physique individuelle à Lyon et à distance.",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "JitmNAV_XkBs4ztxSEiOsRkNCx2K6HjRbfOrQshudAg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent measurementId="G-6LXVHGV6RZ" />

      </body>
    </html>
  );
}