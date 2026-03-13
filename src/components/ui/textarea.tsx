import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-md border border-[#e5e7eb] bg-white px-2.5 py-1.5',
        'text-[12px] text-[#374151] placeholder:text-[#9ca3af] resize-none',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#171717] focus-visible:border-[#171717]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'

export { Textarea }
