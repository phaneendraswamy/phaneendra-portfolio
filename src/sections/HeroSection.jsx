import { ArrowDownRight, Download, Github, Linkedin, Sparkles } from 'lucide-react'
import { Suspense, lazy, useMemo, useState } from 'react'

const AnalyticsChart = lazy(() => import('../components/AnalyticsChart'))
const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=19I-0BGRPnsSM00WoSccfLqMG6Mc80-Pg'

function HeroSection({ metrics, capabilityTracks, chartSeries, credibilitySignals, profileLinks }) {
  const chartKeys = useMemo(() => Object.keys(chartSeries), [chartSeries])
  const [selectedMetric, setSelectedMetric] = useState(chartKeys[0])
  const activeSeries = chartSeries[selectedMetric]

  return (
    <section
      id="home"
      className="section-panel relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/10 via-transparent to-mint/10" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div className="min-w-0">
          <div className="flex w-full min-w-0 max-w-full items-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 sm:inline-flex sm:w-auto sm:px-4 sm:text-sm">
            <Sparkles size={16} className="text-mint" />
            <span className="truncate">Building AI-powered analytics systems that turn data into decisions</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 sm:mt-6 sm:text-6xl lg:text-7xl dark:text-white">
            Phaneendra
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-semibold text-ocean sm:mt-4 sm:text-2xl">
            Data Analyst &amp; AI Engineer
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8 dark:text-slate-300">
            I design practical AI and analytics products that make data understandable, usable, and valuable for
            teams making fast decisions.
          </p>
          <div className="mt-6 grid min-w-0 gap-3 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="data-card reveal-card min-w-0 rounded-2xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                <p className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 sm:w-auto"
            >
              View Projects
              <ArrowDownRight size={18} />
            </a>
            <a
              href={RESUME_DOWNLOAD_URL}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-mint/40 hover:text-mint dark:border-white/10 dark:bg-white/5 dark:text-slate-100 sm:w-auto"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>
          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
            <a
              href={profileLinks.linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-ocean/40 hover:text-ocean dark:border-white/10 dark:bg-white/5 dark:text-slate-100 sm:justify-start"
            >
              <Linkedin size={16} />
              <span className="truncate sm:hidden">LinkedIn</span>
              <span className="hidden truncate sm:inline">{profileLinks.linkedin.display}</span>
            </a>
            <a
              href={profileLinks.github.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-ocean/40 hover:text-ocean dark:border-white/10 dark:bg-white/5 dark:text-slate-100 sm:justify-start"
            >
              <Github size={16} />
              <span className="truncate sm:hidden">GitHub</span>
              <span className="hidden truncate sm:inline">{profileLinks.github.display}</span>
            </a>
          </div>
          <div className="mt-6 grid min-w-0 gap-3">
            {credibilitySignals.map((signal) => (
              <div key={signal.label} className="data-card reveal-card min-w-0 rounded-2xl px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{signal.label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{signal.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-w-0">
          <div className="absolute -left-6 top-8 h-24 w-24 animate-pulseSoft rounded-full bg-mint/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-28 w-28 animate-float rounded-full bg-ocean/20 blur-3xl" />
          <div className="relative min-w-0 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-glow sm:p-6 dark:border-white/10 dark:bg-slate-900/80">
            <div className="flex min-w-0 items-center justify-between gap-3 sm:gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm">Analytics Command Center</p>
              <span className="rounded-full bg-mint/10 px-3 py-1 text-[11px] font-semibold text-mint sm:text-xs">Live portfolio view</span>
            </div>
            <div className="mt-6 grid min-w-0 gap-4 sm:mt-8">
              <div className="data-card reveal-card min-w-0 rounded-3xl p-4 sm:p-5">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Signal Overview</p>
                    <p className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">Decision intelligence</p>
                  </div>
                  <span className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-semibold text-ocean">AI + BI</span>
                </div>
                <div className="-mx-1 mt-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                  {chartKeys.map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedMetric(key)}
                      className={`shrink-0 snap-start rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                        selectedMetric === key
                          ? 'bg-ocean text-white shadow-glow'
                          : 'border border-slate-200 bg-white text-slate-600 hover:border-ocean/40 hover:text-ocean dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
                      }`}
                    >
                      {chartSeries[key].label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 min-w-0 rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-3 sm:p-4">
                  <Suspense
                    fallback={<div className="h-44 animate-pulse rounded-[1.25rem] bg-white/5 sm:h-52" />}
                  >
                    <AnalyticsChart data={activeSeries.data} unit={activeSeries.unit} />
                  </Suspense>
                  <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">AI Insight</p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">{activeSeries.insight}</p>
                    </div>
                    <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">
                      Live trend
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid min-w-0 items-start gap-4 sm:grid-cols-[140px_minmax(0,1fr)] lg:grid-cols-[160px_minmax(0,1fr)]">
                <div className="grid min-w-0 gap-4">
                  <div className="data-card reveal-card inline-flex w-fit justify-self-center self-start rounded-3xl p-3 sm:justify-self-start">
                    <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
                      <img
                        src="/profile.png"
                        alt="Portrait of Phaneendra"
                        className="h-28 w-28 object-cover sm:h-32 sm:w-32"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="data-card reveal-card rounded-3xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Live status</p>
                    <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">Open to data, BI, and AI roles</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_16px_rgba(52,211,153,0.75)]" />
                      <span className="text-xs uppercase tracking-[0.2em] text-mint">Available</span>
                    </div>
                  </div>
                </div>
                <div className="grid min-w-0 gap-4">
                  <div className="data-card reveal-card min-w-0 rounded-2xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Profile signal</p>
                    <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                      Blending analytical depth with AI product execution
                    </p>
                  </div>
                  <div className="data-card reveal-card min-w-0 rounded-2xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Working style</p>
                    <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                      Business-focused, experiment-driven, and production-minded
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <div className="data-card reveal-card min-w-0 rounded-2xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Primary workflow</p>
                  <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                    Data pipelines to dashboard insights to AI interfaces
                  </p>
                </div>
                <div className="data-card reveal-card min-w-0 rounded-2xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Current direction</p>
                  <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">
                    Copilots, retrieval systems, and production-ready analytics UX
                  </p>
                </div>
              </div>
              <div className="grid gap-3">
                {capabilityTracks.map((track) => (
                  <div key={track.title} className="data-card reveal-card rounded-2xl p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">{track.title}</p>
                      <span className="h-2 w-2 rounded-full bg-mint" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{track.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
