import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar({ items, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div className="section-panel flex items-center justify-between px-4 py-3 shadow-glow">
          <a href="#home" className="font-display text-lg font-bold tracking-wide text-slate-900 dark:text-white">
            Phaneendra
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <a
              href="#contact"
              className="rounded-full border border-ocean/40 bg-ocean/10 px-4 py-2 text-sm font-semibold text-ocean transition hover:bg-ocean hover:text-white"
            >
              Let&apos;s Talk
            </a>
          </div>
          <button
            type="button"
            className="rounded-full border border-slate-300 p-2 text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-100 dark:hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isOpen && (
          <div className="section-panel mt-2 flex flex-col gap-4 px-4 py-4 md:hidden">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-800 dark:text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <a
                href="#contact"
                className="rounded-full border border-ocean/40 bg-ocean/10 px-4 py-2 text-center text-sm font-semibold text-ocean"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
