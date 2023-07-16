import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vastu Canva - Coming soon",
  description:
    "VastuCanva.com is a premier online marketplace that specializes in Vastu-inspired art. Their collection features a diverse range of canvas art and paintings, carefully designed to align with the principles of Vastu Shastra. With their thoughtfully curated artworks, they aim to create an atmosphere of serenity, prosperity, and well-being in your home or office. ",
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
