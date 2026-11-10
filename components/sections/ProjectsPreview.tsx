import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

const projects = [
  {
    title: "Completed Projects",
    status: "Completed",
    description:
      "A showcase of successfully completed company projects.",
  },
  {
    title: "Ongoing Projects",
    status: "In Progress",
    description:
      "Projects currently being executed by LONE ENTERPRISES.",
  },
  {
    title: "Supply Projects",
    status: "Supply",
    description:
      "A record of supply assignments and delivered materials.",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[3px] text-green-700">
            Our Work
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#142d4e] md:text-5xl">
            Projects & Achievements
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Explore our project portfolio and learn more about
            the work carried out by our company.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <Building2 size={28} />
              </div>

              <span className="mt-7 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                {project.status}
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#142d4e]">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {project.description}
              </p>

              <Link
                href="/projects"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-[#142d4e]"
              >
                View Projects <ArrowRight size={17} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}