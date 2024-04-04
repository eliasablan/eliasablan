'use server'

import { Resend } from 'resend'
import { FormSchema } from './schemas'
import ContactFormEmail from './emails/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data) {
  const result = FormSchema.safeParse(data)

  if (result.success) {
    const { name, email, message } = result.data

    try {
      const data = await resend.emails.send({
        from: 'Elias Ablan <onboarding@resend.dev>',
        to: ['eliasablan93@gmail.com'],
        subject: 'Personal Blog and Portfolio contact',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message }),
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}
