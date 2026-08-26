import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, industries, nav, tradingCategories } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-x mx-auto max-w-[1440px] pb-10 pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/70">
              An independent Bahrain company delivering engineering, contracting
              and industrial trading services across the Kingdom and the wider
              GCC.
            </p>
            <div className="mt-8 space-y-3 text-base text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="leading-relaxed">
                  {company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white">
                <Phone className="size-5 shrink-0 text-accent" />
                {company.phone}
              </a>
              <a href={`tel:${company.phoneAlt.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white">
                <Phone className="size-5 shrink-0 text-accent" />
                {company.phoneAlt}
              </a>
              <a href={`mailto:${company.emailEnquiries}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="size-5 shrink-0 text-accent" />
                {company.emailEnquiries}
              </a>
              <a href={`mailto:${company.emailSales}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="size-5 shrink-0 text-accent" />
                {company.emailSales}
              </a>
              <div className="pt-1 text-sm text-white/50">VAT No. {company.vatNo}</div>
            </div>
          </div>

          <FooterCol
            title="Company"
            items={nav.map((n) => ({ label: n.label, to: n.to }))}
          />
          <FooterCol
            title="Services"
            items={[
              { label: "Contracting", to: "/services" },
              { label: "Industrial Trading", to: "/trading" },
              { label: "Maintenance (AMC)", to: "/services" },
              { label: "Commissioning", to: "/services" },
              { label: "Fabrication", to: "/services" },
            ]}
          />
          <FooterCol
            title="Industries"
            items={industries.slice(0, 6).map((i) => ({ label: i, to: "/services" }))}
          />
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-2 text-sm uppercase tracking-[0.18em] text-white/50">
            {tradingCategories.map((c) => (
              <span key={c} className="rounded-full border border-white/10 px-3 py-1.5">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>Founded {company.founded} · {company.country}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <div className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-base text-white/70">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="transition-colors hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
