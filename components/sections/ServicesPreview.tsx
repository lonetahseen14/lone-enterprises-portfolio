import Link from "next/link";
import {
  Building2,
  PackageCheck,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Contracting Services",
    description:
      "Professional contracting solutions focused on quality and reliable execution.",
  },
  {
    icon: PackageCheck,
    title: "Supply Services",
    description:
      "Supply solutions designed to meet client requirements and specifications.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Organized project coordination with attention to planning and delivery.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[3px] text-green-700">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#142d4e] md:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Explore the core areas of our contracting and supply business.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green-50 text-green-700">
                  <Icon size={28} />
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#142d4e]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-[#142d4e]"
                >
                  Explore Service <ArrowRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}