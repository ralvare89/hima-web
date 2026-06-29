import { useTranslation } from 'react-i18next'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const values = ['integrity', 'excellence', 'innovation', 'safety']

const valueIcons = {
  integrity: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  excellence: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  innovation: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  safety: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
}

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="bg-hima-dark border-b border-white/5 py-20 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-hima-green text-xs tracking-[0.3em] uppercase font-medium mb-3">HIMA</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-hima-white mb-4">
            {t('about.page_title')}
          </h1>
          <p className="text-hima-white/55 text-lg">{t('about.page_subtitle')}</p>
        </AnimatedSection>
      </div>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right">
            <h2 className="font-serif text-3xl font-bold text-hima-white mb-6">
              {t('about.story_title')}
            </h2>
            <p className="text-hima-white/65 leading-relaxed mb-4">{t('about.story_p1')}</p>
            <p className="text-hima-white/65 leading-relaxed">{t('about.story_p2')}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="left">
            {/* Decorative element */}
            <div className="relative">
              <div className="bg-hima-card border border-white/5 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: t('about.stat_founded_label'), value: '2003' },
                    { label: t('about.stat_country_label'), value: 'Costa Rica' },
                    { label: t('about.stat_standards_label'), value: 'NEC / NFPA' },
                    { label: t('about.stat_certs_label'), value: 'ASHRAE, CFIA' },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-l-2 border-hima-green pl-4">
                      <div className="text-hima-white font-semibold text-lg">{value}</div>
                      <div className="text-hima-white/40 text-xs uppercase tracking-wider">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-hima-green/20 rounded-lg -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-hima-dark border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {['mission', 'vision'].map((key) => (
              <StaggerItem key={key}>
                <div className="bg-hima-card border border-white/5 rounded-lg p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-hima-green/10 border border-hima-green/30 flex items-center justify-center mb-5">
                    {key === 'mission' ? (
                      <svg className="w-5 h-5 text-hima-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-hima-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-hima-white mb-3">
                    {t(`about.${key}_title`)}
                  </h3>
                  <p className="text-hima-white/60 leading-relaxed">{t(`about.${key}_text`)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-hima-white">
            {t('about.values_title')}
          </h2>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <StaggerItem key={v}>
              <div className="bg-hima-card border border-white/5 rounded-lg p-6 hover:border-hima-green/30 transition-colors duration-300">
                <div className="text-hima-green mb-4">{valueIcons[v]}</div>
                <h4 className="font-semibold text-hima-white mb-2">{t(`about.value_${v}`)}</h4>
                <p className="text-hima-white/50 text-sm leading-relaxed">{t(`about.value_${v}_desc`)}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Team */}
      <section className="bg-hima-dark border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-hima-white mb-3">
              {t('about.team_title')}
            </h2>
            <p className="text-hima-white/50">{t('about.team_subtitle')}</p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <StaggerItem key={n}>
                <div className="bg-hima-card border border-white/5 rounded-lg overflow-hidden hover:border-hima-green/25 transition-colors duration-300">
                  {/* Avatar placeholder */}
                  <div className="h-48 bg-gradient-to-br from-hima-green/10 to-hima-black flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-hima-green/20 border-2 border-hima-green/40 flex items-center justify-center">
                      <svg className="w-10 h-10 text-hima-green/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-hima-white mb-0.5">{t(`about.team${n}_name`)}</h4>
                    <p className="text-hima-green text-xs font-medium tracking-wide mb-3">{t(`about.team${n}_role`)}</p>
                    <p className="text-hima-white/50 text-sm leading-relaxed">{t(`about.team${n}_bio`)}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
