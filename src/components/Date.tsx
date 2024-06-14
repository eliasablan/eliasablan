import { parseISO, format } from 'date-fns'
import * as Locales from 'date-fns/locale'
import { Locale } from '../lib/i18n-config'

export const DateJSX = ({
  dateString,
  lang,
}: {
  dateString: string
  lang: Locale
}) => {
  const date = parseISO(dateString)
  return (
    <time className="capitalize" dateTime={dateString}>
      {format(date, 'LLL d, yyyy', {
        // @ts-ignore
        locale: Locales[lang],
      })}
    </time>
  )
}

export const LongDateJSX = ({
  dateString,
  lang,
}: {
  dateString: string
  lang: Locale
}) => {
  const date = parseISO(dateString)
  return (
    <time className="capitalize" dateTime={dateString}>
      {format(date, 'LLLL d, yyyy', {
        // @ts-ignore
        locale: Locales[lang],
      })}
    </time>
  )
}

export const DateFormat = (dateString: string) => {
  const date = parseISO(dateString)
  return format(date, 'LLLL d, yyyy')
}
