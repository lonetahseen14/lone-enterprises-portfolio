import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://loneenterpriseskup.netlify.app";

  const pages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/team",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}