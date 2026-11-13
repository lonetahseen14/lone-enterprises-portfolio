"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Images,
  X,
  Building2,
  Layers3,
  HardHat,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Manshater Construction Project",
    category: "Construction",
    location: "Manshater",
    description:
      "Photographs documenting the construction progress and concrete structural work at the project site.",
    cover: "/projects/manshater-01.png",
    images: [
      "/projects/manshater-01.png",
      "/projects/manshater-02.png",
    ],
  },
  {
    id: 2,
    title: "Sahi Pora Slab Project",
    category: "Slab Work",
    location: "Sahi Pora",
    description:
      "Site photographs showing slab reinforcement and construction activities.",
    cover: "/projects/sahi-pora-slab.png",
    images: ["/projects/sahi-pora-slab.png"],
  },
  {
    id: 3,
    title: "Building Construction Project",
    category: "Building",
    location: "Jammu & Kashmir",
    description:
      "A two-storey building construction project showcasing structural and exterior work.",
    cover: "/projects/building-project-01.png",
    images: ["/projects/building-project-01.png"],
  },
];

const filters = ["All Projects", "Construction", "Slab Work", "Building"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(0);

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openGallery = (images: string[], index = 0) => {
    setSelectedImages(images);
    setActiveImage(index);
  };

  const closeGallery = () => {
    setSelectedImages([]);
    setActiveImage(0);
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % selectedImages.length);
  };

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + selectedImages.length) % selectedImages.length
    );
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative bg-[#102844] px-6 py-24 text-white md:py-32">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-6xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[4px] text-green-400">
              <span className="h-[2px] w-10 bg-green-400" />
              Our Portfolio
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Projects That Reflect
              <span className="block text-green-400">
                Our Work & Commitment.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Explore our construction activities and project photographs.
              Take a closer look at the work carried out by LONE ENTERPRISES.
            </p>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/15 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">
                  {projects.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm text-gray-400">Project Categories</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  {projects.reduce(
                    (total, project) => total + project.images.length,
                    0
                  )
                    .toString()
                    .padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm text-gray-400">Project Photos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-green-700">
                  Explore Our Work
                </p>

                <h2 className="text-3xl font-extrabold text-[#142d4e] md:text-4xl">
                  Project Gallery
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-gray-500">
                  A collection of photographs from our construction and
                  project activities.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Images size={19} className="text-green-700" />
                {filteredProjects.length} projects displayed
              </div>
            </div>

            {/* Filters */}
            <div className="mb-12 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                    activeFilter === filter
                      ? "bg-[#142d4e] text-white shadow-lg"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-green-600 hover:text-green-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Project Cards */}
            <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Cover */}
                  <button
                    type="button"
                    onClick={() => openGallery(project.images)}
                    className="relative block w-full overflow-hidden bg-gray-100 text-left"
                    aria-label={`Open ${project.title} gallery`}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
                      <span className="rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white">
                        {project.category}
                      </span>

                      <span className="flex items-center gap-2 rounded-full bg-black/50 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                        <Images size={15} />
                        {project.images.length} Photos
                      </span>
                    </div>
                  </button>

                  {/* Details */}
                  <div className="p-7">
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
                      <Building2 size={16} className="text-green-700" />
                      {project.location}
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-[#142d4e] transition group-hover:text-green-700">
                      {project.title}
                    </h3>

                    <p className="mb-7 text-sm leading-7 text-gray-500">
                      {project.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => openGallery(project.images)}
                      className="flex w-full items-center justify-between border-t border-gray-100 pt-5 text-sm font-bold text-[#142d4e] transition hover:text-green-700"
                    >
                      Explore Gallery
                      <ArrowRight
                        size={19}
                        className="transition group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-[#f3f6f9] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-green-700">
                Our Approach
              </p>

              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#142d4e] md:text-4xl">
                Every Project Tells a Story.
              </h2>

              <p className="leading-8 text-gray-600">
                Our portfolio gives visitors a closer look at our project
                activities, site work and construction progress. We aim to
                maintain professional coordination and attention to detail
                throughout our work.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <HardHat size={35} className="mb-5 text-green-700" />
                <h3 className="mb-2 font-bold text-[#142d4e]">
                  Site Activities
                </h3>
                <p className="text-sm leading-6 text-gray-500">
                  A look at work carried out at project sites.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <Layers3 size={35} className="mb-5 text-green-700" />
                <h3 className="mb-2 font-bold text-[#142d4e]">
                  Project Progress
                </h3>
                <p className="text-sm leading-6 text-gray-500">
                  Photographs documenting project activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#142d4e] px-6 py-20 text-center text-white">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-green-400">
            Work With Us
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mb-9 mt-5 max-w-xl leading-8 text-gray-300">
            Contact LONE ENTERPRISES to discuss your project requirements
            and enquiries.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </section>
      </main>

      {/* Fullscreen Image Viewer */}
      {selectedImages.length > 0 && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
          onClick={closeGallery}
        >
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={26} />
          </button>

          {selectedImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImages[activeImage]}
              alt={`Project photograph ${activeImage + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-5 left-0 right-0 text-center text-sm font-medium text-white/80">
            Photo {activeImage + 1} of {selectedImages.length}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}