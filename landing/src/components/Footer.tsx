import Image from "next/image";

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/assets/img/nexogeny.svg"
              alt="Nexogeny"
              width={121}
              height={37}
            />
            <p className="mt-4 text-sm text-blue-200/60 leading-relaxed">
              Empowering innovation across the USA and Azerbaijan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-blue-200/60">
              <li>
                1209 Mountain Road PL NE #5348
                <br />
                Albuquerque, NM, 87110, USA
              </li>
              <li>
                <a
                  href="tel:+119293765030"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 (192) 93765030
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nexogeny.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@nexogeny.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200/40">
            &copy; {new Date().getFullYear()} Nexogeny, LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-200/40">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
