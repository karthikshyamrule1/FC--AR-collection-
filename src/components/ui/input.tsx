import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-[28px] w-full rounded-md border border-[#e5e7eb] bg-white px-3 py-1',
        'text-[12px] text-[#374151] placeholder:text-[#9ca3af]',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#171717] focus-visible:border-[#171717]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
