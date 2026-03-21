import { ArrowRight, BrainCircuit, ChartNoAxesCombined, DatabaseZap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const proofPoints = [
  {
    icon: ChartNoAxesCombined,
    title: 'Analytics that drive action',
    description: 'Build KPI views and business-facing dashboards that reduce time spent interpreting raw numbers.',
  },
  {
    icon: BrainCircuit,
    title: 'AI layered on top of strong data foundations',
    description: 'Use LLMs and retrieval thoughtfully, with grounded outputs tied back to structured information.',
  },
  {
    icon: DatabaseZap,
    title: 'Engineering that respects scale',
    description: 'Think about concurrency, pipeline reliability, and downstream usability from the start.',
  },
]

function ResultsSection({ metrics, capabilityTracks, caseStudy }) {
  return (
    <section id="impact" className="section-panel px-4 py-10 sm:px-8 sm:py-14">
      <SectionHeading
        eyebrow="Impact"
        title="A portfolio shaped around outcomes, analytical clarity, and practical AI delivery."
        description="The goal is not just to build models or dashboards in isolation. It is to create systems that help teams move from raw data to confident decisions with less friction."
      />
      <div className="mt-10 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {proofPoints.map((point) => {
            const Icon = point.icon
            return (
              <article key={point.title} className="data-card rounded-3xl p-6">
                <div className="inline-flex rounded-2xl bg-ocean/10 p-3 text-ocean">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-950 dark:text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{point.description}</p>
              </article>
            )
          })}
        </div>
        <article className="data-card rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Featured Work</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">{caseStudy.title}</h3>
            </div>
            <span className="rounded-full bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">Case study lens</span>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">{caseStudy.summary}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
                <p className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/40">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Challenge</p>
              <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{caseStudy.challenge}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/40">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Approach</p>
              <div className="mt-4 space-y-3">
                {caseStudy.approach.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-ocean" />
                    <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/40">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">What this signals</p>
              <ArrowRight size={18} className="text-mint" />
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {caseStudy.outcomes.concat(capabilityTracks[0]?.description || '').filter(Boolean).map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ResultsSection
