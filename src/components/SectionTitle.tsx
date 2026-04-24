type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-pharmacy-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold text-medical-navy sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}
