import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { MenuContextProvider } from "@/context/MobileMenuContext";
import MobileMenu from "@/components/MobileMenu";
import Script from "next/script";

// Google Fonts
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.assexmarkets.com"),
  title: {
    default:
      "Assexmarkets - Licensed Global Forex Broker | Ultra Fast Execution",
    template: "%s | Assexmarkets",
  },
  description:
    "Trade forex, commodities & indices with Assexmarkets - a licensed global broker offering ultra-fast execution, competitive spreads, and professional trading platforms for retail & institutional traders.",
  keywords: [
    "forex broker",
    "forex trading",
    "online trading",
    "CFD trading",
    "MetaTrader",
    "currency trading",
    "commodities trading",
    "indices trading",
    "licensed broker",
    "retail trading",
    "institutional trading",
    "tight spreads",
    "fast execution",
  ],
  authors: [{ name: "Assexmarkets" }],
  creator: "Assexmarkets",
  publisher: "Assexmarkets",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.assexmarkets.com",
    languages: {
      "en-US": "https://www.assexmarkets.com",
      "en-GB": "https://www.assexmarkets.com/en-gb",
      "fr-FR": "https://www.assexmarkets.com/fr",
      "de-DE": "https://www.assexmarkets.com/de",
      "es-ES": "https://www.assexmarkets.com/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.assexmarkets.com",
    siteName: "Assexmarkets",
    images: [
      {
        url: "/assets/assexxlogo.png",
        width: 1200,
        height: 630,
        alt: "Assexmarkets - Licensed Global Forex Broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@assexmarkets",
    creator: "@assexmarkets",
    images: ["/assets/assexxlogo.png"],
  },
  category: "finance",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD: Organization & Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Assexmarkets",
                url: "https://www.assexmarkets.com",
                logo: "https://www.assexmarkets.com/assets/assexxlogo.png",
                sameAs: [
                  "https://twitter.com/assexmarkets",
                  "https://www.linkedin.com/company/assexmarkets",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.assexmarkets.com",
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${interFont.variable} ${spaceGroteskFont.variable} antialiased`}
      >
        {/* Accessibility: Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Skip to main content
        </a>

        <MenuContextProvider>
          <Header />
          <MobileMenu />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </MenuContextProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-592679137"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-592679137');
          `}
        </Script>

        {/* Zoho SalesIQ */}
        <Script id="zoho-init" strategy="beforeInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zoho.com/widget?wc=siq97000700e5d0b31e9ee720e4a24a79a0f46645be67d2ca5ade4cdbca3a41edd1"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
