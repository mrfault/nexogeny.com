import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexogeny.com"),
  title: "Nexogeny — Empowering Startups to Innovate and Grow",
  description:
    "Nexogeny specializes in turning ideas into successful startups with cutting-edge solutions in software development, AI, web design, and mobile applications.",
  keywords:
    "startup studio, software development, AI, machine learning, web design, mobile apps, digital transformation, USA, Azerbaijan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexogeny — Empowering Startups to Innovate and Grow",
    description:
      "Cutting-edge solutions in software development, AI, web design, and mobile applications.",
    url: "https://nexogeny.com",
    siteName: "Nexogeny",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexogeny — Empowering Startups to Innovate and Grow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexogeny — Empowering Startups to Innovate and Grow",
    description:
      "Cutting-edge solutions in software development, AI, web design, and mobile applications.",
    images: ["/assets/img/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
