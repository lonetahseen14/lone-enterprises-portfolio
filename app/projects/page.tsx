import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Building2,
  Clock,
  CheckCircle2,
  Package,
  ArrowRight,
} from "lucide-react";

const projectCategories = [
  {
    icon: CheckCircle2,
    number: "01",
    title: "Completed Projects",
    description:
      "Explore projects successfully completed by LONE ENTERPRISES.",
    status: "Completed",
  },
  {
    icon: Clock,
    number: "02",
    title: "Ongoing Projects",
    description:
      "Discover our ongoing work and current project activities.",
    status: "In Progress",
  },
  {
    icon: Package,
    number: "03",
    title: "Supply Projects",
    description:
      "An overview of our supply-related work and delivery activities.",
    status: "Supply",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#142d4e] px-6 py-24 text-center text-white">
          <p className="mb-4 font-semibold uppercase tracking-[3px] text-green-400">
            Our Work
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            Our Projects
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
            A look at our project activities, contracting work and supply
            operations.
          </p>
        </section>

        {/* Introduction */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                Project Portfolio
              </p>

              <h2 className="mb-5 text-3xl font-bold text-[#142d4e] md:text-4xl">
                Our Work Reflects Our Commitment
              </h2>

              <p className="leading-8 text-gray-600">
                Every project represents an opportunity to demonstrate
                professionalism, coordination and commitment to quality.
                Explore the different categories of work undertaken by
                LONE ENTERPRISES.
              </p>
            </div>

            {/* Project Categories */}
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projectCategories.map((project) => {
                const Icon = project.icon;

                return (
                  <div
                    key={project.number}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-52 items-center justify-center bg-[#f3f6f9]">
                      <Icon size={76} className="text-[#1d4772]" />
                    </div>

                    <div className="p-8">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-sm font-bold text-green-700">
                          PROJECT CATEGORY {project.number}
                        </span>

                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="mb-4 text-xl font-bold text-[#142d4e]">
                        {project.title}
                      </h3>

                      <p className="leading-7 text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Gallery Placeholder */}
        <section className="bg-[#f3f6f9] px-6 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <Building2
              size={48}
              className="mx-auto mb-5 text-green-700"
            />

            <h2 className="mb-4 text-3xl font-bold text-[#142d4e]">
              Project Gallery
            </h2>

            <p className="mx-auto max-w-xl leading-7 text-gray-600">
              Project photographs, descriptions and completion details will
              be showcased here.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#142d4e] px-6 py-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-7 text-gray-300">
            Get in touch with LONE ENTERPRISES to discuss your project
            requirements.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}