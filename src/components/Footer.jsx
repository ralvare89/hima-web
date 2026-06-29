import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="bg-hima-dark border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <img src="/hima-logo.svg" alt="HIMA Electromecánica" className="h-14 w-auto" />
            <p className="text-hima-white/50 text-sm leading-relaxed max-w-xs text-center md:text-left">
              {t('footer.description')}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-hima-white font-semibold text-sm uppercase tracking-widest mb-4">
              {t('footer.links_title')}
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-hima-white/50 hover:text-hima-green text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-hima-white font-semibold text-sm uppercase tracking-widest mb-4">
              {t('footer.contact_title')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-hima-white/50">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-hima-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('contact.phone_value')}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-hima-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('contact.email_value')}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-hima-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('contact.location_value')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-hima-white/30 text-xs">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
