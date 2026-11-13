import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#10243d] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="LONE ENTERPRISES"
              width={60}
              height={60}
              className="object-contain"
            />

            <div>
              <h2 className="font-bold tracking-wide">
                LONE ENTERPRISES
              </h2>
              <p className="text-xs text-slate-400">
                CONTRACTOR & SUPPLIER
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
            A company portfolio showcasing our background,
            services, leadership and projects.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <Link href="/about" className="hover:text-green-400">About Us</Link>
            <Link href="/services" className="hover:text-green-400">Services</Link>
            <Link href="/projects" className="hover:text-green-400">Projects</Link>
            <Link href="/team" className="hover:text-green-400">Our Team</Link>
            <Link href="/contact" className="hover:text-green-400">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold">Contact Information</h3>

          <p className="text-sm leading-7 text-slate-300">
           <p> Address: Awoora Kupwara 193222, Jammu & Kashmir, India</p>
            <p>Phone: +91 91862 77731</p>
            <p>Email: loneenterpriseskup1@gmail.com</p>
          </p>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-slate-400">
          © LONE ENTERPRISES. All rights reserved.
        </div>
      </div>
    </footer>
  );
}