import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Award,
  Building2,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe in transparency, honesty and maintaining professional standards in every business relationship.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We aim to maintain quality standards across our contracting and supply activities.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We value collaboration, responsibility and the contribution of every team member.",
  },
  {
    icon: Building2,
    title: "Commitment",
    description:
      "We are committed to responsible work practices and dependable service delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="bg-[#142d4e] px-6 py-24 text-center text-white">
          <p className="mb-4 font-semibold uppercase tracking-[3px] text-green-400">
            Get to Know Us
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            About LONE ENTERPRISES
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
            Your trusted partner for contracting and supply solutions.
          </p>
        </section>

        {/* Company Introduction */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center rounded-2xl bg-[#f3f6f9] p-10">
              <Image
                src="/logo.png"
                alt="LONE ENTERPRISES Logo"
                width={350}
                height={350}
                className="h-auto w-full max-w-[300px] object-contain"
              />
            </div>

            <div>
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                Who We Are
              </p>

              <h2 className="mb-6 text-3xl font-bold text-[#142d4e] md:text-4xl">
                Building Relationships Through Reliable Services
              </h2>

              <p className="mb-5 leading-8 text-gray-600">
                LONE ENTERPRISES is a contracting and supply business focused
                on providing dependable services and solutions. We aim to
                build lasting professional relationships through responsible
                work practices and a commitment to quality.
              </p>

              <p className="leading-8 text-gray-600">
                Our approach is centred on professionalism, teamwork and
                delivering value to the clients and organisations we work with.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-[#f3f6f9] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-9 shadow-sm">
              <Target size={42} className="mb-5 text-green-700" />

              <h2 className="mb-4 text-2xl font-bold text-[#142d4e]">
                Our Mission
              </h2>

              <p className="leading-8 text-gray-600">
                To provide reliable contracting and supply services while
                maintaining professional standards, quality and responsible
                business practices.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-9 shadow-sm">
              <Eye size={42} className="mb-5 text-green-700" />

              <h2 className="mb-4 text-2xl font-bold text-[#142d4e]">
                Our Vision
              </h2>

              <p className="leading-8 text-gray-600">
                To establish LONE ENTERPRISES as a trusted and respected name
                in the contracting and supply sector through consistent
                performance and professional growth.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                What Guides Us
              </p>

              <h2 className="text-3xl font-bold text-[#142d4e] md:text-4xl">
                Our Core Values
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon size={36} className="mb-5 text-green-700" />

                    <h3 className="mb-3 text-xl font-bold text-[#142d4e]">
                      {value.title}
                    </h3>

                    <p className="text-sm leading-7 text-gray-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#142d4e] px-6 py-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-7 text-gray-300">
            Get in touch with LONE ENTERPRISES to discuss your requirements
            and explore potential business opportunities.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Contact Us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}