import {
  LayoutDashboard, Building2, Tags, BarChart3, BadgeDollarSign, Fuel,
  DollarSign, CheckCheck, Clock, RefreshCw, Calculator, BookText,
  HandCoins, UserSearch,
} from 'lucide-react'
import type { ClientRow } from './types'

export const clients: ClientRow[] = [
  {
    name: 'Acme Logistics', count: 7, mcno: '795912', age: 67,
    current: '81,739.88', c130: '11,582.08', c3146: '27,468.89', c4660: '28,426.10',
    c6190: '125,428.88', c91120: '51,692.08', total: '489,489.89',
    children: [
      { inv: 'INV - 2345245', status: 'adj',      invDate: '05/09/2024', ref: 'REF08824', date: '05/09/2024', age: 12 },
      { inv: 'INV - 2345245', status: 'csft',     invDate: '05/09/2024', ref: 'REF08825', date: '05/09/2024', age: 34 },
      { inv: 'INV - 2345245', status: 'short',    invDate: '05/09/2024', ref: 'REF08524', date: '04/25/2024', c4660: '41,728.48', age: 45 },
      { inv: 'INV - 2345245', status: 'writeoff', invDate: '05/09/2024', ref: 'REF08813', date: '04/21/2024', age: 78 },
      { inv: 'INV - 2345245', status: 'coll',     invDate: '05/09/2024', ref: 'REF08610', date: '04/21/2024', age: 55 },
      { inv: 'INV - 2345245', status: 'dmd',      invDate: '05/09/2024', ref: 'REF08612', date: '07/05/2024', c91120: '29,141.99', age: 92 },
      { inv: 'INV - 2345245', status: 'writeoff', invDate: '05/09/2024', ref: 'REF08813', date: '08/10/2024', age: 63 },
    ],
  },
  {
    name: 'Atlas Shipping', count: 5, mcno: '795912', age: 43,
    current: '91,214.89', c130: '8,403.14M', c3146: '51,884.44', c4660: '33,384.68',
    c6190: '18,954.08', c91120: '42,696.08', total: '489,489.89',
    children: [
      { inv: 'INV - 2345245', status: 'coll',  invDate: '05/09/2024', ref: 'REF08673', date: '02/10/2024', c6190: '36,102.69', age: 87 },
      { inv: 'INV - 2345245', status: 'short', invDate: '05/09/2024', ref: 'REF08817', date: '03/10/2024', c91120: '33,136.46', age: 21 },
      { inv: 'INV - 2345245', status: 'csft',  invDate: '05/09/2024', ref: 'REF08126', date: '02/28/2024', age: 58 },
      { inv: 'INV - 2345245', status: 'coll',  invDate: '05/09/2024', ref: 'REF08186', date: '12/03/2024', c91120: '14,898.46', age: 76 },
      { inv: 'INV - 2345245', status: 'will',  invDate: '05/09/2024', ref: 'REF08173', date: '05/08/2024', c130: '29,475.93', age: 39 },
    ],
  },
  {
    name: 'Eagle Freight', count: 10, mcno: '795912', age: 82,
    c3146: '117,471.49', c4660: '54,422.10', c6190: '9,480.88', c91120: '22,713.98', total: '489,489.89',
    children: [
      { inv: 'INV - 2346101', status: 'writeoff', invDate: '03/14/2024', ref: 'REF07711', date: '03/14/2024', c3146: '52,210.00', age: 88 },
      { inv: 'INV - 2346102', status: 'ppwk',     invDate: '04/02/2024', ref: 'REF07712', date: '04/02/2024', c4660: '54,422.10', age: 74 },
      { inv: 'INV - 2346103', status: 'coll',     invDate: '05/18/2024', ref: 'REF07713', date: '05/18/2024', c91120: '22,713.98', age: 61 },
    ],
  },
  {
    name: 'Pioneer Logistics', count: 23, mcno: '795912', age: 15,
    c130: '143,382.89', c3146: '9,164.40', c6190: '51,876.98', c91120: '50,779.68', total: '489,489.89',
    children: [
      { inv: 'INV - 2347201', status: 'will',  invDate: '01/22/2024', ref: 'REF06601', date: '01/22/2024', c130: '79,840.00', age: 18 },
      { inv: 'INV - 2347202', status: 'short', invDate: '02/08/2024', ref: 'REF06602', date: '02/08/2024', c6190: '51,876.98', age: 12 },
    ],
  },
  {
    name: 'Prime Transport', count: 16, mcno: '795912', age: 51,
    c3146: '43,163.69', c4660: '5,180.48', c6190: '51,676.98', c91120: '50,775.68', total: '489,489.89',
    children: [
      { inv: 'INV - 2348301', status: 'dmd',  invDate: '04/11/2024', ref: 'REF05501', date: '04/11/2024', c3146: '43,163.69', age: 55 },
      { inv: 'INV - 2348302', status: 'csft', invDate: '05/27/2024', ref: 'REF05502', date: '05/27/2024', c91120: '50,775.68', age: 48 },
      { inv: 'INV - 2348303', status: 'adj',  invDate: '06/14/2024', ref: 'REF05503', date: '06/14/2024', c4660: '5,180.48', age: 41 },
    ],
  },
  {
    name: 'Sonnet Transport', count: 10, mcno: '795912', age: 28,
    c130: '92,865.69', c6190: '51,879.98', c91120: '50,775.68', c121150: '93,113.88', c151180: '51,586.08', total: '489,489.89',
    children: [
      { inv: 'INV - 2349401', status: 'ppwk',    invDate: '02/19/2024', ref: 'REF04401', date: '02/19/2024', c121150: '93,113.88', age: 31 },
      { inv: 'INV - 2349402', status: 'writeoff', invDate: '03/05/2024', ref: 'REF04402', date: '03/05/2024', c151180: '51,586.08', age: 25 },
    ],
  },
  {
    name: 'ABC Transport', count: 10, mcno: '795912', age: 94,
    c130: '92,865.69', c6190: '51,879.98', c91120: '50,775.68', c121150: '93,113.88', c151180: '51,586.08', c180: '13,880.88', total: '489,489.89',
    children: [
      { inv: 'INV - 2350501', status: 'coll',  invDate: '01/07/2024', ref: 'REF03301', date: '01/07/2024', c180: '13,880.88', age: 98 },
      { inv: 'INV - 2350502', status: 'dmd',   invDate: '02/14/2024', ref: 'REF03302', date: '02/14/2024', c91120: '50,775.68', age: 91 },
      { inv: 'INV - 2350503', status: 'short', invDate: '03/29/2024', ref: 'REF03303', date: '03/29/2024', c6190: '51,879.98', age: 85 },
    ],
  },
  {
    name: 'ACME Transport', count: 10, mcno: '795912', age: 37,
    c130: '92,865.69', c6190: '51,879.98', c91120: '50,775.68', c121150: '93,113.88', c151180: '51,586.08', c180: '13,880.88', total: '489,489.89',
    children: [
      { inv: 'INV - 2351601', status: 'will', invDate: '04/03/2024', ref: 'REF02201', date: '04/03/2024', c130: '92,865.69', age: 40 },
      { inv: 'INV - 2351602', status: 'adj',  invDate: '05/16/2024', ref: 'REF02202', date: '05/16/2024', c121150: '93,113.88', age: 34 },
    ],
  },
  {
    name: 'Bluestone Carriers', count: 8, mcno: '812344', age: 59,
    current: '44,210.00', c130: '18,940.50', c3146: '31,200.00', c4660: '22,500.00',
    c6190: '67,850.00', c91120: '39,100.00', total: '312,450.00',
    children: [
      { inv: 'INV - 2345301', status: 'will',  invDate: '06/12/2024', ref: 'REF09101', date: '06/12/2024', age: 22 },
      { inv: 'INV - 2345302', status: 'short', invDate: '06/15/2024', ref: 'REF09102', date: '06/15/2024', c4660: '22,500.00', age: 47 },
      { inv: 'INV - 2345303', status: 'coll',  invDate: '07/01/2024', ref: 'REF09103', date: '07/01/2024', c6190: '67,850.00', age: 83 },
    ],
  },
  {
    name: 'Crestline Freight', count: 6, mcno: '834561', age: 71,
    current: '29,500.00', c130: '55,320.88', c3146: '14,780.00', c4660: '38,640.00',
    c6190: '22,100.00', c91120: '61,440.00', total: '278,900.00',
    children: [
      { inv: 'INV - 2345410', status: 'ppwk', invDate: '04/18/2024', ref: 'REF09210', date: '04/18/2024', age: 64 },
      { inv: 'INV - 2345411', status: 'dmd',  invDate: '05/02/2024', ref: 'REF09211', date: '05/02/2024', c91120: '61,440.00', age: 91 },
    ],
  },
  {
    name: 'Delta Haulage', count: 14, mcno: '856782', age: 46,
    c130: '78,430.00', c3146: '33,210.00', c4660: '19,870.00', c6190: '44,560.00', c91120: '28,900.00', c121150: '17,340.00', total: '356,780.00',
    children: [
      { inv: 'INV - 2352701', status: 'csft', invDate: '03/21/2024', ref: 'REF01101', date: '03/21/2024', c130: '78,430.00', age: 49 },
      { inv: 'INV - 2352702', status: 'ppwk', invDate: '04/30/2024', ref: 'REF01102', date: '04/30/2024', c4660: '19,870.00', age: 43 },
    ],
  },
  {
    name: 'Horizon Logistics', count: 19, mcno: '878903', age: 88,
    current: '102,340.00', c130: '47,680.00', c3146: '58,120.00', c4660: '31,450.00',
    c6190: '83,210.00', c91120: '44,780.00', c121150: '29,560.00', c151180: '18,990.00', c180: '21,430.00', total: '541,230.00',
    children: [
      { inv: 'INV - 2353801', status: 'writeoff', invDate: '01/15/2024', ref: 'REF00901', date: '01/15/2024', c180: '21,430.00', age: 92 },
      { inv: 'INV - 2353802', status: 'coll',     invDate: '02/28/2024', ref: 'REF00902', date: '02/28/2024', c91120: '44,780.00', age: 88 },
      { inv: 'INV - 2353803', status: 'dmd',      invDate: '04/10/2024', ref: 'REF00903', date: '04/10/2024', c6190: '83,210.00', age: 79 },
    ],
  },
]

