import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { MenuContextProvider } from "@/context/MobileMenuContext";
import MobileMenu from "@/components/MobileMenu";

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
        url: "https://assexmarkets.com/assexxlogo.webp",
        width: 1200,
        height: 630,
        alt: "Assexmarkets preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Assexmarkets Global - Ultra fast & precise execution | Forex Broker",
    description:
      "ASM (Assexmarkets) is licensed global broker, providing trading services & facilities to both retail & institutional traders",
    images: [
      {
        url: "https://assexmarkets.com/assexxlogo.webp",
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
