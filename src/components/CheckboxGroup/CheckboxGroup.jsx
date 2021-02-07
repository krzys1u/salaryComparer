import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15px',
  },
  formControl: {},
}))

export const CheckboxGroup = ({ checkboxes, label, update }) => {
  const classes = useStyles()

  const handleChange = (name) => (event) => {
    update(name, event.target.checked)
  }

  const list = checkboxes.map(({ label, name, checked }) => (
    <div key={name}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange(name)} value={name} color="primary" />}
        label={label}
      />
    </div>
  ))

  return (
    <div className={classes.root}>
      <FormLabel component="legend">{label}</FormLabel>
      {list}
    </div>
  )
}
