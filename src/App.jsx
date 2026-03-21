import { useEffect, useMemo, useState } from 'react'
import ChatWidget from './components/ChatWidget'
import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import ResumeSection from './sections/ResumeSection'
import ResultsSection from './sections/ResultsSection'
import SkillsSection from './sections/SkillsSection'

const projectItems = [
  {
    title: 'AI Revenue Intelligence Copilot',
    category: 'AI Apps',
    signal: 'Featured build',
    description:
      'A chat-based analytics assistant that turns business questions into SQL, narratives, and next-step recommendations for revenue teams.',
    outcome: 'Reduced analyst back-and-forth by surfacing KPI answers in seconds.',
    impact: 'Natural-language KPI exploration with grounded data responses',
    headlineMetric: 'NLQ to KPI answers in seconds',
    delivery: ['Intent mapping', 'SQL generation', 'Narrative responses'],
    impactMetrics: ['2.5x faster stakeholder Q&A', '40% less analyst dependency'],
    architecture: ['API', 'DB', 'LLM', 'Dashboard'],
    techStack: ['Python', 'LLMs', 'SQL', 'Streamlit', 'APIs'],
    githubLink: 'https://github.com/phaneendraswamy',
    demoLink: 'https://www.linkedin.com/posts/phaneendra-swamy-bb9608177_ai-dataanalytics-sql-activity-7429579871686672384-z0Pw',
  },
  {
    title: 'Healthcare MRF Processing Engine (Go)',
    category: 'Data Engineering',
    signal: 'Scale-first pipeline',
    description:
      'High-throughput Go pipeline for processing large compressed machine-readable files with concurrent workers and resilient parsing.',
    outcome: 'Made large healthcare price transparency files usable for downstream analytics.',
    impact: 'Concurrent ingestion workflow designed for scale and resilience',
    headlineMetric: 'Built for large-file ingestion reliability',
    delivery: ['Concurrent workers', 'Compression handling', 'Schema-safe parsing'],
    impactMetrics: ['Handled 500K+ records', '60% faster processing time'],
    architecture: ['Files', 'Go Workers', 'Parser', 'Analytics Store'],
    techStack: ['Go', 'Concurrency', 'Data Pipelines', 'Compression'],
    githubLink: 'https://github.com/phaneendraswamy',
  },
  {
    title: 'Sales Dashboard with AI Insights',
    category: 'Analytics',
    signal: 'Executive reporting',
    description:
      'Executive dashboard that combines core business KPIs with AI-generated summaries for faster executive decision-making.',
    outcome: 'Compressed dashboard review time with instant narrative summaries.',
    impact: 'Executive-ready reporting with contextual AI commentary',
    headlineMetric: 'Narrative insight layered over BI reporting',
    delivery: ['KPI design', 'Power BI dashboards', 'AI summaries'],
    impactMetrics: ['10+ dashboards delivered', '30-40% efficiency gain'],
    architecture: ['API', 'DB', 'AI Layer', 'Power BI'],
    techStack: ['Power BI', 'Python', 'OpenAI', 'Snowflake'],
    githubLink: 'https://github.com/phaneendraswamy/OLApowerbi',
  },
  {
    title: 'Movie Recommendation Project',
    category: 'ML',
    signal: 'Recommendation engine',
    description:
      'Recommendation workflow that helps users discover relevant movies by comparing preferences, metadata, and similarity signals.',
    outcome: 'Turned raw movie features into a practical content discovery experience.',
    impact: 'Shows applied ML thinking for ranking and personalized suggestions',
    headlineMetric: 'Similarity-driven recommendations for faster discovery',
    delivery: ['Recommendation logic', 'Feature similarity', 'User-centric ranking'],
    impactMetrics: ['1M+ movie signals modeled', 'Personalized ranking workflow'],
    architecture: ['Dataset', 'Features', 'ML Model', 'Recommendation UI'],
    techStack: ['Python', 'Machine Learning', 'NLP', 'APIs'],
    githubLink: 'https://github.com/phaneendraswamy/movie-recomendation-project',
  },
  {
    title: 'Educational Chatbot',
    category: 'AI Apps',
    signal: 'Retrieval experience',
    description:
      'Semantic search assistant powered by LLMs and embeddings to help learners retrieve precise content faster.',
    outcome: 'Improved information retrieval quality over basic keyword search.',
    impact: 'Embeddings-driven retrieval for precise content discovery',
    headlineMetric: 'Search quality improved with semantic retrieval',
    delivery: ['Embeddings', 'Vector search', 'Conversational UX'],
    impactMetrics: ['Higher relevance answers', 'Lower search friction for learners'],
    architecture: ['Content', 'Embeddings', 'Vector DB', 'Chat UI'],
    techStack: ['Embeddings', 'NLP', 'Vector Search', 'Python'],
    githubLink: 'https://github.com/phaneendraswamy/imarticus-chatbot',
  },
]

