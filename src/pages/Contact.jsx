import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const infoCards = [
  {
    key: 'phone',
    valKey: 'phone_value',
    href: (val) => `tel:${val.replace(/[\s-]/g, '')}`,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    key: 'email',
    valKey: 'email_value',
    href: (val) => `mailto:${val}`,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'location',
    valKey: 'location_value',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: 'hours',
    valKey: 'hours_value',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone || '—',
          service:      form.service || '—',
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_KEY
      )
      setSent(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      alert('Hubo un error al enviar el mensaje. Por favor intente de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-hima-card border border-white/10 rounded px-4 py-3 text-hima-white placeholder-hima-white/30 text-sm focus:outline-none focus:border-hima-green transition-colors duration-200'

  return (
    <div className="pt-28">
      {/* Header */}
      <div className="bg-hima-dark border-b border-white/5 py-20 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-hima-green text-xs tracking-[0.3em] uppercase font-medium mb-3">HIMA</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-hima-white mb-4">
            {t('contact.page_title')}
          </h1>
          <p className="text-hima-white/55 text-lg">{t('contact.page_subtitle')}</p>
        </AnimatedSection>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <AnimatedSection className="lg:col-span-3" direction="right">
            <div className="bg-hima-card border border-white/5 rounded-lg p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-hima-green/15 border border-hima-green/30 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-hima-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-hima-white font-semibold text-lg">{t('contact.form_success')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-hima-white/60 text-xs mb-1.5 uppercase tracking-wider">
                        {t('contact.form_name')}
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-hima-white/60 text-xs mb-1.5 uppercase tracking-wider">
                        {t('contact.form_email')}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-hima-white/60 text-xs mb-1.5 uppercase tracking-wider">
                        {t('contact.form_phone')}
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+506 8888-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-hima-white/60 text-xs mb-1.5 uppercase tracking-wider">
                        {t('contact.form_service')}
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled>{t('contact.form_service_placeholder')}</option>
                        {[
                          { key: 'electrical',  label: 'Sistemas Eléctricos' },
                          { key: 'hvac',        label: 'Sistemas HVAC' },
                          { key: 'automation',  label: 'Sistemas Especiales' },
                          { key: 'mechanical',  label: 'Sistemas Hidráulicos y Mecánicos' },
                          { key: 'maintenance', label: 'Mantenimiento Preventivo' },
                          { key: 'management',  label: 'Sistemas de Telecomunicaciones' },
                          { key: 'other',       label: 'Otro' },
                        ].map(({ key, label }) => (
                          <option key={key} value={label}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-hima-white/60 text-xs mb-1.5 uppercase tracking-wider">
                      {t('contact.form_message')}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder={t('contact.form_message_placeholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 px-8 py-3.5 bg-hima-green text-hima-black font-semibold rounded hover:bg-hima-green-light transition-colors duration-200 text-sm tracking-wide disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {t('contact.form_sending')}
                      </>
                    ) : t('contact.form_submit')}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Info cards — 2 cols */}
          <div className="lg:col-span-2">
            <StaggerContainer className="flex flex-col gap-4">
              {infoCards.map(({ key, valKey, href, icon }) => {
                const val = t(`contact.${valKey}`)
                const link = href ? href(val) : null
                return (
                  <StaggerItem key={key}>
                    <div className="bg-hima-card border border-white/5 rounded-lg p-5 flex items-start gap-4 hover:border-hima-green/25 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-hima-green/10 border border-hima-green/20 flex items-center justify-center flex-shrink-0 text-hima-green">
                        {icon}
                      </div>
                      <div>
                        <div className="text-hima-white/40 text-xs uppercase tracking-wider mb-1">
                          {t(`contact.info_${key}`)}
                        </div>
                        {link ? (
                          <a href={link} className="text-hima-white font-medium text-sm hover:text-hima-green transition-colors duration-200">
                            {val}
                          </a>
                        ) : (
                          <div className="text-hima-white font-medium text-sm">{val}</div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  )
}
