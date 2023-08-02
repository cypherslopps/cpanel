import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const headingVariants = cva(
    "text-black dark:text-white font-extrabold leading-tight tranking-tighter",
    {
        variants: {
            size: {
                default: 'text-2xl md-lg:text-[1.7rem] md-xl:text-3xl',
                xl: 'text-4xl md:text-6xl lg:text-8xl',
                lg: 'text-3xl md:text-4xl',
                sm: 'text-2xl md:text-3xl',
                xs: 'text-xl md:text-2xl',
                xxs: 'text-base md-lg:text-[1.02rem] md-xl:text-[1.05rem] lg:text-[1.1rem] font-bold'
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
);

const Heading = forwardRef(({
    className, size, children, ...props
}, ref) => {
    return (
        <h1 
            ref={ref} 
            {...props} 
            className={cn(headingVariants({ size, className }))}
        >
            {children}
        </h1>
    );
})

Heading.displayName = "Heading";
 
export default Heading;