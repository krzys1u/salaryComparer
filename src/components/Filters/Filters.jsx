import React, { useCallback, useState } from 'react'
import { FormLabel, Button } from '@material-ui/core'
import Slider from '@material-ui/core/Slider'

import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup'
import { withDebug } from '../../utils/withDebug'
import { FilterInputs } from '../FilterInputs/FilterInputs'

import { SALARY_MIN, SALARY_MAX, SALARY_SLIDER_STEP } from '../../config'

import { ADDITIONAL_FILTERS, EMPLOYMENT_TYPES, MEASURES } from '../../const'
import { useTranslation } from '../../contexts/LanguageContext'

const MIN_SLIDER = SALARY_MIN
const MAX_SLIDER = SALARY_MAX
const STEP = SALARY_SLIDER_STEP

export const Filters = withDebug(function Filters(props) {
  const { submitAction, values } = props
  const { translations, t } = useTranslation()

  const [state, setState] = useState({
    from: values.from < MIN_SLIDER ? MIN_SLIDER : values.from,
    to: values.to > MAX_SLIDER ? MAX_SLIDER : values.to,
    types: values.types,
    measures: values.measures,
    additionalFilters: values.additionalFilters,
  })

  const [isSubmitEnabled, setSubmitEnabled] = useState(true)

  const updateRanges = useCallback(
    (which, newVal, checkValues = true) => {
      const newState = { ...state, [which]: newVal }

      if (checkValues) {
        if (newState.to < newState.from && which === 'from') {
          newState.to = newState.from
        }

        if (newState.from > newState.to && which === 'to') {
          newState.from = newState.to
        }
      }

      setState(newState)
      setSubmitEnabled(true)
    },
    [setState, setSubmitEnabled, state],
  )

  const updateTypes = useCallback(
    (checkbox, checked) => {
      const { name } = checkbox

      setState({
        ...state,
        types: {
          ...state.types,
          [name]: {
            checked,
            data: checkbox,
          },
        },
      })

      setSubmitEnabled(true)
    },
    [setSubmitEnabled, state, setState],
  )

  const updateMeasures = useCallback(
    (checkbox, checked) => {
      const { name } = checkbox

      setState({
        ...state,
        measures: {
          ...state.measures,
          [name]: {
            checked,
            data: checkbox,
          },
        },
      })

      setSubmitEnabled(true)
    },
    [setSubmitEnabled, state, setState],
  )

  const updateAdditionalFilters = useCallback(
    (checkbox, checked) => {
      const { name } = checkbox

      setState({
        ...state,
        additionalFilters: {
          ...state.additionalFilters,
          [name]: {
            checked,
            data: checkbox,
          },
        },
      })

      setSubmitEnabled(true)
    },
    [setSubmitEnabled, state, setState],
  )

  const submit = useCallback(() => {
    submitAction(state)
    setSubmitEnabled(false)
  }, [submitAction, setSubmitEnabled, state])

  const filterInputsProps = {
    update: updateRanges,
    min: MIN_SLIDER,
    max: MAX_SLIDER,
    step: SALARY_SLIDER_STEP,
    from: state.from,
    to: state.to,
  }

  const employmentTypesProps = {
    label: translations.employmentTypeLabel,
    checkboxes: EMPLOYMENT_TYPES.map((config) => ({
      ...config,
      label: t(config.label),
      checked:
        (state.types[config.name] || { checked: false }).checked || false,
    })),
    update: updateTypes,
  }

  const measuresProps = {
    label: translations.measuresLabel,
    checkboxes: MEASURES.map((config) => ({
      ...config,
      label: t(config.label),
      checked:
        (state.measures[config.name] || { checked: false }).checked || false,
    })),
    update: updateMeasures,
  }

  const additionalFiltersProps = {
    label: translations.additionalFiltersLabel,
    checkboxes: ADDITIONAL_FILTERS.map((config) => ({
      ...config,
      label: t(config.label),
      checked:
        (state.additionalFilters[config.name] || { checked: false }).checked ||
        false,
    })),
    update: updateAdditionalFilters,
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
        <FormLabel component="legend">
          {translations.salaryRangesLabel}
        </FormLabel>

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

      <CheckboxGroup {...employmentTypesProps} />
      <CheckboxGroup {...measuresProps} />
      <CheckboxGroup {...additionalFiltersProps} />

      <Button
        variant="outlined"
        color="primary"
        onClick={submit}
        disabled={!isSubmitEnabled}>
        {translations.submitButtonLabel}
      </Button>
    </div>
  )
})
