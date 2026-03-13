export type Status =
  | 'adj' | 'csft' | 'short' | 'writeoff' | 'coll' | 'dmd' | 'will' | 'ppwk'
  | 'credit' | 'act_no_reply' | 'act_escl' | 'act_rebill' | 'act_dmd'
  | 'poa' | 'mdp' | 'misb' | 'claim' | 'rebill' | 'bnkrp' | 'other'

export interface Child {
  inv: string; status?: Status; invDate?: string; ref?: string; date?: string
  current?: string; c130?: string; c3146?: string; c4660?: string
  c6190?: string; c91120?: string; c121150?: string; c151180?: string; c180?: string
  total?: string; age?: number
}

export interface ClientRow {
  name: string; count: number; mcno: string
  current?: string; c130?: string; c3146?: string; c4660?: string
  c6190?: string; c91120?: string; c121150?: string; c151180?: string; c180?: string
  total: string; age: number; children: Child[]
}

export const STATUS_LABELS: Record<Status, string> = {
  adj: 'ADJ', csft: 'CSFT', short: 'SHORT', writeoff: 'WRITE OFF',
  coll: 'COLL', dmd: 'DMD', will: 'WILL', ppwk: 'PPWK',
  credit: 'CREDIT', act_no_reply: 'ACT_NO_REPLY', act_escl: 'ACT_ESCL',
  act_rebill: 'ACT_REBILL', act_dmd: 'ACT_DMD',
  poa: 'POA', mdp: 'MDP', misb: 'MISB',
  claim: 'CLAIM', rebill: 'REBILL', bnkrp: 'BNKRP', other: 'OTHER',
}

export const ACTION_TO_STATUS: Record<string, Status> = {
  'Will Pay (WILL)':                          'will',
  'Credit Issue (CREDIT)':                    'credit',
  'No Reply – Reattempting (ACT_NO_REPLY)':   'act_no_reply',
  'Escalating to Other Party (ACT_ESCL)':     'act_escl',
  'Correct / Resending Invoice (ACT_REBILL)': 'act_rebill',
  'Sending Demand for Payment (ACT_DMD)':     'act_dmd',
  'Short Pay (SHORT)':                        'short',
  'Write off (WRITE OFF)':                    'writeoff',
  'Missing Paperwork (PPWK)':                 'ppwk',
  'Paid to Client (POA)':                     'poa',
  'Paid to 3rd Party (MDP)':                  'mdp',
  'Misbilled (MISB)':                         'misb',
  'Account on Hold (CLAIM)':                  'claim',
  'Partial Offset (CLAIM)':                   'claim',
  'Wrong Debtor (REBILL)':                    'rebill',
  'Wrong Client (REBILL)':                    'rebill',
  'Bankruptcy (BNKRP)':                       'bnkrp',
  'Other (OTHER)':                            'other',
}
