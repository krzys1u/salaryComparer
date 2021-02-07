import React, { useState } from 'react'
import { FormLabel, Button } from '@material-ui/core'

import { SALARY_MIN, SALARY_MAX, SALARY_STEP } from '../../config'

import { EMPLOYMENT_TYPES } from '../../const'

import { InputSlider } from '../InputSlider/InputSlider'
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup'
import { withDebug } from '../../utils/withDebug'

const MIN_SLIDER = SALARY_MIN
const MAX_SLIDER = SALARY_MAX
const STEP = SALARY_STEP

export const Filters = withDebug(function Filters(props) {
  const { submitAction, values } = props

  const [state, setState] = useState({ from: values.from, to: values.to, types: values.types })
  const [isSubmitEnabled, setSubmitEnabled] = useState(true)

  const updateRanges = (which, newVal) => {
    const newState = { ...state, [which]: newVal }

    if (newState.to < newState.from && which === 'from') {
      newState.to = newState.from
    }

    if (newState.from > newState.to && which === 'to') {
      newState.from = newState.to
    }

    ;['from', 'to'].forEach((key) => {
      if (newState[key] > MAX_SLIDER) {
        newState[key] = MAX_SLIDER
      }

      if (newState[key] < MIN_SLIDER) {
        newState[key] = MIN_SLIDER
      }
    })

    setState(newState)
    setSubmitEnabled(true)
  }

  const updateTypes = (name, checked) => {
    setState({
      ...state,
      types: {
        ...state.types,
        [name]: checked,
      },
    })

    setSubmitEnabled(true)
  }

  const submit = () => {
    submitAction(state)
    setSubmitEnabled(false)
  }

  const grossFromSliderProps = {
    update: updateRanges.bind(this, 'from'),
    min: MIN_SLIDER,
    max: MAX_SLIDER,
    step: STEP,
    value: state.from,
  }

  const grossToSliderProps = {
    update: updateRanges.bind(this, 'to'),
    min: MIN_SLIDER,
    max: MAX_SLIDER,
    step: STEP,
    value: state.to,
  }

  const checkboxGroupProps = {
    label: 'Choose types of employment',
    checkboxes: EMPLOYMENT_TYPES.map((config) => ({
      ...config,
      checked: state.types[config.name] || false,
    })),
    update: updateTypes,
  }

  return (
    <div>
      <div>
        <FormLabel component="legend">Choose gross ranges</FormLabel>

        <InputSlider {...grossFromSliderProps} />
        <InputSlider {...grossToSliderProps} />
      </div>
      <CheckboxGroup {...checkboxGroupProps} />
      <Button variant="outlined" color="primary" onClick={submit} disabled={!isSubmitEnabled}>
        Compare
      </Button>
    </div>
  )
})
