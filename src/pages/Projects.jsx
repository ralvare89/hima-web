import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const projects = [
  { key: 'proj1',  category: 'commercial',  img: '/projects/commercial/la_capitania.jpg' },
  { key: 'proj5',  category: 'industrial',  img: '/projects/industrial/conducen.jpg' },
  { key: 'proj9',  category: 'residential', img: '/projects/residential/flats_21.jpg' },
  { key: 'proj12', category: 'educational', img: '/projects/educational/kts.png' },
  { key: 'proj2',  category: 'commercial',  img: '/projects/commercial/oficinas_merck.jpg' },
  { key: 'proj6',  category: 'industrial',  img: '/projects/industrial/femsa_4000.jpg' },
  { key: 'proj10', category: 'residential', img: '/projects/residential/roble_sabana.jpg' },
  { key: 'proj13', category: 'educational', img: '/projects/educational/liceo_otilio_ulate.jpg' },
  { key: 'proj3',  category: 'commercial',  img: '/projects/commercial/maxi_pali.JPG' },
  { key: 'proj7',  category: 'industrial',  img: '/projects/industrial/femsa_master_plan.jpg' },
  { key: 'proj11', category: 'residential', img: '/projects/residential/residencia_stein.jpg' },
  { key: 'proj14', category: 'educational', img: '/projects/educational/centro_cultural.jpg' },
  { key: 'proj4',  category: 'commercial',  img: '/projects/commercial/mc_guadalupe.jpg' },
  { key: 'proj8',  category: 'industrial',  img: '/projects/industrial/unilever.jpg' },
]

const filters = ['all', 'commercial', 'industrial', 'residential', 'educational']

const badgeColors = {
  commercial: 'bg-blue-900/40 text-blue-300 border-blue-700/30',
  industrial: 'bg-orange-900/40 text-orange-300 border-orange-700/30',
  residential: 'bg-green-900/40 text-hima-green border-hima-green/30',
  educational: 'bg-purple-900/40 text-purple-300 border-purple-700/30',
}

const filterColors = {
  all:         { active: 'bg-hima-green text-hima-black border-hima-green',               hover: 'hover:bg-hima-green/10 hover:text-hima-green hover:border-hima-green/40' },
  commercial:  { active: 'bg-blue-900/40 text-blue-300 border-blue-700/30',               hover: 'hover:bg-blue-900/20 hover:text-blue-300 hover:border-blue-700/30' },
  industrial:  { active: 'bg-orange-900/40 text-orange-300 border-orange-700/30',         hover: 'hover:bg-orange-900/20 hover:text-orange-300 hover:border-orange-700/30' },
  residential: { active: 'bg-green-900/40 text-hima-green border-hima-green/30',          hover: 'hover:bg-green-900/20 hover:text-hima-green hover:border-hima-green/30' },
  educational: { active: 'bg-purple-900/40 text-purple-300 border-purple-700/30',         hover: 'hover:bg-purple-900/20 hover:text-purple-300 hover:border-purple-700/30' },
}

function Lightbox({ proj, title, categoryLabel, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onNext(); if (e.key === 'ArrowLeft') onPrev() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onNext, onPrev])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image + overlay */}
        <div className="relative rounded-lg overflow-hidden aspect-video max-h-[75vh]">
          <img src={proj.img} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 bg-gradient-to-t from-black/75 to-transparent">
            <h3 className="text-white font-semibold text-base leading-snug min-w-0 truncate drop-shadow">{title}</h3>
            <span className={`flex-shrink-0 px-2.5 py-0.5 rounded text-xs font-medium border ${badgeColors[proj.category]}`}>
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Prev / Next */}
        <button onClick={onPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/50 hover:text-white transition-colors hidden sm:block">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button onClick={onNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/50 hover:text-white transition-colors hidden sm:block">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/></svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null) // index into visible array

  const visible = projects.filter((p) => active === 'all' || p.category === active)

  const openLightbox = (idx) => { setLightbox(idx); document.body.style.overflow = 'hidden' }
  const closeLightbox = () => { setLightbox(null); document.body.style.overflow = '' }
  const prevImage = () => setLightbox((i) => (i - 1 + visible.length) % visible.length)
  const nextImage = () => setLightbox((i) => (i + 1) % visible.length)

  return (
    <div className="pt-28">
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
              className={`px-5 py-2 rounded text-sm font-medium border transition-all duration-200 ${
                active === f
                  ? filterColors[f].active
                  : `bg-hima-card border-white/10 text-hima-white/60 ${filterColors[f].hover}`
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
                {/* Project image */}
                <div
                  className="h-48 relative overflow-hidden bg-hima-dark cursor-zoom-in"
                  onClick={() => openLightbox(visible.indexOf(proj))}
                >
                  <img
                    src={proj.img}
                    alt={t(`projects.${proj.key}_title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <svg className="w-8 h-8 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0zm-3-1h-2V8h-2v2H8v2h2v2h2v-2h2v-2z" />
                    </svg>
                  </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            proj={visible[lightbox]}
            title={t(`projects.${visible[lightbox].key}_title`)}
            categoryLabel={t(`projects.badge_${visible[lightbox].category}`)}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
