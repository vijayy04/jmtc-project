import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import contactImg from "@/assets/contact.jpg";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MJTC — Request a Quote in Bahrain" },
      {
        name: "description",
        content:
          "Talk to MJTC about engineering, contracting or industrial supply. Based in the Kingdom of Bahrain.",
      },
      { property: "og:title", content: "Contact MJTC" },
      {
        property: "og:description",
        content: "Request a quote or speak with our engineering team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's talk about your project.</>}
        intro="Tell us about your scope, timeline and site. We'll come back with the right team, materials and delivery plan."
      />

      <section className="relative bg-background py-24 md:py-32">
        <div className="container-x mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-5 rounded-sm border border-border bg-surface p-8 md:p-12"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
            </div>
            <Field label="Subject" name="subject" />
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Project details
              </span>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
            </label>
            <div className="pt-2">
              <button
                type="submit"
                disabled={sent}
                className="group inline-flex min-h-11 w-auto max-w-full items-center justify-center gap-2 self-start rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-accent transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-default disabled:opacity-80 disabled:hover:translate-y-0"
              >
                {sent ? "Message sent — thank you" : "Send Request"}
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={contactImg}
                alt="Bahrain skyline"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Head Office
                </div>
                <div className="mt-2 font-display text-2xl font-semibold">
                  Muharraq, Bahrain
                </div>
              </div>
            </div>

            <div className="grid gap-1 rounded-sm border border-border bg-background p-2">
              <InfoRow icon={Phone} label="Phone" value={company.phone} href={`tel:${company.phone.replace(/\s/g, "")}`} />
              <InfoRow icon={Phone} label="Phone (Alt)" value={company.phoneAlt} href={`tel:${company.phoneAlt.replace(/\s/g, "")}`} />
              <InfoRow
                icon={MessageCircle}
                label="WhatsApp"
                value={company.whatsapp}
                href={`https://wa.me/${company.whatsapp.replace(/[^\d]/g, "")}`}
              />
              <InfoRow
                icon={Mail}
                label="Enquiries"
                value={company.emailEnquiries}
                href={`mailto:${company.emailEnquiries}`}
              />
              <InfoRow
                icon={Mail}
                label="Sales"
                value={company.emailSales}
                href={`mailto:${company.emailSales}`}
              />
              <InfoRow
                icon={MapPin}
                label="Address"
                value={company.addressLines.join(", ")}
                multiline
              />
              <InfoRow icon={FileText} label="VAT No." value={company.vatNo} />
              <InfoRow icon={Clock} label="Hours" value={company.hours} />
            </div>
          </motion.aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </label>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  multiline,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  multiline?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-sm p-4 transition-colors hover:bg-surface">
      <div className="grid size-11 shrink-0 place-items-center rounded-sm bg-brand text-white">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          {label}
        </div>
        <div
          className={`text-sm font-medium text-brand ${multiline ? "whitespace-normal leading-relaxed" : "truncate"}`}
        >
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
