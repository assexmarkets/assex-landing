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
    "Assexmarkets - The world's first swap free, zero spread and zero commission system broker. Create a live account, Assexmarkets account registration page. Get Started",
  keywords: [
    "assexmarkets",
    "zero spread trading",
    "zero spread forex",
    "no spread broker",
    "zero swap accounts",
    "swap-free trading",
    "islamic swap-free accounts",
    "zero commission trading",
    "commission-free broker",
    "no commission forex",
    "unlimited leverage",
    "high leverage trading",
    "infinite leverage broker",
    "fast payments",
    "quick withdrawals",
    "instant deposits",
    "rapid payouts",
    "cryptocurrency trading",
    "crypto broker",
    "bitcoin trading",
    "ethereum trading",
    "altcoin trading",
    "crypto CFDs",
    "weekend trading",
    "24/7 trading",
    "saturday sunday trading",
    "non-stop markets",
    "forex broker",
    "online trading platform",
    "CFD trading",
    "financial markets",
    "low cost trading",
    "zero fees trading",
    "no hidden fees",
    "leverage trading",
    "margin trading",
    "digital currency trading",
    "crypto forex pairs",
    "weekend crypto trading",
    "fast execution trading",
    "secure trading platform",
    "reliable broker",
    "best zero spread broker",
    "top swap-free broker",
    "unlimited leverage forex",
    "fast payment broker",
    "cryptocurrency exchange",
    "weekend forex trading",
    "zero spread system",
    "zero swap system",
    "zero commission system",
    "trading with unlimited leverage",
    "fast payment systems",
    "crypto currency broker",
    "weekend market access",
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
    title: "Assexmarkets - Licensed Global Forex Broker | Ultra Fast Execution",
    description:
      "Assexmarkets - The world's first swap free, zero spread and zero commission system broker. Create a live account, Assexmarkets account registration page. Get Started",
    images: [
      {
        url: "https://assexmarkets.com/images/logo.svg",
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
    title: "Assexmarkets - Licensed Global Forex Broker | Ultra Fast Execution",
    description:
      "Assexmarkets - The world's first swap free, zero spread and zero commission system broker. Create a live account, Assexmarkets account registration page. Get Started",
    images: ["https://assexmarkets.com/images/logo.svg"],
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
  // Additional SEO optimizations
  other: {
    "theme-color": "#1a1a1a",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#1a1a1a",
    "msapplication-config": "/browserconfig.xml",
  },
};

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        {/* JSON-LD: Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FinancialService",
                "@id": "https://www.assexmarkets.com",
                name: "Assexmarkets",
                alternateName: "Assex Markets",
                url: "https://www.assexmarkets.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://assexmarkets.com/images/logo.svg",
                  width: 300,
                  height: 100,
                },
                description:
                  "The world's first swap free, zero spread and zero commission system broker offering forex, cryptocurrency, and CFD trading with unlimited leverage and fast payments.",
                serviceType: "Forex Broker",
                areaServed: "Worldwide",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Trading Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Zero Spread Forex Trading",
                        description:
                          "Trade forex with zero spreads and zero commissions",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Cryptocurrency Trading",
                        description: "24/7 crypto trading including weekends",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "CFD Trading",
                        description:
                          "Trade commodities and indices with unlimited leverage",
                      },
                    },
                  ],
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: ["English", "French", "German", "Spanish"],
                },
                sameAs: [
                  "https://twitter.com/assexmarkets",
                  "https://www.linkedin.com/company/assexmarkets",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.assexmarkets.com/#website",
                url: "https://www.assexmarkets.com",
                name: "Assexmarkets",
                description:
                  "The world's first swap free, zero spread and zero commission system broker",
                publisher: {
                  "@id": "https://www.assexmarkets.com",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://www.assexmarkets.com/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
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

        {/* Additional Meta Tags for SEO */}
        <meta name="geo.region" content="Global" />
        <meta name="geo.placename" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://salesiq.zoho.com" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//salesiq.zoho.com" />
      </head>
      <body
        className={`${interFont.variable} ${spaceGroteskFont.variable} antialiased`}
      >
        {/* Accessibility: Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
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
