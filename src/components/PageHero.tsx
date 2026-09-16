import { Container } from "./Container";

export function PageHero({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <section className="border-b border-border bg-primary py-20 text-primary-foreground sm:py-28">
      <Container>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      </Container>
    </section>
  );
}
