import React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "bg-white text-black hover:bg-muted",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    ghost: "bg-transparent text-black hover:bg-muted",
    link: "underline-offset-4 hover:underline text-primary",
    calculator: "bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg font-semibold",
  },
  size: {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
    calc: "h-14 w-14 sm:h-16 sm:w-16",
  }
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const variantClasses = buttonVariants.variant[variant];
    const sizeClasses = buttonVariants.size[size];
    
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-none text-sm font-black uppercase tracking-wider font-outfit transition duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none",
          "border-4 border-black shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
          "focus-visible:outline-none bauhaus-focus-ring",
          variantClasses,
          sizeClasses,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }