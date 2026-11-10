import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Building2,
  PackageCheck,
  ClipboardList,
  HardHat,
  Truck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Contracting Services",
    description:
      "Contracting solutions focused on professional execution, quality standards and responsible project delivery.",
    points: [
      "Contract-based work",
      "Project execution",
      "Quality-focused approach",
    ],
  },
  {
    icon: PackageCheck,
    number: "02",
    title: "Supply Services",
    description:
      "Supply solutions designed to meet client requirements through organised procurement and dependable coordination.",
    points: [
      "Material and product supply",
      "Procurement coordination",
      "Requirement-based solutions",
    ],
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Project Management",
    description:
      "Organised project coordination with attention to planning, communication and work progress.",
    points: [
      "Work coordination",
      "Progress monitoring",
      "Professional communication",
    ],
  },
  {
    icon: HardHat,
    number: "04",
    title: "Site Operations",
    description:
      "Site-level coordination and operational support to help maintain organised project activities.",
    points: [
      "Site coordination",
      "Work supervision support",
      "Operational planning",
    ],
  },
  {
    icon: Truck,
    number: "05",
    title: "Logistics & Delivery",
    description:
      "Coordination of supply and delivery activities according to project and client requirements.",
    points: [
      "Delivery coordination",
      "Supply scheduling",
      "Logistics support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#142d4e] px-6 py-24 text-center text-white">
          <p className="mb-4 font-semibold uppercase tracking-[3px] text-green-400">
            What We Do
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            Our Services
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
            Contracting and supply solutions focused on professionalism,
            reliability and quality.
          </p>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                Our Expertise
              </p>

              <h2 className="mb-5 text-3xl font-bold text-[#142d4e] md:text-4xl">
                Solutions That Support Your Requirements
              </h2>

              <p className="leading-8 text-gray-600">
                LONE ENTERPRISES aims to provide organised contracting and
                supply solutions based on client requirements and project
                needs.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <div className="rounded-xl bg-green-50 p-4">
                        <Icon size={32} className="text-green-700" />
                      </div>

                      <span className="text-3xl font-bold text-gray-200">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-[#142d4e]">
                      {service.title}
                    </h3>

                    <p className="mb-6 text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <span className="h-2 w-2 rounded-full bg-green-600" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f6f9] px-6 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold text-[#142d4e]">
              Have a Project or Requirement?
            </h2>

            <p className="mb-8 leading-7 text-gray-600">
              Contact our team to discuss your requirements and potential
              business opportunities.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-7 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}