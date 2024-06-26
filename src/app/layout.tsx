import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gilberto Arellano",
  description: "Gilberto Arellano Lopez Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className} leading-relaxed antialiased selection:bg-emerald-400 selection:text-emerald-900">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
