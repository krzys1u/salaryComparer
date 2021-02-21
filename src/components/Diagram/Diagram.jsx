import React from 'react'
import { XYChart, CrossHair, XAxis, YAxis } from '@data-ui/xy-chart'
import LineSeries from '@data-ui/xy-chart/lib/series/LineSeries'

const renderTooltip = ({ datum, color }) => {
  return (
    <div>
      <div>
        <strong>Gross: </strong>
        {datum.x}
      </div>
      <div>
        <strong>{datum.label}: </strong>
        {datum.y}
      </div>
    </div>
  )
}

export const Diagram = ({ dataSeries }) => {
  return (
    <XYChart
      ariaLabel="Salary diagram"
      width={500}
      height={500}
      xScale={{ type: 'linear' }}
      yScale={{ type: 'linear' }}
      renderTooltip={renderTooltip}
      snapTooltipToDataX>
      <XAxis label="Gross" />
      <YAxis label="Net" />

      {dataSeries.map(({ label, data }) => {
        return <LineSeries data={data} seriesKey={label} key={label} />
      })}

      <CrossHair showHorizontalLine={false} fullHeight stroke="pink" />
    </XYChart>
  )
}
