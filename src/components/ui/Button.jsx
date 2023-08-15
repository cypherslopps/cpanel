import React, { forwardRef } from 'react';
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";
import { Loader2 } from 'lucide-react';


export const buttonVariants = cva(
    'active:scale-95 inline-flex items-center gap-x-2 justify-center rounded-md text-[.84rem] sm:text-sm font-medium cursor-pointer transition-colors focus:outline-none disabled:opacity-70 disabled:pointer-events-none',
    {
      variants: {
        variant: {
          default:
            'bg-primary-500 text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          secondary:
            'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
          destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
          outline:
            'bg-slate-900 text-white hover:bg-slate-800 border border-slate-200',
          border: 
           `border border-slate-200 text-gray-50 hover:text-gray-900 hover:bg-slate-50`,
          subtle:
            'bg-slate-100 text-slate-900 hover:bg-slate-200',
          "subtle-dark":
            'bg-slate-800 text-slate-100 hover:bg-slate-900',
          ghost:
            'bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent',
          "ghost-dark":
            'bg-transparent hover:bg-gray-700 data-[state=open]:bg-transparent',
          link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
        },
        size: {
          none: "p-0.5 sm:p-1",
          default: 'h-8 sm:h-9 py-2 px-4',
          sm: 'h-7 text-[.82rem] sm:h-8 sm:text-[.98rem] px-3 rounded-md',
          xs: "h-6 text-[.8rem] sm:h-7 sm:text-md px-3 rounded-md",
          lg: 'h-11 px-8 rounded-md',
        },
        width: {
            full: 'w-full rounded-lg',
            max: 'w-max'
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
        width: "full"
      },
    }
)

const Button = forwardRef(({ 
    children,
    className, 
    variant, 
    isLoading,
    disabled,
    size, 
    width,
    ...props 
}, ref) => {
  return (
    <button
        ref={ref}
        {...props}
        disabled={disabled}
        aria-disabled={disabled}
        className={`
          ${cn(buttonVariants({
            variant, size, width, className
          }))}
          ${isLoading ? "pointer-events-none cursor-not-allowed opacity-80" : ""}
        `}
    >
        {isLoading && (
            <Loader2 className='w-4 h-4 animate-spin duration-300 mr-2' />
        )}
        {children}
    </button>
  )
})

Button.displayName = "Button";

export default Button;