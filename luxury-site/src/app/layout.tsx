import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "K — House of Opulence",
  description:
    "Step inside K — the house of god-tier grandeur, where visionary design, bespoke craftsmanship, and immersive experiences converge for the elite few.",
  metadataBase: new URL("https://agentic-62a76316.vercel.app"),
  keywords: [
    "Luxury",
    "Exclusive experiences",
    "Premium design studio",
    "Ultra high-end brand",
    "K Brand",
  ],
  openGraph: {
    title: "K — House of Opulence",
    description:
      "An ultra-luxurious digital showcase for the world's most discerning tastemakers.",
    url: "https://agentic-62a76316.vercel.app",
    siteName: "K — House of Opulence",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "K — House of Opulence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K — House of Opulence",
    description:
      "The definitive destination for ultra-luxurious digital experiences.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
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
        className={`${display.variable} ${body.variable} antialiased lux-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
