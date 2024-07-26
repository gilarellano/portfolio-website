// src/lib/metadata.ts
import type { Metadata, Viewport } from "next";

const siteUrl = process.env.BASE_URL || "http://gilber.to";
const imageUrl = process.env.BASE_IMAGE_URL || "http://gilber.to/opengraph.png";

export const metadataConfig: Metadata = {
  title: {
    default: "Gilberto Arellano",
    template: "%s | Gilberto Arellano Portfolio",
  },
  description:
    "Explore the projects, skills, and professional journey of Gilberto Arellano, a dedicated software engineer specializing in web development and software solutions.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Gilberto Arellano | Software Engineer Portfolio",
    description:
      "Explore the projects, skills, and professional journey of Gilberto Arellano, a dedicated software engineer specializing in web development and software solutions.",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Gilberto Arellano Portfolio Preview",
      },
    ],
    siteName: "Gilberto Arellano Portfolio",
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@yourtwitterhandle',
  //   creator: '@yourtwitterhandle',
  //   title: 'Gilberto Arellano | Software Engineer Portfolio',
  //   description: 'Explore the projects, skills, and professional journey of Gilberto Arellano, a dedicated software engineer specializing in web development and software solutions.',
  //   images: [imageUrl],
  // },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "portfolio",
    "web developer",
    "software engineer",
    "projects",
    "skills",
    "frontend developer",
    "backend developer",
    "React",
    "TypeScript",
    "Machine Learning",
  ],
  authors: [{ name: "Gilberto Arellano Lopez" }],
  alternates: {
    canonical: siteUrl,
  },
};

export const viewportConfig: Viewport = {
  themeColor: "#202020",
  width: "device-width",
  initialScale: 1,
};
