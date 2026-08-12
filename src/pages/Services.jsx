import { useTranslation } from 'react-i18next'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const services = [
  {
    key: 'electrical',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tags: ['NEC', 'Alta Tensión', 'LED', 'UPS'],
  },
  {
    key: 'hvac',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.584-7H7a4 4 0 00-4 3z" />
      </svg>
    ),
    tags: ['ASHRAE', 'VRF', 'Chiller', 'Data Center'],
  },
  {
    key: 'automation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tags: ['PLC', 'SCADA', 'Modbus', 'Siemens'],
  },
  {
    key: 'mechanical',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    tags: ['NFPA 13', 'Bombas', 'ASME', 'Soldadura'],
  },
  {
    key: 'maintenance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    tags: ['Termografía', 'Vibración', 'Análisis Aceite', 'CMMS'],
  },
  {
    key: 'management',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    tags: ['MS Project', 'BIM', 'As-Built', 'Licitaciones'],
  },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="pt-28">
      {/* Header */}
      <div className="bg-hima-dark border-b border-white/5 py-20 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-hima-green text-xs tracking-[0.3em] uppercase font-medium mb-3">HIMA</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-hima-white mb-4">
            {t('services.page_title')}
          </h1>
          <p className="text-hima-white/55 text-lg">{t('services.page_subtitle')}</p>
        </AnimatedSection>
      </div>

      {/* Service cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ key, icon, tags }) => (
            <StaggerItem key={key}>
              <div className="group bg-hima-card border border-white/5 rounded-lg p-7 h-full flex flex-col hover:border-hima-green/35 transition-all duration-300 hover:-translate-y-1">
                <div className="text-hima-green mb-5 group-hover:scale-105 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-hima-white mb-3">
                  {t(`services.${key}_title`)}
                </h3>
                <p className="text-hima-white/55 text-sm leading-relaxed flex-1">
                  {t(`services.${key}_desc`)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-hima-green/10 text-hima-green/80 text-xs rounded border border-hima-green/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Why us */}
      <section className="bg-hima-dark border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-hima-white">
              {t('services.why_title')}
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {['exp', 'cert', 'comp', 'guar'].map((key) => (
              <StaggerItem key={key}>
                <div className="text-center p-6">
                  <h4 className="font-semibold text-hima-green mb-2 text-lg">{t(`services.why_${key}_title`)}</h4>
                  <p className="text-hima-white/50 text-sm leading-relaxed">{t(`services.why_${key}_desc`)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
