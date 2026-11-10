import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div className="relative flex min-h-[380px] items-center justify-center rounded-2xl bg-slate-100 p-12">
          <Image
            src="/logo.png"
            alt="LONE ENTERPRISES"
            width={260}
            height={260}
            className="object-contain"
          />
        </div>

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[3px] text-green-700">
            About Our Company
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#142d4e] md:text-5xl">
            Who We Are
          </h2>

          <div className="mt-6 h-1 w-20 rounded bg-green-600" />

          <p className="mt-7 leading-8 text-slate-600">
            LONE ENTERPRISES is a contracting and supply business
            focused on delivering dependable services and
            professional solutions.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our company portfolio highlights our background,
            leadership, services, projects and commitment to
            quality.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-md bg-[#142d4e] px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Learn More About Us
          </Link>
        </div>

      </div>
    </section>
  );
}