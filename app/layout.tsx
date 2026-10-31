
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
  metadataBase: new URL("https://aurabyagc.com"),

  title: {
    default: "Aura | Personalised Digital Gifts & Experiences",
    template: "%s | Aura",
  },

  description:
    "Turn your special moments into beautiful personalised digital experiences. Discover custom birthday websites, friendship memory pages, love stories and unforgettable surprises by Aura.",

  applicationName: "Aura",

  keywords: [
    "personalised digital gifts",
    "custom digital gifts",
    "personalised birthday website",
    "birthday surprise website",
    "friendship memory website",
    "love story website",
    "personalised memory pages",
    "custom celebration websites",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Aura | Personalised Digital Gifts & Experiences",
    description:
      "Your memories deserve more than a photo album. Create a personalised digital experience with Aura.",
    url: "https://aurabyagc.com",
    siteName: "Aura",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}