import type { Metadata } from "next";
import ProjectsGallery from "./ProjectsGallery";

export const metadata: Metadata = {
  title: "Construction Projects in Kupwara | LONE ENTERPRISES",
  description:
    "Explore construction project photographs and site activities by LONE ENTERPRISES, based in Awoora, Kupwara, Jammu and Kashmir. View building construction, slab work and project progress.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | LONE ENTERPRISES",
    description:
      "Explore construction activities, building work and project photographs by LONE ENTERPRISES in Jammu and Kashmir.",
    url: "/projects",
    siteName: "LONE ENTERPRISES",
    locale: "en_IN",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}