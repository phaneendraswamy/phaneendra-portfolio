import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function ChartTooltip({ active, payload, label, unit }) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-3 text-sm shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-2 font-semibold text-white">
        {label.replace('W', 'Week ')}: {payload[0].value} {unit}
      </p>
    </div>
  )
}

function AnalyticsChart({ data, unit }) {
  return (
    <div className="h-44 w-full sm:h-52">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 4, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.35} />
              <stop offset="60%" stopColor="#14b8a6" stopOpacity={0.16} />
              <stop offset="100%" stopColor="#0f172a" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.14)" strokeDasharray="4 4" />
          <XAxis
            dataKey="week"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
          />
          <YAxis hide domain={['dataMin - 10', 'dataMax + 15']} />
          <Tooltip content={<ChartTooltip unit={unit} />} cursor={{ stroke: '#38bdf8', strokeOpacity: 0.35 }} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#22d3ee"
            strokeWidth={3}
            fill="url(#chartFill)"
            animationDuration={1400}
            activeDot={{ r: 6, fill: '#34d399', stroke: '#ecfeff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AnalyticsChart
