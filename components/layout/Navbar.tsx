import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Lone Enterprises Logo"
            width={58}
            height={58}
            className="object-contain"
          />

          <div>
            <h1 className="text-xl font-bold tracking-wide text-[#142d4e]">
              LONE ENTERPRISES
            </h1>
            <p className="text-xs tracking-wider text-slate-500">
              CONTRACTOR & SUPPLIER
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-[#142d4e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}