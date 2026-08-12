import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Great_Vibes,
} from "next/font/google";

import "./globals.css";
import { weddingConfig } from "@/lib/config";
import FloatingButtons from "@/components/common/FloatingButtons";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const script = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

const siteUrl = weddingConfig.socialShare.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: `${weddingConfig.wedding.title} | We're Getting Married`,

  description: `Join ${weddingConfig.couple.brideName} & ${weddingConfig.couple.groomName} on ${weddingConfig.wedding.dateDisplay} at ${weddingConfig.wedding.brideHouse.houseName}.`,

  openGraph: {
    title: `${weddingConfig.wedding.title} | Wedding Invitation`,
    description: `You're invited to celebrate our wedding on ${weddingConfig.wedding.dateDisplay}.`,
    url: siteUrl,
    siteName: weddingConfig.wedding.title,
    images: ["/images/og-cover.jpg"],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${weddingConfig.wedding.title} | Wedding Invitation`,
    description: `You're invited to celebrate our wedding on ${weddingConfig.wedding.dateDisplay}.`,
    images: ["/images/og-cover.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${script.variable} font-body bg-cream-50 text-gold-900 antialiased dark:bg-[#151110] dark:text-cream-100 transition-colors duration-500`}
      >
        {children}

        <FloatingButtons />
      </body>
    </html>
  );
}