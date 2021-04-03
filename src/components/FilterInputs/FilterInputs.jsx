import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles({
  root: {},
  input: {
    width: 80,
  },
})

const calculatePerHour = (value) => Math.floor(value / 160)

export const FilterInputs = ({ update, min, max, step, from, to }) => {
  const classes = useStyles()

  const handleInputChange = (kind, event) => {
    event.persist()

    update(
      kind,
      event.target.value === '' ? min : Number(event.target.value),
      false,
    )
  }

  const handleBlur = (kind, event) => {
    event.persist()

    const inputValue =
      event.target.value === '' ? min : Number(event.target.value)
    const valueToCheck = kind === 'from' ? from : to

    if (valueToCheck < min) {
      return update(kind, min)
    }

    if (valueToCheck > max) {
      return update(kind, max)
    }

    update(kind, inputValue)
  }

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <Input
            className={classes.input}
            value={from}
            margin="dense"
            onChange={handleInputChange.bind(this, 'from')}
            onBlur={handleBlur.bind(this, 'from')}
            inputProps={{
              step,
              min,
              max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs={2}>
          -
        </Grid>
        <Grid item xs={5}>
          <Input
            className={classes.input}
            value={to}
            margin="dense"
            onChange={handleInputChange.bind(this, 'to')}
            onBlur={handleBlur.bind(this, 'to')}
            inputProps={{
              step,
              min,
              max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item xs={5} className="filters__perHourValue">
          {calculatePerHour(from)} per hour
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5} className="filters__perHourValue">
          {calculatePerHour(to)} per hour
        </Grid>
      </Grid>
    </div>
  )
}
