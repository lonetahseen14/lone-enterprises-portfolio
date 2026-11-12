import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9186277731",
  },
  {
    icon: Mail,
    title: "Email",
    value: "loneenterpriseskup1@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Awoora, Kupwara 193222, Jammu & Kashmir, India",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Saturday: 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  const whatsappLink =
    "https://wa.me/919186277731?text=Hello%20LONE%20ENTERPRISES,%20I%20want%20to%20make%20an%20enquiry.";

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#142d4e] px-6 py-24 text-center text-white">
          <p className="mb-4 font-semibold uppercase tracking-[3px] text-green-400">
            Get in Touch
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
            Have a business enquiry or project requirement? We would like
            to hear from you.
          </p>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                Contact Information
              </p>

              <h2 className="text-3xl font-bold text-[#142d4e] md:text-4xl">
                Let&apos;s Start a Conversation
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                      <Icon size={27} className="text-green-700" />
                    </div>

                    <h3 className="mb-3 font-bold text-[#142d4e]">
                      {item.title}
                    </h3>

                    <p className="break-words text-sm leading-6 text-gray-600">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f6f9] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <MessageSquare size={42} className="mb-6 text-green-700" />

              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
                Business Enquiries
              </p>

              <h2 className="mb-6 text-3xl font-bold text-[#142d4e] md:text-4xl">
                Tell Us About Your Requirements
              </h2>

              <p className="mb-6 leading-8 text-gray-600">
                Whether you have a contracting requirement, supply enquiry
                or project-related question, use the form to share your
                details with us.
              </p>

              <p className="mb-8 leading-8 text-gray-600">
                Our team will review your enquiry and get in touch with you.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 rounded-lg bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={22} />
                Chat with Us on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
              <h3 className="mb-7 text-2xl font-bold text-[#142d4e]">
                Send an Enquiry
              </h3>

              <ContactForm />
            </div>
          </div>
        </section>

        <section className="bg-[#142d4e] px-6 py-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            LONE ENTERPRISES
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-7 text-gray-300">
            We look forward to hearing from you and exploring opportunities
            to work together.
          </p>

          <Link
            href="/"
            className="inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Back to Home
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}