import { BotMessageSquare, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

function ChatWidget({ prompts = [] }) {
  const [selectedPrompt, setSelectedPrompt] = useState(prompts[0] || null)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (!selectedPrompt) {
      setTypedText('')
      return
    }

    const responseText = [
      `Project: ${selectedPrompt.response.project}`,
      `What it does: ${selectedPrompt.response.whatItDoes}`,
      `Why it matters: ${selectedPrompt.response.whyItMatters}`,
      `Tech stack: ${selectedPrompt.response.techStack.join(', ')}`,
    ].join('\n')

    setTypedText('')
    let currentIndex = 0

    const timer = setInterval(() => {
      currentIndex += 1
      setTypedText(responseText.slice(0, currentIndex))

      if (currentIndex >= responseText.length) {
        clearInterval(timer)
      }
    }, 12)

    return () => clearInterval(timer)
  }, [selectedPrompt])

  return (
    <aside className="fixed bottom-4 right-4 z-40 hidden max-w-sm rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-950/90 xl:block">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-ocean/10 p-3 text-ocean">
          <BotMessageSquare size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">AI Portfolio Assistant</p>
          <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Lightweight recruiter assistant with structured project answers and no backend required.
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {prompts.map((item) => (
          <button
            key={item.question}
            type="button"
            onClick={() => setSelectedPrompt(item)}
            className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition duration-300 ${
              selectedPrompt?.question === item.question
                ? 'border-mint/40 bg-mint/10 text-slate-900 shadow-[0_0_0_1px_rgba(52,211,153,0.18),0_10px_24px_rgba(52,211,153,0.12)] dark:text-white'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-mint/40 hover:bg-mint/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
            }`}
          >
            {item.question}
          </button>
        ))}
      </div>
      {selectedPrompt && (
        <div className="mt-4 rounded-2xl border border-ocean/20 bg-ocean/10 px-4 py-4 transition-all duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">AI response</p>
          <div className="mt-3 space-y-3">
            <div className="rounded-2xl border border-white/30 bg-white/60 px-3 py-3 dark:border-white/10 dark:bg-slate-950/30">
              <pre className="whitespace-pre-wrap font-body text-sm leading-6 text-slate-700 dark:text-slate-200">
                {typedText}
                <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-ocean/70 align-middle" />
              </pre>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedPrompt.response.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ocean/20 bg-white/80 px-3 py-1 text-xs font-semibold text-ocean dark:bg-slate-950/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 flex items-center gap-2 rounded-2xl border border-mint/20 bg-mint/10 px-4 py-3 text-sm text-mint">
        <Sparkles size={16} />
        Structured portfolio Q&A with typing animation and smooth transitions.
      </div>
    </aside>
  )
}

export default ChatWidget
