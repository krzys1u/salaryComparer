import { CREATIVE_RIGHTS_STEPS } from './config'

export const EMPLOYMENT_TYPES = [
  ...CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => ({
    label: `contractOfEmploymentLabel ${creativeRightsValue}%`,
    name: `uop-${creativeRightsValue}`,
  })),
  { label: 'B2B(19%) - lowZusLabel', name: 'b2b-low-zus' },
  { label: 'B2B(19%) - highZusLabel', name: 'b2b-high-zus' },
]

export const MEASURES = [
  { label: 'Min', name: 'nettoMin', additionalFields: ['costMin'] },
  { label: 'Max', name: 'nettoMax', additionalFields: ['costMax'] },
  { label: 'averageLabel', name: 'nettoAvg', additionalFields: ['costAvg'] },
  { label: 'Sum', name: 'nettoSum', additionalFields: ['costSum'] },
]
