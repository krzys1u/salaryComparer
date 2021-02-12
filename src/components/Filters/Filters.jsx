import React, { useCallback, useState } from 'react'
import { FormLabel, Button } from '@material-ui/core'
import Slider from '@material-ui/core/Slider'

import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup'
import { withDebug } from '../../utils/withDebug'
import { FilterInputs } from '../FilterInputs/FilterInputs'

import { SALARY_MIN, SALARY_MAX, SALARY_STEP } from '../../config'

import { EMPLOYMENT_TYPES } from '../../const'

const MIN_SLIDER = SALARY_MIN
const MAX_SLIDER = SALARY_MAX
const STEP = SALARY_STEP

export const Filters = withDebug(function Filters(props) {
  const { submitAction, values } = props

  const [state, setState] = useState({
    from: values.from,
    to: values.to,
    types: values.types,
  })
  const [isSubmitEnabled, setSubmitEnabled] = useState(true)

  const updateRanges = (which, newVal) => {
    const newState = { ...state, [which]: newVal }

    if (newState.to < newState.from && which === 'from') {
      newState.to = newState.from
    }

    if (newState.from > newState.to && which === 'to') {
      newState.from = newState.to
    }

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

  const filterInputsProps = {
    update: updateRanges,
    min: MIN_SLIDER,
    max: MAX_SLIDER,
    step: STEP,
    from: state.from,
    to: state.to,
  }

  const checkboxGroupProps = {
    label: 'Choose types of employment',
    checkboxes: EMPLOYMENT_TYPES.map((config) => ({
      ...config,
      checked: state.types[config.name] || false,
    })),
    update: updateTypes,
  }

  const multiSliderChange = useCallback(
    (_, value) => {
      setState({ ...state, from: Math.min(...value), to: Math.max(...value) })
    },
    [setState, state],
  )

  return (
    <div>
      <div>
        <FormLabel component="legend">Choose gross ranges</FormLabel>

        <Slider
          value={[state.from, state.to]}
          valueLabelDisplay="auto"
          onChange={multiSliderChange}
          onChangeCommitted={() => {
            setSubmitEnabled(true)
          }}
          aria-labelledby="input-slider"
          min={MIN_SLIDER}
          max={MAX_SLIDER}
          step={STEP}
        />

        <FilterInputs {...filterInputsProps} />
      </div>
      <CheckboxGroup {...checkboxGroupProps} />
      <Button
        variant="outlined"
        color="primary"
        onClick={submit}
        disabled={!isSubmitEnabled}>
        Compare
      </Button>
    </div>
  )
})
