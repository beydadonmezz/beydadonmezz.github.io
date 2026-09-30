export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="text-accent-fg">({index})</span>
      <span className="h-px w-8 bg-line" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
