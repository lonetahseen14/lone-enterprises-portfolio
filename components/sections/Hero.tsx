import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#142d4e]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#142d4e] via-[#193b60] to-[#10243d]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">

        <div className="text-white">
          <p className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-wider text-green-300">
            CONTRACTOR & SUPPLIER
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Building Trust.
            <span className="block text-green-400">
              Delivering Excellence.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            LONE ENTERPRISES is committed to providing reliable
            contracting and supply solutions with a focus on
            quality, professionalism and customer satisfaction.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-md bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Discover Our Company
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#142d4e]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-full border border-white/20 bg-white/5 p-12 backdrop-blur-sm md:h-96 md:w-96">
            <Image
              src="/logo.png"
              alt="LONE ENTERPRISES"
              width={280}
              height={280}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}