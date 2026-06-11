import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metadataConfig, viewportConfig } from "@/lib/metadata";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const metadata = metadataConfig;
export const viewport = viewportConfig;

// Apply the saved theme before first paint to avoid a flash (dark is default).
const themeInitScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${jetbrainsMono.variable} leading-relaxed antialiased selection:bg-emerald-400 selection:text-emerald-900`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