export const agingBuckets = ['0-30', '31-45', '45-60', '61-90', '91-120', '121-150', '151-180', '180+']

export const quickActions = [
  { group: 'Payment Status',     items: ['Will Pay (WILL)', 'Credit Issue (CREDIT)'] },
  { group: 'Collection Actions', items: ['No Reply – Reattempting (ACT_NO_REPLY)', 'Escalating to Other Party (ACT_ESCL)', 'Correct / Resending Invoice (ACT_REBILL)', 'Sending Demand for Payment (ACT_DMD)'] },
  { group: 'Disputed',           items: ['Short Pay (SHORT)', 'Write off (WRITE OFF)', 'Missing Paperwork (PPWK)', 'Paid to Client (POA)', 'Paid to 3rd Party (MDP)', 'Misbilled (MISB)'] },
  { group: 'Claims',             items: ['Account on Hold (CLAIM)', 'Partial Offset (CLAIM)'] },
  { group: 'Rebill',             items: ['Wrong Debtor (REBILL)', 'Wrong Client (REBILL)'] },
  { group: 'Other',              items: ['Bankruptcy (BNKRP)', 'Other (OTHER)'] },
]

export const navIcons = [
  LayoutDashboard, Building2, Tags, BarChart3, BadgeDollarSign, Fuel,
  DollarSign, CheckCheck, Clock, RefreshCw, Calculator, BookText,
  HandCoins, UserSearch, BarChart3,
]

export const numCols = ['Current', '1-30', '31-46', '46-60', '61-90', '91-120', '121-150', '151-180', '180+', 'Total', 'Age']
export const allCols = ['Client / Invoice', 'MC No', 'Status', 'Invoice Date', 'Reference', 'Date', ...numCols]
