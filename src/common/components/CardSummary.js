import { Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'

const CardSummary = ({ title, value, footer }) => {
  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          style={{ textTransform: "uppercase" }}
          color="textPrimary"
        >
          {title}
        </Typography>
        <Divider />
        <Typography variant="h3" color="textPrimary">
          {value}
        </Typography>
        <div>{footer}</div>
      </CardContent>
    </Card>
  )
}

export default CardSummary