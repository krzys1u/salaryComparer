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
  {
    label: 'Min',
    name: 'nettoMin',
    additionalFields: [
      {
        name: 'costMin',
        labelSuffix: 'costMinLabelSuffix',
        enabler: 'showEmployerCost',
      },
    ],
  },
  {
    label: 'Max',
    name: 'nettoMax',
    additionalFields: [
      {
        name: 'costMax',
        labelSuffix: 'costMaxLabelSuffix',
        enabler: 'showEmployerCost',
      },
    ],
  },
  {
    label: 'averageLabel',
    name: 'nettoAvg',
    additionalFields: [
      {
        name: 'costAvg',
        labelSuffix: 'costAvgLabelSuffix',
        enabler: 'showEmployerCost',
      },
    ],
  },
  {
    label: 'sumLabel',
    name: 'nettoSum',
    additionalFields: [
      {
        name: 'costSum',
        labelSuffix: 'costSumLabelSuffix',
        enabler: 'showEmployerCost',
      },
    ],
  },
]

export const ADDITIONAL_FILTERS = [
  { label: 'showEmployerCostLabel', name: 'showEmployerCost' },
  { label: 'showOnlyEmployerCostLabel', name: 'showOnlyEmployerCost' },
  // { label: 'showNewLad', name: 'showNewLad' },
  // { label: 'showNewLadOnly', name: 'showNewLadOnly' },
]
