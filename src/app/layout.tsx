import type { Metadata } from "next";
import { Syne, Nunito_Sans, Baloo_2 } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["devanagari", "latin"],
  weight: ["700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Bhavishya Tech — Global IT & Software Solutions",
    template: "%s · Bhavishya Tech",
  },
  description:
    "Custom apps, high-performance web systems, and automation tools built for ambitious brands. Dedicated teams mentored by senior engineers. Fixed-scope delivery, transparent pricing.",
  keywords: [
    "software development",
    "custom apps",
    "healthcare software",
    "restaurant systems",
    "mobile app development",
    "web applications",
    "QA automation",
    "Bhavishya Tech",
  ],
  authors: [{ name: "Bhavishya Tech" }],
  openGraph: {
    type: "website",
    url: SITE.domain,
    title: "Bhavishya Tech — Global IT & Software Solutions",
    description:
      "We build software that scales. Custom apps, web systems, and automation for ambitious brands.",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavishya Tech — Global IT & Software Solutions",
    description: "We build software that scales.",
  },
  alternates: { canonical: SITE.domain },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${nunito.variable} ${baloo.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.domain,
              email: SITE.email,
              telephone: SITE.phone,
              description:
                "Custom apps, high-performance web systems, and automation tools built for ambitious brands.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bareilly",
                addressRegion: "UP",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <div className="noise-layer" aria-hidden />
        {children}
      </body>
    </html>
  );
}
