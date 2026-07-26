import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 border border-transparent shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]",
      secondary: "bg-indigo-600/20 text-indigo-100 hover:bg-indigo-600/40 border border-indigo-500/30",
      outline: "border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-200",
      ghost: "bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-5 py-2",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
