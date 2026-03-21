import { useState } from 'react'

const TECH_STYLES = {
  Python: {
    logo: 'https://cdn.simpleicons.org/python/3776AB',
    tone: 'from-sky-500/20 to-cyan-400/10',
    ring: 'border-sky-400/30',
    text: 'text-sky-200',
  },
  Streamlit: {
    logo: 'https://cdn.simpleicons.org/streamlit/FF4B4B',
    tone: 'from-rose-500/20 to-orange-400/10',
    ring: 'border-rose-400/30',
    text: 'text-rose-200',
  },
  Go: {
    logo: 'https://cdn.simpleicons.org/go/00ADD8',
    tone: 'from-cyan-500/20 to-sky-400/10',
    ring: 'border-cyan-400/30',
    text: 'text-cyan-100',
  },
  'Power BI': {
    logo: 'https://cdn.simpleicons.org/powerbi/F2C811',
    tone: 'from-yellow-500/20 to-amber-400/10',
    ring: 'border-yellow-400/30',
    text: 'text-yellow-100',
  },
  OpenAI: {
    logo: 'https://cdn.simpleicons.org/openai/FFFFFF',
    tone: 'from-emerald-500/20 to-lime-400/10',
    ring: 'border-emerald-400/30',
    text: 'text-emerald-100',
  },
  Snowflake: {
    logo: 'https://cdn.simpleicons.org/snowflake/29B5E8',
    tone: 'from-cyan-500/20 to-blue-400/10',
    ring: 'border-cyan-400/30',
    text: 'text-cyan-100',
  },
  OpenCV: {
    logo: 'https://cdn.simpleicons.org/opencv/5C3EE8',
    tone: 'from-lime-500/20 to-emerald-400/10',
    ring: 'border-lime-400/30',
    text: 'text-lime-100',
  },
  LLMs: { mark: 'AI', tone: 'from-fuchsia-500/20 to-indigo-400/10', ring: 'border-fuchsia-400/30', text: 'text-fuchsia-200' },
  SQL: { mark: 'SQL', tone: 'from-emerald-500/20 to-teal-400/10', ring: 'border-emerald-400/30', text: 'text-emerald-200' },
  APIs: { mark: 'API', tone: 'from-amber-500/20 to-yellow-400/10', ring: 'border-amber-400/30', text: 'text-amber-100' },
  Concurrency: { mark: 'CC', tone: 'from-violet-500/20 to-blue-400/10', ring: 'border-violet-400/30', text: 'text-violet-200' },
  'Data Pipelines': { mark: 'DP', tone: 'from-teal-500/20 to-emerald-400/10', ring: 'border-teal-400/30', text: 'text-teal-100' },
  Compression: { mark: 'ZIP', tone: 'from-slate-500/20 to-slate-300/10', ring: 'border-slate-400/30', text: 'text-slate-200' },
  'Deep Learning': { mark: 'DL', tone: 'from-indigo-500/20 to-fuchsia-400/10', ring: 'border-indigo-400/30', text: 'text-indigo-100' },
  OCR: { mark: 'OCR', tone: 'from-orange-500/20 to-amber-400/10', ring: 'border-orange-400/30', text: 'text-orange-100' },
  Embeddings: { mark: 'EM', tone: 'from-pink-500/20 to-violet-400/10', ring: 'border-pink-400/30', text: 'text-pink-100' },
  NLP: { mark: 'NLP', tone: 'from-purple-500/20 to-indigo-400/10', ring: 'border-purple-400/30', text: 'text-purple-100' },
  'Vector Search': { mark: 'VS', tone: 'from-sky-500/20 to-blue-400/10', ring: 'border-sky-400/30', text: 'text-sky-100' },
}

function TechLogoBadge({ tech }) {
  const [imageFailed, setImageFailed] = useState(false)
  const style = TECH_STYLES[tech] || {
    mark: tech.slice(0, 2).toUpperCase(),
    tone: 'from-slate-500/20 to-slate-300/10',
    ring: 'border-slate-400/30',
    text: 'text-slate-100',
  }

  return (
    <div className={`tech-chip ${style.ring}`}>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${style.ring} bg-gradient-to-br ${style.tone} ${style.text}`}
      >
        {style.logo && !imageFailed ? (
          <img
            src={style.logo}
            alt={`${tech} logo`}
            className="h-5 w-5 object-contain"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
            {style.mark || tech.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{tech}</p>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">stack</p>
      </div>
    </div>
  )
}

export default TechLogoBadge
