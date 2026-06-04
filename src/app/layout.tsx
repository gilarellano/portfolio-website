import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metadataConfig, viewportConfig } from "@/lib/metadata";
import GradientBackground from "@/components/GradientBackground";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = metadataConfig;
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} leading-relaxed antialiased selection:bg-emerald-400 selection:text-emerald-900`}
      >
        <GradientBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
