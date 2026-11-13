import type { Metadata } from "next";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const SITE_URL = "https://loneenterpriseskup.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "LONE ENTERPRISES | Contractor & Supplier in Kupwara",
    template: "%s | LONE ENTERPRISES",
  },

  description:
    "LONE ENTERPRISES provides construction, civil works, government contracting and material supply services in Kupwara, Jammu and Kashmir.",

  keywords: [
    "LONE ENTERPRISES",
    "LONE ENTERPRISES Kupwara",
    "lone enterprises",
    "Lone Enterprises",
    "Contractor & Supplier in Kupwara",
    "Contractor in Kupwara",
    "Construction Company in Kupwara",
    "Government Contractor in Kupwara",
    "Civil Works Contractor",
    "Material Supplier in Kupwara",
    "Contractor in Jammu and Kashmir",
  ],

  applicationName: "LONE ENTERPRISES",
  creator: "LONE ENTERPRISES",
  publisher: "LONE ENTERPRISES",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "LONE ENTERPRISES | Contractor & Supplier",
    description:
      "Explore construction, civil works, government contracting and material supply services.",
    url: SITE_URL,
    siteName: "LONE ENTERPRISES",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LONE ENTERPRISES",
    description:
      "Construction, contracting and material supply services in Kupwara.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}