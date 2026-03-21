import { Download, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const RESUME_VIEW_URL = 'https://drive.google.com/file/d/19I-0BGRPnsSM00WoSccfLqMG6Mc80-Pg/view?usp=sharing'
const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=19I-0BGRPnsSM00WoSccfLqMG6Mc80-Pg'
const RESUME_PREVIEW_URL = 'https://drive.google.com/file/d/19I-0BGRPnsSM00WoSccfLqMG6Mc80-Pg/preview'

function ResumeSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section id="resume" className="section-panel px-4 py-10 sm:px-8 sm:py-14">
      <SectionHeading
        eyebrow="Resume"
        title="Quick access to my professional experience and projects"
        description=""
      />
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={RESUME_DOWNLOAD_URL}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 sm:w-auto"
        >
          <Download size={18} />
          Download Resume
        </a>
        <a
          href={RESUME_VIEW_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-mint/40 hover:text-mint dark:border-white/10 dark:bg-white/5 dark:text-slate-100 sm:w-auto"
        >
          <ExternalLink size={18} />
          View Online
        </a>
      </div>
      <div className="mt-6 resume-frame rounded-[1.5rem] p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950/70">
          {!isLoaded && (
            <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-white via-slate-100 to-sky-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
          )}
          <iframe
            src={RESUME_PREVIEW_URL}
            title="Resume preview"
            width="100%"
            height="600"
            className="resume-embed block w-full border-0"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
