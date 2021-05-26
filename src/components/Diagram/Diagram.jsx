import React from 'react'
import {
  WithTooltip,
  LineSeries,
  CrossHair,
  XAxis,
  YAxis,
  XYChart,
} from '@data-ui/xy-chart'
import { LegendOrdinal, LegendItem, LegendLabel } from '@vx/legend'
import { scaleOrdinal } from '@vx/scale'

import { useWorkspaceSize } from '../../contexts/WorkspaceSizeContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useTranslation } from '../../contexts/LanguageContext'

const DOMAIN_OFFSET = 500

const COLORS = [
  '#c92a2a',
  '#862e9c',
  '#364fc7',
  '#2b8a3e',
  '#5f3dc4',
  '#e67700',
  '#d9480f',
  '#5c940d',
  '#69d2e7',
  '#f38630',
  '#f215b7',
  '#db6991',
  '#cfb5fc',
  '#ffdac9',
  '#b71013',
  '#dca2f2',
  '#42e2b8',
  '#f3dfbf',
  '#eb8a90',
  '#e55812',
  '#606ff2',
  '#dd18ca',
  '#fffa7a',
  '#f4bcab',
  '#eabb10',
  '#d4f473',
  '#07004d',
  '#2d82b7',
  '#a1869e',
  '#f4b942',
  '#e56399',
  '#f7ec59',
  '#157a6e',
  '#f75c03',
  '#6153cc',
  '#34e5ff',
  '#499f68',
  '#e0ff4f',
  '#f90093',
  '#00a6fb',
  '#05a8aa',
  '#f896d8',
  '#5c52a4',
  '#cc7d62',
  '#9a02fa',
  '#94d36f',
  '#28e364',
  '#216687',
  '#4c633c',
  '#69dbdd',
  '#969081',
  '#9c2c52',
  '#94f560',
  '#7f7672',
  '#62ee58',
  '#1c73dd',
  '#b1ad90',
  '#b7766d',
]

const LIGHT_AXIS = 'black'
const DARK_AXIS = '#e8eef4'

const getColor = (index) => COLORS[index]

const renderTooltip = (dataPoints, { translations, t }, { datum }) => {
  const dataPoint = dataPoints[datum.x]

  return (
    <div>
      <div>
        <strong>
          {translations.grossLabel}: {datum.x}
        </strong>
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
              {t(label)}:
            </span>{' '}
            {currentValue}
          </div>
        )
      })}
    </div>
  )
}

export const Diagram = ({ filters, dataSeries, dataPoints, dataRange }) => {
  const { width, height } = useWorkspaceSize()

  const { isLight } = useTheme()

  const { translations, t } = useTranslation()

  const axisColor = { stroke: isLight ? LIGHT_AXIS : DARK_AXIS }

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

  const [lowestDataPoint, highestDataPoint] = dataRange

  const yDomain = [
    Math.min(...dataPoints[lowestDataPoint].map(([_, val]) => val)) -
      DOMAIN_OFFSET,
    Math.max(...dataPoints[highestDataPoint].map(([_, val]) => val)) +
      DOMAIN_OFFSET,
  ]

  const xDomain = [filters.from - DOMAIN_OFFSET, filters.to + DOMAIN_OFFSET]

  const xNumTicks = Math.min(Math.floor(width / 50), 10)

  return (
    <>
      <WithTooltip
        renderTooltip={renderTooltip.bind(null, dataPoints, {
          translations,
          t,
        })}>
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
            <XAxis
              label={translations.grossLabel}
              numTicks={xNumTicks}
              axisStyles={axisColor}
              tickStyles={axisColor}
            />
            <YAxis
              orientation="left"
              numTicks={6}
              axisStyles={axisColor}
              tickStyles={axisColor}
            />
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
          </XYChart>
        )}
      </WithTooltip>

      <LegendOrdinal scale={legendScale}>
        {(labels) => (
          <div className="diagram__legend">
            {labels.map((label, i) => (
              <LegendItem
                key={`legend-${i}`}
                margin="0 5px"
                className="diagram__legendItem">
                <svg width={15} height={15}>
                  <rect fill={label.value.stroke} width={15} height={15} />
                </svg>
                <LegendLabel align="left" margin="0 0 0 4px">
                  {t(label.text)}
                </LegendLabel>
              </LegendItem>
            ))}
          </div>
        )}
      </LegendOrdinal>
    </>
  )
}
