
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Personalised Birthday Website Gift | Unique Birthday Surprise",
  description:
    "Surprise someone special with a personalised birthday website by Aura. Celebrate their memories with photos, heartfelt messages and a beautiful digital birthday experience.",
  alternates: {
    canonical: "/experiences/birthday",
  },
};

export default function BirthdayLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
