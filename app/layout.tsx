import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Effred | Business Automation & Cloud Solutions",
  description:
    "Effred Technology - Automate. Accelerate. Achieve. Enterprise automation, cloud integration, software development, and consulting services.",
  icons: {
    icon: "/logo.png", // or "/favicon.png" if you use PNG
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
