import { Github, Linkedin, Mail } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const contacts = [
  {
    label: 'Email',
    value: 'swamy03312@gmail.com',
    href: 'mailto:swamy03312@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/phaneendra-swamy',
    href: 'https://www.linkedin.com/in/phaneendra-swamy-bb9608177/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/phaneendraswamy',
    href: 'https://github.com/phaneendraswamy',
    icon: Github,
  },
]

function ContactSection() {
  return (
    <section id="contact" className="section-panel px-6 py-14 sm:px-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build analytics experiences that feel intelligent, clear, and useful."
        description="If you are hiring for data, BI, analytics engineering, or applied AI roles, I'd love to connect and talk through how I can contribute."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {contacts.map((contact) => {
          const Icon = contact.icon
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-ocean/40 dark:border-white/10 dark:bg-white/5"
            >
              <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-ocean dark:bg-white/5">
                <Icon size={22} />
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-slate-400">{contact.label}</p>
              <p className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{contact.value}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default ContactSection
