import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Topale — UI/UX Designer",
  description:
    "I design clean, intuitive digital experiences — where form follows function and every pixel has a purpose.",
  keywords: ["UI Design", "UX Design", "Product Design", "Figma", "Portfolio"],
  authors: [{ name: "Krishna Topale" }],
  openGraph: {
    title: "Krishna Topale — UI/UX Designer",
    description: "I design clean, intuitive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-body bg-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
