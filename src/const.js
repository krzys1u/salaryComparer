import { CREATIVE_RIGHTS_STEPS } from './config'

export const EMPLOYMENT_TYPES = [
  ...CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => ({
    label: `UoP - CR ${creativeRightsValue}%`,
    name: `uop-${creativeRightsValue}`,
  })),
  { label: 'B2B(19%) - low ZUS', name: 'b2b-low-zus' },
  { label: 'B2B(19%) - high ZUS', name: 'b2b-high-zus' },
]
