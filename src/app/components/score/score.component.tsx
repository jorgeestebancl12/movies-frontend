// Properties
import { ScoreProperties } from "./score.properties";

export function ScoreComponent(properties: ScoreProperties) {
  const radius = properties.size / 2 - 1;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (properties.percentage / 100) * circumference;

  return (
    <svg width={properties.size} height={properties.size}>
      <g
        transform={`rotate(-90 ${properties.size / 2} ${properties.size / 2})`}
      >
        <circle
          r={radius}
          cx={properties.size / 2}
          cy={properties.size / 2}
          fill="transparent"
          stroke="lightgrey"
          strokeWidth="1px"
          strokeDasharray={circumference}
          strokeDashoffset="0"
        ></circle>
        <circle
          r={radius}
          cx={properties.size / 2}
          cy={properties.size / 2}
          fill="transparent"
          stroke="#4DA14F"
          strokeWidth="1px"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        ></circle>
      </g>
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="#FFF"
        fontSize={`${properties.size * 0.38}px`}
      >
        {properties.percentage}%
      </text>
    </svg>
  );
}