const skillGroups = [
  {
    title: 'Analytics Stack',
    items: [
      { name: 'SQL', description: 'Used for analytical modeling, KPI queries, and reporting logic.' },
      { name: 'Power BI', description: 'Built executive dashboards and performance views for stakeholders.' },
      { name: 'Excel', description: 'Used for quick validation, ad hoc analysis, and business-ready summaries.' },
      { name: 'Snowflake', description: 'Built warehouse-driven reporting workflows and structured data layers.' },
      { name: 'Data Storytelling', description: 'Translated raw data into clear, decision-friendly business narratives.' },
    ],
  },
  {
    title: 'AI Product Build',
    items: [
      { name: 'Python', description: 'Used for ML pipelines, automation, analytics apps, and APIs.' },
      { name: 'LLMs', description: 'Applied for copilots, summaries, and natural-language analytics experiences.' },
      { name: 'Prompt Design', description: 'Structured prompts to keep outputs grounded, useful, and on-task.' },
      { name: 'APIs', description: 'Connected services across analytics tooling and AI product workflows.' },
      { name: 'Streamlit', description: 'Built fast interactive prototypes for AI and analytics products.' },
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      { name: 'Machine Learning', description: 'Applied ranking, recommendation, and predictive logic to product use cases.' },
      { name: 'NLP', description: 'Used for semantic retrieval, chatbot experiences, and text intelligence.' },
      { name: 'Feature Engineering', description: 'Prepared raw business signals into model-friendly inputs.' },
      { name: 'OCR', description: 'Worked with text extraction workflows for image and document processing.' },
      { name: 'OpenCV', description: 'Used for preprocessing and computer vision experimentation.' },
    ],
  },
  {
    title: 'Data Engineering',
    items: [
      { name: 'Go', description: 'Built efficient concurrent services for high-throughput data processing.' },
      { name: 'Data Pipelines', description: 'Moved raw inputs into analysis-ready datasets with reliable transformations.' },
      { name: 'Concurrency', description: 'Used worker-based processing patterns to improve throughput at scale.' },
      { name: 'Informatica', description: 'Worked with ETL-style integration and transformation workflows.' },
      { name: 'Automation', description: 'Reduced repetitive reporting and manual operations through scripting.' },
    ],
  },
]

const metrics = [
  { label: 'Projects built', value: '5+', detail: 'Analytics, AI apps, ML, and pipelines' },
  { label: 'Data processed', value: '1M+ records', detail: 'Across pipelines, BI systems, and intelligent products' },
  { label: 'Dashboards delivered', value: '10+', detail: 'Executive-ready reporting experiences and KPI views' },
  { label: 'Performance impact', value: '30-40%', detail: 'Efficiency gains through automation and analytics UX' },
]

const credibilitySignals = [
  { label: 'Current track', value: 'Junior Data Analyst building toward AI + Analytics Engineering' },
  { label: 'Public proof', value: 'LinkedIn demos and GitHub project repos available' },
  { label: 'Hiring fit', value: 'Best aligned for Data Analyst, BI, Analytics Engineer, and AI product roles' },
]

const chartSeries = {
  engagement: {
    label: 'User engagement',
    insight: 'User engagement increased by 2.5x in last 6 weeks',
    unit: 'users',
    data: [
      { week: 'W1', value: 120 },
      { week: 'W2', value: 180 },
      { week: 'W3', value: 90 },
      { week: 'W4', value: 250 },
      { week: 'W5', value: 220 },
      { week: 'W6', value: 300 },
    ],
  },
  processed: {
    label: 'Records processed',
    insight: 'Pipeline throughput scaled steadily as the workflow matured',
    unit: 'k rows',
    data: [
      { week: 'W1', value: 140 },
      { week: 'W2', value: 160 },
      { week: 'W3', value: 210 },
      { week: 'W4', value: 260 },
      { week: 'W5', value: 245 },
      { week: 'W6', value: 320 },
    ],
  },
  efficiency: {
    label: 'Efficiency gain',
    insight: 'Operational efficiency improved as BI and AI layers reduced repeat effort',
    unit: '%',
    data: [
      { week: 'W1', value: 8 },
      { week: 'W2', value: 12 },
      { week: 'W3', value: 16 },
      { week: 'W4', value: 24 },
      { week: 'W5', value: 31 },
      { week: 'W6', value: 38 },
    ],
  },
}

const capabilityTracks = [
  {
    title: 'Analytics Delivery',
    description: 'Translate operational data into KPI systems, business dashboards, and decision-ready reporting.',
  },
  {
    title: 'AI Experience Design',
    description: 'Build copilots and retrieval workflows that make complex data easier to query and act on.',
  },
  {
    title: 'Production Thinking',
    description: 'Design pipelines and application flows that stay useful outside demos and scale with the problem.',
  },
]

