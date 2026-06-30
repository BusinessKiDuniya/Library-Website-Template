import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
});

// Ayoddhya's canonical web property — used as the metadataBase so any
// image URLs resolved by Next.js root off this domain.
const SITE_URL = "https://ayoddhyalibrary.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — Nurturing Minds, Shaping Tomorrow`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "study library",
    "reading hall",
    "study space",
    "study room Delhi",
    "study room Rohini",
    "library membership",
    "premium study hall",
    "silent library",
    "UPSC study hall",
    "CA study library",
    "competitive exam library",
    "Ayoddhya Library",
    "Ayodhya Chowk library",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: `${SITE.name} — Nurturing Minds, Shaping Tomorrow`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: "/ayoddhya/hero/library-setup.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Premium Study Library`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Nurturing Minds, Shaping Tomorrow`,
    description: SITE.description,
    images: ["/ayoddhya/hero/library-setup.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data for SEO. We omit the optional email and
  // openingHoursSpecification fields since Ayoddhya does not publish them —
  // search engines ignore omitted fields, but empty strings would render
  // visibly-broken JSON.
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Library",
    name: SITE.name,
    description: SITE.description,
    url: SITE_URL,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd, 3rd, 4th Floor, A-1/31,32, Sec-06 Rohini, Ayodhya Chowk",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "110085",
      addressCountry: "IN",
    },
    image: `${SITE_URL}/ayoddhya/hero/library-setup.jpg`,
  };
  if (SITE.email) {
    jsonLd.email = SITE.email;
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
