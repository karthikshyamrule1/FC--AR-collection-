import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-[4px] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.03em]',
  {
    variants: {
      variant: {
        // original statuses
        adj:        'bg-blue-100 text-blue-700',
        csft:       'bg-green-100 text-green-700',
        short:      'bg-red-100 text-red-600',
        writeoff:   'bg-orange-100 text-orange-700',
        coll:       'bg-sky-100 text-sky-700',
        dmd:        'bg-purple-100 text-purple-700',
        will:       'bg-emerald-100 text-emerald-700',
        ppwk:       'bg-yellow-100 text-yellow-700',
        // payment status
        credit:     'bg-teal-100 text-teal-700',
        // collection actions
        act_no_reply: 'bg-slate-100 text-slate-600',
        act_escl:   'bg-rose-100 text-rose-700',
        act_rebill: 'bg-indigo-100 text-indigo-700',
        act_dmd:    'bg-purple-100 text-purple-700',
        // disputed
        poa:        'bg-lime-100 text-lime-700',
        mdp:        'bg-cyan-100 text-cyan-700',
        misb:       'bg-pink-100 text-pink-700',
        // claims
        claim:      'bg-amber-100 text-amber-700',
        // rebill
        rebill:     'bg-violet-100 text-violet-700',
        // other
        bnkrp:      'bg-red-100 text-red-700',
        other:      'bg-gray-100 text-gray-600',
      },
    },
    defaultVariants: { variant: 'adj' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
