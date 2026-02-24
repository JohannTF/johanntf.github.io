import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Badge({ children, active = false, onClick, className }: BadgeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 cursor-pointer",
        active
          ? "bg-text-primary text-bg-primary border-text-primary"
          : "bg-surface text-text-primary border-border-primary hover:bg-bg-secondary",
        className
      )}
    >
      {children}
    </button>
  );
}
