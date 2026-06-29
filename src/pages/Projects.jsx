import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const projects = [
  { key: 'proj1', category: 'commercial', color: 'from-hima-green/20 to-hima-black' },
  { key: 'proj2', category: 'industrial', color: 'from-blue-900/30 to-hima-black' },
  { key: 'proj3', category: 'commercial', color: 'from-purple-900/20 to-hima-black' },
  { key: 'proj4', category: 'residential', color: 'from-amber-900/20 to-hima-black' },
  { key: 'proj5', category: 'industrial', color: 'from-red-900/20 to-hima-black' },
  { key: 'proj6', category: 'residential', color: 'from-teal-900/20 to-hima-black' },
]

const filters = ['all', 'commercial', 'industrial', 'residential']

const badgeColors = {
  commercial: 'bg-blue-900/40 text-blue-300 border-blue-700/30',
  industrial: 'bg-orange-900/40 text-orange-300 border-orange-700/30',
  residential: 'bg-green-900/40 text-hima-green border-hima-green/30',
}

export default function Projects() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')

  const visible = projects.filter((p) => active === 'all' || p.category === active)

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-hima-dark border-b border-white/5 py-20 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-hima-green text-xs tracking-[0.3em] uppercase font-medium mb-3">Portfolio</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-hima-white mb-4">
            {t('projects.page_title')}
          </h1>
          <p className="text-hima-white/55 text-lg">{t('projects.page_subtitle')}</p>
        </AnimatedSection>
      </div>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-2">
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded text-sm font-medium transition-all duration-200 ${
                active === f
                  ? 'bg-hima-green text-hima-black'
                  : 'bg-hima-card border border-white/10 text-hima-white/60 hover:border-hima-green/30 hover:text-hima-white'
              }`}
            >
              {t(`projects.filter_${f}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((proj) => (
              <motion.div
                key={proj.key}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group bg-hima-card border border-white/5 rounded-lg overflow-hidden hover:border-hima-green/25 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${proj.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-hima-green/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  {/* Shimmer line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hima-green/40 to-transparent" />
                </div>

                <div className="p-5">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium border mb-3 ${badgeColors[proj.category]}`}
                  >
                    {t(`projects.badge_${proj.category}`)}
                  </span>
                  <h3 className="font-semibold text-hima-white mb-2 leading-snug">
                    {t(`projects.${proj.key}_title`)}
                  </h3>
                  <p className="text-hima-white/50 text-sm leading-relaxed">
                    {t(`projects.${proj.key}_desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}
