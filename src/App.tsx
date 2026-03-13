import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup,
} from '@/components/ui/dropdown-menu'
import {
  Building2, Download, Filter, ChevronRight, ChevronDown,
  Check, Mail, Phone, CreditCard, User, Plus, Search, CheckSquare, X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Status } from './types'
import { STATUS_LABELS, ACTION_TO_STATUS } from './types'
import { clients, agingBuckets, quickActions, navIcons, numCols, allCols } from './data'

export default function App() {
  const [expanded, setExpanded]               = useState<Set<number>>(new Set())
  const [checked, setChecked]                 = useState<Set<string>>(new Set())
  const [action, setAction]                   = useState('')
  const [submitted, setSubmitted]             = useState(false)
  const [invoiceStatuses, setInvoiceStatuses] = useState<Record<string, Status>>({})
  const [noteOpen, setNoteOpen]               = useState(false)
  const [noteText, setNoteText]               = useState('')
  const [notes, setNotes] = useState([
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'John Doe',   date: '12-02-2026' },
    { text: 'Eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim veniam.',                                                   author: 'John Doe',   date: '12-02-2026' },
    { text: 'Called debtor — confirmed receipt of invoice. Promised payment by end of month. Following up on 15th.',                        author: 'Sarah Kim',  date: '11-28-2026' },
    { text: 'Short pay dispute escalated to client. Awaiting signed POD before resubmitting balance of $4,280.00.',                         author: 'Marcus Lee', date: '11-21-2026' },
  ])

  const drawerOpen   = expanded.size > 0 || checked.size > 0
  const hasSelection = checked.size > 0

  const toggleExpand = (i: number) => {
    setExpanded(prev => {
      const s = new Set(prev)
      if (s.has(i)) {
        s.delete(i)
        setChecked(ck => {
          const nc = new Set(ck)
          clients[i].children.forEach((_, ri) => nc.delete(`${i}-${ri}`))
          return nc
        })
      } else {
        s.add(i)
      }
      return s
    })
  }

  const toggleCheck = (key: string) => {
    setChecked(prev => {
      const s = new Set(prev)
      s.has(key) ? s.delete(key) : s.add(key)
      return s
    })
    setAction('')
    setSubmitted(false)
  }

  const clickRow = (key: string) => {
    setChecked(new Set([key]))
    setAction('')
    setSubmitted(false)
  }

  const closeDrawer = () => {
    setExpanded(new Set())
    setChecked(new Set())
    setAction('')
    setSubmitted(false)
  }

  const handleSubmit = () => {
    if (!action || submitted) return
    setSubmitted(true)
    const newStatus = ACTION_TO_STATUS[action]
    if (newStatus) {
      setInvoiceStatuses(prev => {
        const next = { ...prev }
        checked.forEach(key => { next[key] = newStatus })
        return next
      })
    }
  }

  const addNote = () => {
    if (!noteText.trim()) return
    setNotes(n => [{ text: noteText, author: 'You', date: 'Just now' }, ...n])
    setNoteText('')
    setNoteOpen(false)
  }

  const Dash = () => <span className="text-[#d1d5db]">—</span>
  const Num = ({ v }: { v?: string }) => (
    <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-right text-[12px] leading-[16px] tabular-nums font-medium text-[#101828]">
      {v ? v : <Dash />}
    </td>
  )

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">

      {/* ── SIDEBAR — hidden on mobile, visible md+ ── */}
      <aside className="hidden md:flex w-[47px] shrink-0 bg-[#171717] flex-col items-center">
        <div className="w-full h-[49px] flex items-center justify-center border-b border-[#2a2a2a]">
          <span className="text-[11px] font-bold text-white tracking-tight">FC</span>
        </div>
        <nav className="flex-1 flex flex-col items-center gap-0.5 py-2 w-full px-2">
          {navIcons.map((Icon, i) => (
            <button key={i} className={cn(
              'w-[31px] h-[31px] rounded-md flex items-center justify-center transition-colors',
              i === 7 ? 'bg-[#393939] text-[#fcfcfc]' : 'text-[#fcfcfc] hover:bg-[#2a2a2a]'
            )}>
              <Icon size={15} strokeWidth={1.8} />
            </button>
          ))}
        </nav>
        <div className="border-t border-[#2a2a2a] py-3 w-full flex justify-center">
          <button className="w-[31px] h-[31px] rounded-md flex items-center justify-center text-[#fcfcfc] hover:bg-[#2a2a2a] transition-colors">
            <User size={15} strokeWidth={1.8} />
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Header */}
        <div className="h-[49px] bg-white border-b border-[#e5e7eb] flex items-center px-4 md:px-6 shrink-0">
          <span className="text-[14px] font-semibold text-[#111827]">AR Collections</span>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-auto min-h-0 p-2 sm:p-3 md:p-4 flex flex-col gap-3 bg-white">

          {/* Metrics cards — 2 cols mobile, 4 cols tablet, 8 cols desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-2 md:gap-3 shrink-0">
            {agingBuckets.map(b => (
              <div key={b} className="bg-white rounded-[12px] border border-[#e5e5e5] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] flex flex-col items-center py-3 md:py-4 gap-1.5 md:gap-2 cursor-pointer hover:shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-shadow">
                <p className="text-[12px] md:text-[14px] font-normal text-[#141414] leading-[20px] text-center">{b}</p>
                <p className="text-[16px] md:text-[18px] font-semibold text-[#0a0a0a] leading-[28px] md:leading-[32px] text-center">$570k</p>
              </div>
            ))}
          </div>

          {/* Table container */}
          <div className="rounded-xl border border-[#e5e5e5] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] flex-1 flex flex-col min-h-0 overflow-hidden">

            {/* Toolbar — wraps on small screens */}
            <div className="border-b border-[#e5e7eb] flex flex-wrap items-center gap-2 px-3 md:px-4 py-2 lg:h-[44px] lg:flex-nowrap shrink-0">
              <Tabs defaultValue="client">
                <TabsList>
                  <TabsTrigger value="client">Client</TabsTrigger>
                  <TabsTrigger value="debtor">Debtor</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="hidden sm:block w-px h-5 bg-[#e5e7eb]" />
              <Button variant="outline" className="gap-1.5 h-[28px] text-[12px]">
                <Filter size={13} /> Filters
              </Button>
              <div className="relative">
                <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                <Input placeholder="Search..." className="pl-8 w-36 sm:w-44 h-[28px] text-[12px]" />
              </div>
              <div className="flex-1" />
              <Button variant="outline" className="gap-1.5 h-[28px] text-[12px]">
                <Download size={13} />
                <span className="hidden sm:inline">Export Aging</span>
              </Button>
            </div>

            {/* Table scroll area — always horizontally scrollable */}
            <div className="flex-1 overflow-auto min-h-0">
              <table className="w-full border-collapse" style={{ minWidth: 1100 }}>
                <thead>
                  <tr>
                    <th className="w-8 sticky top-0 left-0 z-[4] bg-[#f9fafb] border-b border-[#e5e7eb] px-4 py-2" />
                    <th className="w-6 sticky top-0 left-8 z-[4] bg-[#f9fafb] border-b border-[#e5e7eb] px-1 py-2" />
                    {allCols.map(h => (
                      <th key={h} className={cn(
                        'sticky top-0 bg-[#f9fafb] border-b border-[#e5e7eb] px-2.5 py-2',
                        'text-[11px] font-semibold text-[#6b7280] uppercase tracking-[0.04em] whitespace-nowrap text-left',
                        numCols.includes(h) && 'text-right',
                        h === 'Client / Invoice'
                          ? 'sticky left-14 z-[4] shadow-[2px_0_5px_rgba(0,0,0,0.04)] min-w-[180px]'
                          : 'z-[2]'
                      )}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, ci) => {
                    const isExpanded = expanded.has(ci)
                    const groupNums = [client.current, client.c130, client.c3146, client.c4660, client.c6190, client.c91120, client.c121150, client.c151180, client.c180]
                    return [
                      /* Client (parent) row */
                      <tr key={`g-${ci}`} className="group bg-white hover:bg-[#f9fafb] cursor-pointer">
                        <td className="sticky left-0 z-[1] bg-white group-hover:bg-[#f9fafb] px-4 py-[9.75px] border-b border-[#f0f0f0]" />
                        <td className="sticky left-8 z-[1] bg-white group-hover:bg-[#f9fafb] px-1 py-[9.75px] border-b border-[#f0f0f0]">
                          <button
                            onClick={() => toggleExpand(ci)}
                            className="text-[#9ca3af] flex items-center transition-transform"
                            style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }}
                          >
                            <ChevronRight size={12} strokeWidth={2.5} />
                          </button>
                        </td>
                        <td className="sticky left-14 z-[1] bg-white group-hover:bg-[#f9fafb] shadow-[2px_0_5px_rgba(0,0,0,0.04)] px-2.5 py-[9.75px] border-b border-[#f0f0f0]" onClick={() => toggleExpand(ci)}>
                          <span className="text-[12px] font-medium leading-[16px] text-[#0a0a0a] whitespace-nowrap">{client.name}</span>
                          <span className="text-[12px] leading-[16px] text-[#6a7282] ml-1 whitespace-nowrap">({client.count})</span>
                        </td>
                        <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-[12px] leading-[16px] font-normal text-[#364153]">{client.mcno}</td>
                        <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0]" />
                        <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0]" />
                        <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0]" />
                        <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0]" />
                        {groupNums.map((v, i) => <Num key={i} v={v} />)}
                        <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-right text-[12px] leading-[16px] font-medium text-[#101828] tabular-nums">{client.total}</td>
                        <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-right text-[12px] leading-[16px] font-medium text-[#101828] tabular-nums">{client.age}</td>
                      </tr>,

                      /* Invoice (child) rows */
                      ...(isExpanded ? client.children.map((child, ri) => {
                        const key       = `${ci}-${ri}`
                        const isCk      = checked.has(key)
                        const rowBg     = isCk ? 'bg-[#f5f5f5]' : 'bg-white'
                        const stickyBg  = isCk ? 'bg-[#f5f5f5] group-hover:bg-[#ebebeb]' : 'bg-white group-hover:bg-[#f9fafb]'
                        const childNums = [child.current, child.c130, child.c3146, child.c4660, child.c6190, child.c91120]
                        const status    = invoiceStatuses[key] ?? child.status
                        return (
                          <tr
                            key={key}
                            className={cn('group cursor-pointer', isCk ? 'bg-[#f5f5f5] hover:bg-[#ebebeb]' : 'bg-white hover:bg-[#f9fafb]')}
                            onClick={() => clickRow(key)}
                          >
                            <td className={cn('sticky left-0 z-[1] px-4 py-[9.75px] border-b border-[#f0f0f0]', stickyBg)} onClick={e => e.stopPropagation()}>
                              <Checkbox checked={isCk} onCheckedChange={() => toggleCheck(key)} />
                            </td>
                            <td className={cn('sticky left-8 z-[1] px-1 py-[9.75px] border-b border-[#f0f0f0]', stickyBg)} />
                            <td className={cn('sticky left-14 z-[1] pl-6 pr-2.5 py-[9.75px] border-b border-[#f0f0f0] text-[12px] leading-[16px] font-medium text-[#0a0a0a] shadow-[2px_0_5px_rgba(0,0,0,0.04)] whitespace-nowrap', stickyBg)}>
                              {child.inv}
                            </td>
                            <td className={cn('px-2.5 py-[9.75px] border-b border-[#f0f0f0]', rowBg)} />
                            <td className={cn('px-2.5 py-[9.75px] border-b border-[#f0f0f0]', rowBg)}>
                              {status && <Badge variant={status}>{STATUS_LABELS[status]}</Badge>}
                            </td>
                            <td className={cn('px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-[12px] leading-[16px] font-normal text-[#364153]', rowBg)}>{child.invDate}</td>
                            <td className={cn('px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-[12px] leading-[16px] font-normal text-[#364153]', rowBg)}>{child.ref}</td>
                            <td className={cn('px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-[12px] leading-[16px] font-normal text-[#364153]', rowBg)}>{child.date}</td>
                            {childNums.map((v, i) => <Num key={i} v={v} />)}
                            <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0]" />
                            <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0]" />
                            <td className="px-2.5 py-[9.75px] border-b border-[#f0f0f0]" />
                            <td className={cn('px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-right text-[12px] leading-[16px] font-medium text-[#101828] tabular-nums', rowBg)}>{child.total}</td>
                            <td className={cn('px-2.5 py-[9.75px] border-b border-[#f0f0f0] text-right text-[12px] leading-[16px] font-medium text-[#101828] tabular-nums', rowBg)}>{child.age}</td>
                          </tr>
                        )
                      }) : [])
                    ]
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="shrink-0 bg-white border-t border-[#e5e7eb] flex items-center justify-end gap-2 md:gap-3 px-3 md:px-5 py-2 text-[12px] text-[#6b7280]">
              <span className="hidden sm:inline">Rows per page</span>
              <select className="border border-[#e5e7eb] rounded text-[12px] px-1.5 py-0.5 text-[#374151]">
                <option>500</option><option>100</option><option>50</option>
              </select>
              <span>Page 1 of 7</span>
              <div className="flex gap-0.5">
                {['«', '‹', '›', '»'].map(c => (
                  <button key={c} className="w-6 h-6 border border-[#e5e7eb] rounded text-[11px] flex items-center justify-center hover:bg-[#f3f4f6]">{c}</button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>{/* end MAIN */}

      {/* ── RIGHT DRAWER ──
           Desktop (lg+): inline panel that pushes main content
           Mobile/tablet (<lg): fixed overlay slide-over with backdrop
      */}

      {/* Backdrop — mobile/tablet only */}
      {drawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30"
          onClick={closeDrawer}
        />
      )}

      <div className={cn(
        'border-l border-[#e5e5e5] bg-[#f7f7f7] flex flex-col transition-all duration-200 overflow-hidden',
        // Desktop (lg+): inline, shrinks main content, no fixed positioning
        'lg:static lg:shrink-0 lg:h-screen lg:z-auto',
        drawerOpen ? 'lg:w-[374px]' : 'lg:w-0',
        // Mobile/tablet (<lg): fixed slide-over from right
        'fixed inset-y-0 right-0 z-50 h-screen lg:translate-x-0',
        drawerOpen ? 'w-full sm:w-[374px]' : 'w-0',
      )}>
        <div className="w-full sm:w-[374px] lg:w-[374px] h-full overflow-y-auto flex flex-col">

          {/* Drawer header with close button (visible on mobile/tablet) */}
          <div className="lg:hidden flex items-center justify-between px-[13px] py-3 border-b border-[rgba(189,189,189,0.56)]">
            <span className="text-[13px] font-semibold text-[#111827]">Invoice Details</span>
            <button onClick={closeDrawer} className="p-1 rounded hover:bg-[#ebebeb] text-[#6b7280]">
              <X size={16} />
            </button>
          </div>

          {/* Debtor section */}
          <div className="border-b border-[rgba(189,189,189,0.56)] px-[13px] py-[14px] shrink-0">
            <p className="text-[14px] font-semibold text-black leading-[20px] mb-2">Debtor</p>
            <div className="flex flex-col gap-2 px-1 py-0.5">
              <div className="flex items-start gap-[8px]">
                <Building2 size={16} className="text-[#646464] shrink-0 mt-0.5" />
                <p className="text-[14px] font-semibold text-[#2d2d2d] leading-[20px]">Target Supply Chain</p>
              </div>
              <div className="flex flex-col gap-[6px]">
                {([
                  [Mail,       'accounts.payable@company.com'],
                  [Phone,      '(555) 123-4567'],
                  [CreditCard, 'MC/ID: MC-XXXXXX'],
                ] as const).map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-[8px]">
                    <Icon size={14} className="text-[#646464] shrink-0" />
                    <p className="text-[12px] font-normal text-[#646464] leading-[16px]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Empty state */}
          {!hasSelection && (
            <div className="flex-1 flex flex-col items-center justify-center gap-[8px] px-6">
              <CheckSquare size={24} className="text-[#767676]" strokeWidth={1.5} />
              <p className="text-[14px] font-medium text-[#767676] leading-[20px] text-center">
                Select Invoice to Perform Action
              </p>
            </div>
          )}

          {/* Full content — invoice selected */}
          {hasSelection && (
            <>
              {/* Quick Action */}
              <div className="px-[13px] py-3 border-b border-[rgba(189,189,189,0.56)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#9ca3af] mb-2">Quick Action</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between font-normal text-[12px] h-[30px] mb-2">
                      <span className="truncate text-left">{action || 'Select Action'}</span>
                      <ChevronDown size={12} className="shrink-0 ml-1 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" side="bottom" className="w-[340px]">
                    {quickActions.map(({ group, items }, gi) => (
                      <DropdownMenuGroup key={group}>
                        {gi > 0 && <DropdownMenuSeparator />}
                        <DropdownMenuLabel>{group}</DropdownMenuLabel>
                        {items.map(item => (
                          <DropdownMenuItem key={item} onClick={() => { setAction(item); setSubmitted(false) }}>
                            <span className={cn(action === item && 'font-medium')}>{item}</span>
                            {action === item && <Check size={12} className="ml-auto" />}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  className={cn('w-full h-[28px] text-[12px] transition-colors', submitted && 'bg-[#9ca3af] hover:bg-[#9ca3af] cursor-default')}
                  disabled={!action}
                  onClick={handleSubmit}
                >
                  {submitted ? 'Submitted' : 'Submit'}
                </Button>
              </div>

              {/* Notes */}
              <div className="px-[13px] py-3 border-b border-[rgba(189,189,189,0.56)]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#9ca3af]">Notes</p>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" className="h-[22px] px-2 text-[11px] gap-1">
                      <Download size={10} /> Export
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setNoteOpen(o => !o)} className="h-[22px] px-2 text-[11px] gap-1">
                      <Plus size={10} /> Add
                    </Button>
                  </div>
                </div>
                {noteOpen && (
                  <div className="mb-2">
                    <Textarea placeholder="Add a note…" value={noteText} onChange={e => setNoteText(e.target.value)} className="mb-1.5" rows={3} />
                    <Button className="w-full h-[28px] text-[12px]" onClick={addNote}>Add Note</Button>
                  </div>
                )}
                <div className="flex flex-col gap-[8px]">
                  {notes.map((n, i) => (
                    <div key={i} className="bg-white border border-[#ececec] rounded-[8px] px-[12px] py-[10px] flex flex-col gap-[10px]">
                      <p className="text-[12px] font-normal text-[#474747] leading-[1.4]">{n.text}</p>
                      <div className="flex items-center justify-between h-[21px]">
                        <div className="flex items-center gap-[4px]">
                          <div className="bg-[#f9f9f9] rounded-full size-[21px] flex items-center justify-center shrink-0 overflow-hidden">
                            <User size={13} className="text-[#9ca3af]" />
                          </div>
                          <p className="text-[12px] font-normal text-[rgba(0,0,0,0.79)] whitespace-nowrap">{n.author}</p>
                        </div>
                        <p className="text-[12px] font-normal text-[rgba(0,0,0,0.79)] whitespace-nowrap">{n.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-2 h-[28px] text-[12px]">View All</Button>
              </div>

              {/* Attached Files */}
              <div className="px-[13px] py-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#9ca3af]">Attached Files (4)</p>
                  <Button variant="ghost" size="sm" className="h-[22px] px-2 text-[11px]">View All</Button>
                </div>
                {[1, 2].map(i => (
                  <div key={i} className="border border-[#e0e0e0] rounded-[4px] shadow-[0px_1px_2.3px_0px_rgba(33,33,33,0.08)] overflow-hidden mb-2 cursor-pointer hover:shadow-[0px_2px_6px_rgba(33,33,33,0.14)] transition-shadow bg-white">
                    <img
                      src="https://www.figma.com/api/mcp/asset/ce7f5b1d-9391-4c42-b51f-685f6d4a8729"
                      alt="Invoice preview"
                      className="w-full h-auto block"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>{/* end RIGHT DRAWER */}

    </div>
  )
}
