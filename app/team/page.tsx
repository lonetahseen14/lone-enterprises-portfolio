import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Users,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const teamMembers = [
  {
    role: "Owner / Founder",
    name: "M/S Tariq Ahmad Lone",
    image: "/team/owner.jpg",
    description:
      "Responsible for the company's overall direction, business decisions and development.",
  },
  {
    role: "Site Incharge",
    name: "M/s Reyaz Ahmad Lone",
    image: "/team/site-incharge.jpg",
    description:
      "Responsible for site coordination, work supervision and daily operations.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-[#142d4e] px-6 py-24 text-center text-white">
          <p className="mb-4 font-semibold uppercase tracking-[3px] text-green-400">
            The People Behind Our Work
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            Meet Our Team
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
            A team built on responsibility, coordination and a shared
            commitment to professional work.
          </p>
        </section>

        {/* Introduction */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
              Our People
            </p>

            <h2 className="mb-5 text-3xl font-bold text-[#142d4e] md:text-4xl">
              People Make the Difference
            </h2>

            <p className="leading-8 text-gray-600">
              The people behind LONE ENTERPRISES play an important role in
              managing business activities, coordinating work and supporting
              project requirements.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-[#f3f6f9] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                Leadership & Management
              </p>

              <h2 className="text-3xl font-bold text-[#142d4e] md:text-4xl">
                Meet Our Leadership
              </h2>
            </div>

            <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
              {teamMembers.map((member) => (
                <div
                  key={member.role}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Profile Image */}
                  <div className="bg-gradient-to-b from-[#eaf2f8] to-white px-8 pt-10">
                    <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-8 text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
                      {member.role}
                    </p>

                    <h3 className="mb-4 text-2xl font-bold text-[#142d4e]">
                      {member.name}
                    </h3>

                    <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-green-600" />

                    <p className="text-sm leading-7 text-gray-600">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workforce Section */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-2xl bg-[#142d4e] p-10 text-center text-white md:p-14">
            <Users size={48} className="mx-auto mb-6 text-green-400" />

            <h2 className="mb-5 text-3xl font-bold">
              Our Workforce
            </h2>

            <p className="mx-auto max-w-2xl leading-8 text-gray-300">
              Our workforce contributes to project activities, coordination
              and service delivery. Every team member plays a role in
              supporting the company's operations.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#f3f6f9] px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#142d4e]">
            Interested in Working With Us?
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-7 text-gray-600">
            Contact LONE ENTERPRISES to discuss your requirements and
            opportunities for collaboration.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}