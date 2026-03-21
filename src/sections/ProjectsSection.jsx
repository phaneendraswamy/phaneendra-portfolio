import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

function ProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [projects])
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'All' || project.category === activeFilter),
    [activeFilter, projects],
  )
  const [featuredProject, ...remainingProjects] = visibleProjects

  return (
    <section id="projects" className="section-panel px-4 py-10 sm:px-8 sm:py-14">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across analytics, machine learning, AI products, and pipeline engineering."
        description="Each project is framed around the problem, the build approach, and the kind of decision support or operational value it creates."
      />
      <div className="-mx-1 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 snap-start rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? 'bg-ocean text-white shadow-glow'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-ocean/40 hover:text-ocean dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {featuredProject && (
        <div className="mt-10">
          <ProjectCard project={featuredProject} featured />
        </div>
      )}
      <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-2">
        {remainingProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
