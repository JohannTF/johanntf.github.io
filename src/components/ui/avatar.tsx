import { cn } from "../../lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export function Avatar({ src, alt, size = "lg", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "rounded-full overflow-hidden border-2 border-border-primary bg-bg-secondary flex-shrink-0",
        sizeMap[size],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale"
        loading="lazy"
      />
    </div>
  );
}
