import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "Add your business phone number",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Add your business email",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Add your business address",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Add your working hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
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

        {/* Contact Information */}
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

                    <p className="text-sm leading-6 text-gray-600">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
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

              <p className="leading-8 text-gray-600">
                Our contact information can also be used to reach the
                business directly.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
              <h3 className="mb-7 text-2xl font-bold text-[#142d4e]">
                Send an Enquiry
              </h3>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Enquiry Type
                  </label>

                  <select
                    id="subject"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>
                    <option value="contracting">Contracting</option>
                    <option value="supply">Supply</option>
                    <option value="project">Project Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600"
                  />
                </div>

                <button
                  type="button"
                  disabled
                  className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white opacity-70"
                >
                  <Send size={18} />
                  Form Setup Pending
                </button>

                <p className="text-xs leading-5 text-gray-500">
                  This is currently a visual form. Message submission will
                  be enabled after connecting a backend.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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