const caseStudy = {
  title: 'Featured Case Study: AI Revenue Intelligence Copilot',
  summary:
    'A practical assistant for revenue teams that combines structured data access with LLM-based reasoning, so users can ask business questions in plain language and get data-backed answers fast.',
  challenge:
    'Business stakeholders often depend on analysts for every follow-up question, which slows down exploration and leaves too much insight locked behind SQL or dashboard navigation.',
  approach: [
    'Mapped natural-language questions to analytical intents like revenue trends, segment comparisons, and exception detection.',
    'Connected a structured SQL layer to an LLM response layer so answers stayed grounded in actual business data.',
    'Presented outputs as KPI summaries, narrative explanations, and recommended next actions in a lightweight interface.',
  ],
  outcomes: [
    'Created a faster path from question to answer for non-technical users.',
    'Demonstrated how AI can support decision-making without replacing core analytics foundations.',
    'Showcased the blend of data modeling, prompt orchestration, and product thinking needed for modern AI analytics tools.',
  ],
}

const chatPrompts = [
  {
    question: 'Which project handles scale?',
    response: {
      project: 'Healthcare MRF Processing Engine (Go)',
      whatItDoes: 'Processes large compressed healthcare machine-readable files with concurrent workers and resilient parsing.',
      whyItMatters: 'It demonstrates production-minded scale thinking, faster throughput, and reliable downstream analytics readiness.',
      techStack: ['Go', 'Concurrency', 'Data Pipelines', 'Compression'],
    },
  },
  {
    question: 'Show me ML work',
    response: {
      project: 'Movie Recommendation Project',
      whatItDoes: 'Builds recommendation flows by comparing movie metadata, similarity signals, and ranking logic.',
      whyItMatters: 'It shows applied machine learning thinking focused on personalization, discovery, and user-facing relevance.',
      techStack: ['Python', 'Machine Learning', 'NLP', 'APIs'],
    },
  },
  {
    question: 'What tools are used in production?',
    response: {
      project: 'Sales Dashboard with AI Insights',
      whatItDoes: 'Combines KPI reporting with AI summaries to make dashboards easier for business users to scan and act on.',
      whyItMatters: 'It reflects tools commonly used in production analytics environments, especially for stakeholder-facing reporting.',
      techStack: ['Power BI', 'Python', 'OpenAI', 'Snowflake'],
    },
  },
  {
    question: 'How are pipelines designed?',
    response: {
      project: 'AI Revenue Intelligence Copilot',
      whatItDoes: 'Moves from structured data sources into SQL-backed reasoning, then into narrative outputs and dashboard-style decision support.',
      whyItMatters: 'It shows how pipelines can be designed around business questions, not just raw data movement.',
      techStack: ['Python', 'SQL', 'LLMs', 'Streamlit', 'APIs'],
    },
  },
]

const profileLinks = {
  linkedin: {
    label: 'LinkedIn',
    display: 'linkedin.com/in/phaneendra-swamy',
    href: 'https://www.linkedin.com/in/phaneendra-swamy-bb9608177/',
  },
  github: {
    label: 'GitHub',
    display: 'github.com/phaneendraswamy',
    href: 'https://github.com/phaneendraswamy',
  },
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const body = document.body
    body.classList.toggle('light', theme === 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const navItems = useMemo(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Impact', href: '#impact' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Resume', href: '#resume' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  return (
    <div className="relative overflow-x-hidden">
      <div className={`pointer-events-none absolute inset-0 ${theme === 'light' ? 'opacity-55' : 'opacity-80'}`}>
        <div
          className={`absolute left-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full blur-3xl ${
            theme === 'light' ? 'bg-ocean/8' : 'bg-ocean/12'
          }`}
        />
        <div
          className={`absolute right-[-10rem] top-[22rem] h-[30rem] w-[30rem] rounded-full blur-3xl ${
            theme === 'light' ? 'bg-mint/7' : 'bg-mint/10'
          }`}
        />
        <div
          className={`absolute left-[12%] top-[34rem] h-40 w-40 rotate-12 rounded-[2rem] blur-[1px] ${
            theme === 'light' ? 'border border-sky-200/70 bg-white/50' : 'border border-white/10 bg-white/5'
          }`}
        />
        <div
          className={`absolute right-[16%] top-[12rem] h-56 w-56 rounded-full ${
            theme === 'light' ? 'border border-sky-300/40' : 'border border-ocean/20'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-[18rem] h-px bg-gradient-to-r from-transparent ${
            theme === 'light' ? 'via-sky-300/45' : 'via-ocean/30'
          } to-transparent`}
        />
      </div>
      <div
        className={`pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:72px_72px] ${
          theme === 'light' ? 'opacity-10' : 'opacity-20'
        }`}
      />
      <Navbar items={navItems} theme={theme} setTheme={setTheme} />
      <main className="container-shell relative z-10 flex flex-col gap-6 pb-16 pt-24 sm:gap-8">
        <HeroSection
          metrics={metrics}
          capabilityTracks={capabilityTracks}
          chartSeries={chartSeries}
          credibilitySignals={credibilitySignals}
          profileLinks={profileLinks}
        />
        <AboutSection />
        <ResultsSection metrics={metrics} capabilityTracks={capabilityTracks} caseStudy={caseStudy} />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projectItems} />
        <ResumeSection />
        <ContactSection />
      </main>
      <ChatWidget prompts={chatPrompts} />
    </div>
  )
}

export default App
