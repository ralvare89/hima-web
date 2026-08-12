import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    localStorage.setItem('hima-lang', next)
  }

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-hima-black/95 backdrop-blur-sm border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/logo-hima.png" alt="HIMA Electromecánica" className="h-20 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                isActive(to) ? 'text-hima-green' : 'text-hima-white/80 hover:text-hima-white'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-hima-green transition-all duration-300 ${
                  isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="ml-2 px-3 py-1 rounded border border-hima-green text-hima-green text-xs font-medium hover:bg-hima-green hover:text-hima-black transition-colors duration-200 tracking-wider"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile right: lang + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded border border-hima-green text-hima-green text-xs font-medium tracking-wider"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-hima-white p-1"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-hima-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-hima-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-hima-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-hima-dark border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-base font-medium py-1 border-b border-white/5 ${
                    isActive(to) ? 'text-hima-green' : 'text-hima-white/80'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
