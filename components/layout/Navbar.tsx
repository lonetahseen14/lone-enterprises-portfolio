import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const whatsappLink =
    "https://wa.me/919186277731?text=Hello%20LONE%20ENTERPRISES,%20I%20want%20to%20make%20an%20enquiry.";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">

        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Lone Enterprises Logo"
            width={58}
            height={58}
            className="object-contain"
          />

          <div>
            <h1 className="text-lg font-bold tracking-wide text-[#142d4e] sm:text-xl">
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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex items-center gap-2 rounded-md bg-green-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:px-4"
          >
            <MessageCircle size={19} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="rounded-md bg-[#142d4e] px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:px-5"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}