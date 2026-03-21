import SectionHeading from '../components/SectionHeading'

function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="section-panel px-6 py-14 sm:px-10">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for analytics delivery, intelligent automation, and AI-driven product thinking."
        description="I enjoy moving between data preparation, modeling, visualization, and AI-powered user experiences. That range helps me connect technical implementation with real decision-making needs."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="reveal-card rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ocean/30 dark:border-white/10 dark:bg-slate-900/60"
          >
            <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-5 grid gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition duration-300 hover:border-mint/40 hover:bg-mint/10 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
