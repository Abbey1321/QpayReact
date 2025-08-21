export default function ProgressRing({ size=120, stroke=10, progress=30 }){
  const radius = (size - stroke)/2
  const circumference = 2 * Math.PI * radius
  const dash = (progress/100) * circumference

  return (
    <svg className="progress-ring" width={size} height={size} role="img" aria-label={`Profile ${progress}% complete`}>
      <circle
        className="ring-bg"
        strokeWidth={stroke}
        fill="transparent"
        r={radius}
        cx={size/2}
        cy={size/2}
      />
      <circle
        className="ring-fg"
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${circumference-dash}`}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={size/2}
        cy={size/2}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="ring-text">{progress}%</text>
    </svg>
  )
}