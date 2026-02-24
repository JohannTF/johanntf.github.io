import { cn } from "../../lib/utils";

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionContainer({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-20 px-6", className)}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm text-text-secondary">{subtitle}</p>
            )}
            <div className="mt-4 w-12 h-[2px] bg-text-primary" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
