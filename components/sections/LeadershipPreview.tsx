import Image from "next/image";
import Link from "next/link";

const leaders = [
  {
    name: "M/s Tariq Ahmad Lone",
    role: "Owner / Founder",
    image: "/team/owner.jpg",
  },
  {
    name: "M/s Reyaz Ahmad Lone",
    role: "Site Incharge",
    image: "/team/site-incharge.jpg",
  },
];

export default function LeadershipPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[3px] text-green-700">
            Our People
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#142d4e] md:text-5xl">
            Leadership & Management
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Meet the people responsible for guiding the company
            and coordinating its operations.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-10 md:grid-cols-2">
          {leaders.map((leader) => (
            <div
              key={leader.role}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-72 bg-slate-100">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-[#142d4e]">
                  {leader.name}
                </h3>

                <p className="mt-2 font-medium text-green-700">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-block rounded-md bg-[#142d4e] px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Meet Our Team
          </Link>
        </div>

      </div>
    </section>
  );
}