import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LONE ENTERPRISES | Contractor & Supplier",
  description:
    "Official portfolio of LONE ENTERPRISES. Explore our company background, leadership, services and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}