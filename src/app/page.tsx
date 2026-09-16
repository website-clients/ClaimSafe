import Link from "next/link";
import { Container } from "@/components/Container";
import { IconCheck } from "@/components/icons";

const services = [
  {
    title: "Warranty Claim Management",
    description:
      "We handle every step of the warranty claim process — from verification and documentation to submission and follow-up — ensuring accuracy, compliance, and faster payments.",
  },
  {
    title: "Consulting",
    description:
      "We provide expert guidance to help dealerships improve their warranty processes, reduce rejections, and maximize factory reimbursements through proven best practices.",
  },
  {
    title: "Schedule Reconciliation",
    description:
      "We review and align your warranty schedules with manufacturer payments, identifying discrepancies and ensuring your financial records stay accurate and transparent.",
  },
];

const whyChoose = [
  "Fast claim submissions and approvals",
  "Reduced rejections and chargebacks",
  "More recovered warranty revenue",
  "Less workload for advisors and managers",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <Container className="grid gap-10 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
            Gestion ClaimSafe Inc.
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Streamlining Warranty Claims for Dealerships
          </h1>
          <ul className="flex flex-col gap-3 text-base text-primary-foreground/85 sm:flex-row sm:gap-8 sm:text-lg">
            <li className="flex items-center gap-2">
              <IconCheck className="h-5 w-5 shrink-0 text-accent" />
              Maximizes warranty revenue
            </li>
            <li className="flex items-center gap-2">
              <IconCheck className="h-5 w-5 shrink-0 text-accent" />
              Full service administration
            </li>
            <li className="flex items-center gap-2">
              <IconCheck className="h-5 w-5 shrink-0 text-accent" />
              Trusted by dealerships across Canada
            </li>
          </ul>
          <div>
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-colors duration-200 hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
            >
              Book Now
            </Link>
          </div>
        </Container>
      </section>

      {/* About intro */}
      <section className="border-b border-border bg-background py-20 sm:py-28">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Warranty Management Services · About Us
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            &ldquo;Your Warranty Partner, Not Just An Administrator.&rdquo;
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-secondary sm:text-lg">
            <p>
              Gestion ClaimSafe Inc. was founded with one clear mission: to help dealerships reclaim time,
              revenue, and peace of mind through expert warranty management. After years of working inside
              dealerships and seeing firsthand how much money and efficiency were lost to incomplete or
              rejected claims, our founder, Moe Naji, decided to change the game.
            </p>
            <p>
              ClaimSafe was created to bring structure, transparency, and results to dealerships. What began
              with 3 dealership partners has grown to 18 locations in just one year, driven by results,
              referrals, and long-term trust.
            </p>
            <p>
              Today, ClaimSafe partners with leading Chrysler, Dodge, Jeep, Ram, Fiat, and Alfa Romeo
              dealerships across Canada and beyond — handling everything from claim submissions and digital
              imaging (DI) approvals, WAC negotiations, VOR escalations, and accounting.
            </p>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-primary">Our approach is simple:</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Maximize warranty recovery", "Improve service department efficiency", "Reduce chargebacks"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground"
                >
                  <IconCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                  {item}
                </li>
              ),
            )}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-secondary sm:text-lg">
            At ClaimSafe, we do more than manage claims — we become an extension of your service team.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="border-b border-border bg-muted py-20 sm:py-28">
        <Container>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Warranty Management Services
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="border-b border-border bg-background py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Why Dealerships Choose ClaimSafe
            </h2>
            <p className="mt-5 text-base leading-relaxed text-secondary sm:text-lg">
              We become an extension of your service department — handling warranty operations with speed,
              accuracy, and accountability so your team can stay focused on customers and repairs.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-sm font-medium text-card-foreground"
              >
                <IconCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Improve Your Warranty Operations?
          </h2>
          <Link
            href="/contact"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-colors duration-200 hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
          >
            Request Consultation
          </Link>
        </Container>
      </section>
    </>
  );
}
