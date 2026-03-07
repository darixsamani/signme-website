import { cn } from "../../utils/cn";

export const Button = ({ className, variant = "primary", size = "md", children, ...props }) => {
  const variants = {
    primary: "bg-premium-gradient text-white hover:opacity-90 shadow-lg",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary/5",
    accent: "bg-accent text-white hover:bg-accent/90",
    ghost: "bg-transparent text-midnight hover:bg-gray-100"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};