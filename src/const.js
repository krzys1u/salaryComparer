import { CREATIVE_RIGHTS_STEPS } from './config'

export const EMPLOYMENT_TYPES = [
  ...CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => ({
    //label: `CoE - CR ${creativeRightsValue}%`,
    label: `Umowa o pracę - KUP ${creativeRightsValue}%`,
    name: `uop-${creativeRightsValue}`,
  })),
  // { label: 'B2B(19%) - low ZUS', name: 'b2b-low-zus' },
  // { label: 'B2B(19%) - high ZUS', name: 'b2b-high-zus' },
  { label: 'B2B(19%) - mały ZUS', name: 'b2b-low-zus' },
  { label: 'B2B(19%) - duży ZUS', name: 'b2b-high-zus' },
]

export const MEASURES = [
  { label: 'Min', name: 'nettoMin' },
  { label: 'Max', name: 'nettoMax' },
  //{ label: 'Avg', name: 'nettoAvg' },
  { label: 'Średnia', name: 'nettoAvg' },
]
