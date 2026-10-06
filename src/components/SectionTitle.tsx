export function SectionTitle({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="scroll-reveal">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        <span className="text-accent">{index}</span> — {label}
      </p>
      <h2 className="scroll-title mt-6 max-w-3xl text-balance font-serif text-4xl leading-[1.05] font-medium tracking-tight sm:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
      <div className="rule mt-12" />
    </div>
  );
}
