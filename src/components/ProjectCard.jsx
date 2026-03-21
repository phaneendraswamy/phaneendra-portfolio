import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import TechLogoBadge from './TechLogoBadge'

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`project-surface group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-glow dark:border-white/10 dark:bg-slate-900/70 ${
        featured ? 'xl:grid xl:grid-cols-[1.1fr_0.9fr] xl:gap-6' : ''
      }`}
    >
      <div>
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-ocean/15 via-mint/10 to-transparent opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 transition duration-300 group-hover:opacity-100 dark:to-ocean/5" />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-ocean/20 bg-ocean/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
              {project.category}
            </span>
            <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              {project.signal}
            </span>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <Sparkles size={14} className="text-ocean" />
            Case snapshot
          </span>
        </div>
        <div className="relative mt-5">
          <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
          <div className="metric-panel mt-5 rounded-3xl p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Headline value</p>
            <p className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">{project.headlineMetric}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.delivery.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-100 dark:bg-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={`mt-5 grid gap-4 ${featured ? 'lg:grid-cols-2' : ''}`}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Outcome</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{project.outcome}</p>
            </div>
            <div className="rounded-2xl border border-mint/20 bg-mint/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Why it matters</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{project.impact}</p>
            </div>
          </div>
          <div className={`mt-4 grid gap-4 ${featured ? 'lg:grid-cols-2' : ''}`}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Impact metrics</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.impactMetrics.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ocean/20 bg-ocean/10 px-3 py-1 text-xs font-semibold text-ocean"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Architecture preview</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.architecture.map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">
                      {item}
                    </span>
                    {index < project.architecture.length - 1 && (
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-6 ${featured ? 'xl:mt-0 xl:flex xl:flex-col xl:justify-between' : ''}`}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Tech stack</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.techStack.map((tech) => (
              <TechLogoBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-ocean/40 hover:text-ocean dark:border-white/10 dark:text-slate-100"
          >
            <Github size={16} />
            GitHub
          </a>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          )}
          <span className="text-sm font-semibold text-ocean opacity-0 transition duration-300 group-hover:opacity-100">
            View Case Study
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
