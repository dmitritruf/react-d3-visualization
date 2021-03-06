import { FC } from 'react'

const ColorLegend: FC<{
  colorScale: any
  tickSpacing?: number
  tickSize?: number
  tickTextOffset?: number
  onHover: (domainValue: string) => void
  hoveredValue: string
  fadeOpacity: number
}> = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 20,
  onHover,
  hoveredValue,
  fadeOpacity,
}) =>
  colorScale.domain().map((domainValue: string, i: number) => (
    <g
      className="tick"
      key={domainValue}
      transform={`translate(0,${i * tickSpacing})`}
      onMouseEnter={() => {
        onHover(domainValue)
      }}
      onMouseOut={() => {
        onHover('')
      }}
      opacity={hoveredValue && domainValue !== hoveredValue ? fadeOpacity : 1}
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        {domainValue}
      </text>
    </g>
  ))

export default ColorLegend
