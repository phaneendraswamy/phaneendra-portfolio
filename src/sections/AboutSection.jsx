import { BriefcaseBusiness, Cpu, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Engineering foundation',
    description: 'Electronics and Communication Engineering background that helps me think in systems, not just screens or dashboards.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Current role',
    description: 'Working as a Junior Data Analyst, translating operational data into clearer business visibility and faster decision-making.',
  },
  {
    icon: Cpu,
    title: 'Growth focus',
    description: 'Expanding into AI, ML, and analytics engineering to build intelligent products that stay useful beyond the prototype stage.',
  },
]

function AboutSection() {
  return (
    <section id="about" className="section-panel px-6 py-14 sm:px-10">
      <SectionHeading
        eyebrow="About"
        title="Analytical thinking shaped by engineering and sharpened by real-world data work."
        description="I bring together structured problem-solving, business curiosity, and applied AI thinking to create systems that do more than report metrics. My work is focused on helping teams discover what matters, understand why it matters, and act with confidence."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon
          return (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-ocean/40 dark:border-white/10 dark:bg-white/5"
            >
              <div className="inline-flex rounded-2xl bg-ocean/10 p-3 text-ocean">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutSection
