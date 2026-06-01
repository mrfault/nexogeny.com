import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexogeny — Empowering Startups to Innovate and Grow",
  description:
    "Nexogeny specializes in turning ideas into successful startups with cutting-edge solutions in software development, AI, web design, and mobile applications.",
  keywords:
    "startup studio, software development, AI, machine learning, web design, mobile apps, digital transformation, USA, Azerbaijan",
  openGraph: {
    title: "Nexogeny — Empowering Startups to Innovate and Grow",
    description:
      "Cutting-edge solutions in software development, AI, web design, and mobile applications.",
    url: "https://nexogeny.com",
    siteName: "Nexogeny",
    type: "website",
  },
  icons: {
    icon: "/assets/img/fav/favicon-32x32.png",
    apple: "/assets/img/fav/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
