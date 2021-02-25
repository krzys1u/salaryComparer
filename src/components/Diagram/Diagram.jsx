import React, { useContext } from 'react'
import {
  WithTooltip,
  LineSeries,
  CrossHair,
  XAxis,
  YAxis,
  Brush,
  XYChart,
} from '@data-ui/xy-chart'
import { LegendOrdinal, LegendItem, LegendLabel } from '@vx/legend'
import { scaleOrdinal } from '@vx/scale'

import { WorkspaceSizeContext } from '../../contexts/WorkspaceSizeContext'

const DOMAIN_OFFSET = 500

const COLORS = [
  '#c92a2a',
  '#862e9c',
  '#5f3dc4',
  '#364fc7',
  '#2b8a3e',
  '#5c940d',
  '#e67700',
  '#d9480f',
  '#69d2e7',
  '#f38630',
  '#f215b7',
  '#db6991',
  '#cfb5fc',
  '#ffdac9',
  '#b71013',
  '#dca2f2',
  '#606ff2',
  '#dd18ca',
  '#fffa7a',
  '#f4bcab',
  '#eabb10',
  '#d4f473',
]

const getColor = (index) => COLORS[index]

const renderTooltip = (dataPoints, { datum }) => {
  const dataPoint = dataPoints[datum.x]

  return (
    <div>
      <div>
        <strong>Gross: {datum.x}</strong>
      </div>

      {dataPoint.map(([label, currentValue], index) => {
        const color = getColor(index)

        const isCurrent = datum.label === label

        return (
          <div key={label}>
            <span
              style={{
                color,
                textDecoration: isCurrent ? `underline solid ${color}` : null,
                fontWeight: isCurrent ? 600 : 200,
              }}>
              {`${label} `}
            </span>
            {currentValue}
          </div>
        )
      })}
    </div>
  )
}

export const Diagram = ({ filters, dataSeries, dataPoints }) => {
  const { width, height } = useContext(WorkspaceSizeContext)

  const legendScale = scaleOrdinal({
    range: dataSeries.map((_, index) => {
      const color = getColor(index)

      return {
        stroke: color,
        strokeDasharray: '',
      }
    }),
    domain: dataSeries.map((d) => d.label),
  })

  const yDomain = [
    Math.min(...dataPoints[filters.from].map(([_, val]) => val)) -
      DOMAIN_OFFSET,
    Math.max(...dataPoints[filters.to].map(([_, val]) => val)) + DOMAIN_OFFSET,
  ]

  const xDomain = [filters.from - DOMAIN_OFFSET, filters.to + DOMAIN_OFFSET]

  return (
    <>
      <WithTooltip renderTooltip={renderTooltip.bind(null, dataPoints)}>
        {({ onMouseLeave, onMouseMove, tooltipData }) => (
          <XYChart
            ariaLabel="Salaries"
            eventTrigger={'container'}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            renderTooltip={null}
            showVoronoi={false}
            snapTooltipToDataX
            snapTooltipToDataY={false}
            tooltipData={tooltipData}
            width={width}
            height={0.75 * height}
            xScale={{
              type: 'linear',
              domain: xDomain,
            }}
            yScale={{ type: 'linear', domain: yDomain }}>
            <XAxis label="Gross" numTicks={10} />
            <YAxis label="Net" orientation="left" numTicks={6} />
            {dataSeries.map(({ label, data }, index) => {
              const color = getColor(index)

              return (
                <LineSeries
                  key={label}
                  data={data}
                  seriesKey={label}
                  strokeWidth={3}
                  stroke={color}
                />
              )
            })}
            <CrossHair
              fullHeight
              showHorizontalLine={false}
              strokeDasharray=""
              circleSize={(d) => (d.y === tooltipData.datum.y ? 6 : 4)}
              circleStroke={(d) => {
                const currentLabel = d.label

                const color = getColor(
                  Object.keys(tooltipData.series).indexOf(currentLabel),
                )

                return d.y === tooltipData.datum.y ? '#fff' : color
              }}
              circleStyles={{ strokeWidth: 1.5 }}
              circleFill={(d) => {
                const currentLabel = d.label

                const color = getColor(
                  Object.keys(tooltipData.series).indexOf(currentLabel),
                )

                return d.y === tooltipData.datum.y ? color : '#fff'
              }}
              showCircle={true}
              showMultipleCircles={true}
            />
            <Brush disableDraggingSelection />
          </XYChart>
        )}
      </WithTooltip>

      <LegendOrdinal scale={legendScale}>
        {(labels) => (
          <div className="diagram--legend">
            {labels.map((label, i) => (
              <LegendItem
                key={`legend-${i}`}
                margin="0 5px"
                className="diagram--legendItem">
                <svg width={15} height={15}>
                  <rect fill={label.value.stroke} width={15} height={15} />
                </svg>
                <LegendLabel align="left" margin="0 0 0 4px">
                  {label.text}
                </LegendLabel>
              </LegendItem>
            ))}
          </div>
        )}
      </LegendOrdinal>
    </>
  )
}