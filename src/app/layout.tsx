import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Store",
  description: "The best online store on the internet.",
  openGraph: {
    title: "Online Store",
    url: "https://online-store.com",
    siteName: "Online Store",
    type: "website",
    images: [
      {
        url: "https://online-store.com/og-img.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
