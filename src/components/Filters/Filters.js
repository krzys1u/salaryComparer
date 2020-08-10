import React, { useState } from 'react';
import { FormLabel, Button } from '@material-ui/core';

import {
  SALARY_MIN,
  SALARY_MAX,
  SALARY_STEP,
  CREATIVE_RIGHTS_STEPS,
} from '../../config';

import { InputSlider } from '../InputSlider/InputSlider';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';

const MIN_SLIDER = SALARY_MIN;
const MAX_SLIDER = SALARY_MAX;
const STEP = SALARY_STEP;

const EMPLOYMENT_TYPES = [
  ...CREATIVE_RIGHTS_STEPS.map((creativeRightsValue) => ({
    label: `UoP - CR ${creativeRightsValue}%`, name: `uop-${creativeRightsValue}`
  })),
  {label: 'B2B(19%) - low ZUS', name: 'b2b-low-zus'},
  {label: 'B2B(19%) - high ZUS', name: 'b2b-high-zus'},
];

export const Filters = (props) => {
  const [state, setState] = useState({from: MIN_SLIDER, to: MAX_SLIDER, types: {'uop-0': true }});

  const updateRanges = (which, newVal) => {
    const newState = {...state, [which]: newVal};

    if (newState.to < newState.from && which === 'from') {
      newState.to = newState.from;
    }

    if (newState.from > newState.to && which === 'to') {
      newState.from = newState.to;
    }

    ['from', 'to'].forEach((key) => {
      if (newState[key] > MAX_SLIDER) {
        newState[key] = MAX_SLIDER;
      }

      if (newState[key] < MIN_SLIDER) {
        newState[key] = MIN_SLIDER;
      }
    })

    setState(newState);
  };

  const updateTypes = (name, checked) => {
    setState({
      ...state,
      types: {
        ...state.types,
        [name]: checked
      }
    });
  }

  const submit = () => {
    props.submitAction(state);
  }

  const grossFromProps = {
    update: updateRanges.bind(this, 'from'),
    min: MIN_SLIDER,
    max: MAX_SLIDER,
    step: STEP,
    value: state.from,
  };

  const grossToProps = {
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

        <InputSlider {...grossFromProps} />
        <InputSlider {...grossToProps} />
      </div>
      <CheckboxGroup {...checkboxGroupProps} />
      <Button variant="outlined" color="primary" onClick={submit}>
        Compare
      </Button>
    </div>
  );
}