import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
};

type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = AsAnchor | AsButton;

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-7 py-3 text-sm",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-colors duration-300 cursor-pointer group";

  const variants: Record<string, string> = {
    primary:
      "bg-text-primary text-bg-primary border border-text-primary hover:text-text-primary",
    outline:
      "bg-transparent text-text-primary border border-border-primary hover:text-bg-primary",
  };

  const fillVariants: Record<string, string> = {
    primary: "bg-bg-primary",
    outline: "bg-text-primary",
  };

  const className = `${base} ${variants[variant]} ${sizeClasses[size]}`;

  const fill = (
    <span
      className={`absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${fillVariants[variant]}`}
    />
  );

  const content = <span className="relative z-10 flex items-center">{children}</span>;

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as AsAnchor;
    return (
      <a href={href} className={className} {...anchorProps}>
        {fill}
        {content}
      </a>
    );
  }

  const buttonProps = rest as AsButton;
  return (
    <button className={className} {...buttonProps}>
      {fill}
      {content}
    </button>
  );
}
