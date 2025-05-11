import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { MenuContextProvider } from "@/context/MobileMenuContext";
import MobileMenu from "@/components/MobileMenu";
import Head from "next/head";

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

export const metadata: Metadata = {
  title: "Assexmarkets Global - Ultra fast & Precise execution | Forex Broker",
  description:
    "ASM (Assexmarkets) is licensed global broker, providing trading services & facilities to both retail and institutional traders",
  openGraph: {
    title:
      "Assexmarkets Global - Ultra fast & Precise execution | Forex Broker",
    description:
      "ASM (Assexmarkets) is licensed global broker, providing trading services & facilities to both retail and institutional traders",
    url: "https://www.assexmarkets.com",
    siteName: "Assexmarkets",
    images: [
      {
        url: "/assets/assexxlogo.png",
        width: 1200,
        height: 630,
        alt: "Assexmarkets preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Assexmarkets Global - Ultra fast & precise execution | Forex Broker",
    description:
      "ASM (Assexmarkets) is licensed global broker, providing trading services & facilities to both retail & institutional traders",
    images: [
      {
        url: "/assets/assexxlogo.png",
        alt: "Assexmarkets logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-512x512.png"
          sizes="512x512"
        />
        <meta
          name="googlebot"
          content="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image" content="/assets/assexxlogo.png" />
        <meta name="next-size-adjust" /> */}
      </Head>
      <body
        className={`${interFont.variable} ${spaceGroteskFont.variable} antialiased`}
      >
        <MenuContextProvider>
          <>
            <Header />
            <MobileMenu />
            {children}
            <Footer />
          </>
        </MenuContextProvider>
      </body>
    </html>
  );
}
