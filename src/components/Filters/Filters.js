import React, { useState } from 'react';
import { FormLabel, Button } from '@material-ui/core';

import { InputSlider } from '../InputSlider/InputSlider';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';

const MIN_SLIDER = 0;
const MAX_SLIDER = 20000;
const STEP = 1;

const EMPLOYMENT_TYPES = [
  {label: 'UoP', name: 'uop'},
  {label: 'UoP - KUP 10%', name: 'uop-kup-10'},
  {label: 'UoP - KUP 20%', name: 'uop-kup-20'},
  {label: 'UoP - KUP 30%', name: 'uop-kup-30'},
  {label: 'UoP - KUP 40%', name: 'uop-kup-40'},
  {label: 'UoP - KUP 50%', name: 'uop-kup-50'},
  {label: 'UoP - KUP 60%', name: 'uop-kup-60'},
  {label: 'UoP - KUP 70%', name: 'uop-kup-70'},
  {label: 'UoP - KUP 80%', name: 'uop-kup-80'},
  {label: 'B2B - low ZUS', name: 'b2b-low'},
  {label: 'B2B - high ZUS', name: 'b2b-high'},
];

export const Filters = (props) => {
  const [state, setState] = useState({from: MIN_SLIDER, to: MAX_SLIDER, types: {uop: true }});

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
    console.log('state', state);
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