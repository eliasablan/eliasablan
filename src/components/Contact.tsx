import React from 'react'
import ContactForm from './ContactForm'
import { Locale } from '../lib/i18n-config'

const Contact = ({ lang }: { lang: Locale }) => {
  return (
    <div className="py-8 md:pt-12">
      <h2 className="pb-3 text-xl font-medium">Contact me</h2>
      <ContactForm lang={lang} />
    </div>
  )
}

export default Contact
