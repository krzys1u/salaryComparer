import React from 'react'
import Typography from '@material-ui/core/Typography'

export const MessageCard = (props) => {
  const { label, code, icon, button } = props

  return (
    <div className="info__wrapper">
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          {label}
        </Typography>
        <div className="image__wrapper">{icon}</div>
        {code && code.length ? <code>{code}</code> : ''}
        {button ? <div className="buttons">{button}</div> : ''}
      </div>
    </div>
  )
}
