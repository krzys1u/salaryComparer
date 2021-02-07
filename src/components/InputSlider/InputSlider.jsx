import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 80,
  },
})

export const InputSlider = ({ update, min, max, label, step, value }) => {
  const classes = useStyles()

  const handleSliderChange = (event, newValue) => {
    update(newValue)
  }

  const handleInputChange = (event) => {
    update(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < min) {
      update(min)
    } else if (value > max) {
      update(max)
    }
  }

  return (
    <div className={classes.root}>
      {label && (
        <Typography id="input-slider" gutterBottom>
          {label}
        </Typography>
      )}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : min}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={max}
            min={min}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step,
              min,
              max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}
