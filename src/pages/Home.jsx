import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CircuitBackground from '../components/CircuitBackground'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const stats = [
  { value: '10+', key: 'stat_years' },
  { value: '300+', key: 'stat_projects' },
  { value: '80+', key: 'stat_clients' },
]

const serviceIcons = {
  teaser_electrical: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  teaser_hvac: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.584-7H7a4 4 0 00-4 3z" />
    </svg>
  ),
  teaser_automation: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  teaser_mechanical: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  teaser_maintenance: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  teaser_management: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
}

const teaserKeys = [
  'teaser_electrical',
  'teaser_hvac',
  'teaser_automation',
  'teaser_mechanical',
  'teaser_maintenance',
  'teaser_management',
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <CircuitBackground />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-hima-green text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            HIMA Electromecánica
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-hima-white leading-tight mb-6"
          >
            {t('home.hero_tagline')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-hima-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {t('home.hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="px-8 py-3.5 bg-hima-green text-hima-black font-semibold rounded hover:bg-hima-green-light transition-colors duration-200 text-sm tracking-wide"
            >
              {t('home.cta_services')}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-hima-white/30 text-hima-white font-medium rounded hover:border-hima-green hover:text-hima-green transition-colors duration-200 text-sm tracking-wide"
            >
              {t('home.cta_contact')}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-hima-green/60" />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-hima-green"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-hima-dark border-y border-white/5 py-14">
        <StaggerContainer className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-3 sm:gap-6 text-center">
          {stats.map(({ value, key }) => (
            <StaggerItem key={key}>
              <div className="text-3xl sm:text-5xl font-serif font-bold text-hima-green mb-2">
                {value}
              </div>
              <div className="text-hima-white/50 text-xs sm:text-sm tracking-wide">{t(`home.${key}`)}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Services teaser */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-hima-green text-xs font-medium tracking-[0.25em] uppercase mb-3">
            {t('home.teaser_subtitle')}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-hima-white">
            {t('home.teaser_title')}
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {teaserKeys.map((key) => (
            <StaggerItem key={key}>
              <Link
                to="/services"
                className="group block bg-hima-card border border-white/5 rounded-lg p-6 hover:border-hima-green/40 hover:bg-hima-card/80 transition-all duration-300"
              >
                <div className="text-hima-green mb-4 group-hover:scale-110 transition-transform duration-300">
                  {serviceIcons[key]}
                </div>
                <h3 className="text-hima-white text-sm font-medium leading-snug">
                  {t(`home.${key}`)}
                </h3>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA band */}
      <section className="bg-hima-green/10 border-y border-hima-green/20 py-16">
        <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-hima-white mb-4">
            {t('home.cta_title')}
          </h2>
          <p className="text-hima-white/60 mb-8">
            {t('home.cta_desc')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3.5 bg-hima-green text-hima-black font-semibold rounded hover:bg-hima-green-light transition-colors duration-200 text-sm tracking-wide"
          >
            {t('home.cta_contact')}
          </Link>
        </AnimatedSection>
      </section>
    </div>
  )
}
