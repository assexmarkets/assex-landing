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
  weight: "variable",
});

const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.assexmarkets.com",
    siteName: "Assexmarkets",
    title: "Assexmarkets - Licensed Global Forex Broker | Ultra Fast Execution",
    description:
      "Trade forex, commodities & indices with Assexmarkets - a licensed global broker offering ultra-fast execution, competitive spreads, and professional trading platforms.",
    images: [
      {
        url: "/assets/assexxlogo.png",
        width: 1200,
        height: 630,
        alt: "Assexmarkets - Licensed Global Forex Broker",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@assexmarkets",
    creator: "@assexmarkets",
    title: "Assexmarkets - Licensed Global Forex Broker | Ultra Fast Execution",
    description:
      "Trade forex, commodities & indices with Assexmarkets - a licensed global broker offering ultra-fast execution and competitive spreads.",
    images: {
      url: "/assets/assexxlogo.png",
      alt: "Assexmarkets - Licensed Global Forex Broker",
      width: 1200,
      height: 630,
    },
  },
  alternates: {
    canonical: "https://www.assexmarkets.com",
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
  other: {
    "msapplication-TileColor": "#1a1a1a",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
};

// Viewport settings
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
      <body
        className={`${interFont.variable} ${spaceGroteskFont.variable} antialiased`}
      >
        <MenuContextProvider>
          <Header />
          <MobileMenu />
          {children}
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
            gtag('config', 'AW-592679137', {
              page_title: document.title,
              page_location: window.location.href,
            });
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
