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
    default: "Assexmarkets - Global Forex Broker | Fast Execution",
    template: "%s | Assexmarkets",
  },
  description:
    "Experience Forex Trading with Assexmarkets: Enjoy Swap-Free, Zero Spread, Zero Commission, and Unlimited Leverage for Maximum Flexibility.",
  keywords: [
    "assexmarkets",
    "zero spread trading",
    "swap-free trading",
    "commission-free trading",
    "high leverage trading",
    "fast withdrawals",
    "instant deposits",
    "weekend trading",
    "24/7 trading",
    "forex broker",
    "online trading platform",
    "low cost trading",
    "secure trading platform",
    "reliable broker",
    "crypto trading pairs",
    "mobile trading",
    "live account trading",
    "demo trading",
    "24/7 customer support",
  ],
  authors: [{ name: "Assexmarkets" }],
  creator: "Assexmarkets",
  publisher: "Assexmarkets",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://assexmarkets.com",
    siteName: "Assexmarkets",
    title: "Assexmarkets - Licensed Global Forex Broker | Ultra Fast Execution",
    description:
      "Assexmarkets: Swap-Free, Zero Spread, Zero Commission and unlimited leverage Forex Trading",
    images: [
      {
        url: "/assets/assexxlogo.png", // ✅ Local logo
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
      "Assexmarkets: Swap-Free, Zero Spread, Zero Commission and unlimited leverage Forex Trading",
    images: ["/assets/assexxlogo.png"], // ✅ Local logo
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
        <title>Assexmarkets - Global Forex Broker | Fast Execution</title>
        <meta
          name="description"
          content="Experience Forex Trading with Assexmarkets: Enjoy Swap-Free, Zero Spread, Zero Commission, and Unlimited Leverage for Maximum Flexibility."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="assexmarkets, zero spread trading, swap-free trading, commission-free trading, high leverage trading, fast withdrawals, instant deposits, weekend trading, 24/7 trading, forex broker, online trading platform, low cost trading, secure trading platform, reliable broker, crypto trading pairs, mobile trading, live account trading, demo trading, 24/7 customer support"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assexmarkets.com" />
        <meta property="og:image" content="/assets/assexxlogo.png" />

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
                  url: "https://assexmarkets.com/assets/assexxlogo.png", // ✅ Absolute path for structured data
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

        {/* Additional SEO + Performance */}
        <meta name="geo.region" content="Global" />
        <meta name="geo.placename" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://salesiq.zoho.com" />

        {/* DNS Prefetch */}
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
