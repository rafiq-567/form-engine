export default function CircularProgressField({ field }) {
  const r = 28, cx = 36, cy = 36;
  const circumference = 2 * Math.PI * r;
  const progress = 0.7;
  return (
    <div className="flex items-center gap-4">
      <svg width="72" height="72">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e5e7eb" strokeWidth="6" />
        <circle
          cx={cx} cy={cy} r={r} fill="none"
          stroke="#eab308" strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`}
        />
        <text x={cx} y={cy + 5} textAnchor="middle" className="text-xs" fontSize="12" fill="#374151">70%</text>
      </svg>
      <span className="text-sm text-gray-600">{field.label}</span>
    </div>
  );
}