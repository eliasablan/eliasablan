import { parseISO, format } from 'date-fns'

const DateJSX = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}

const DateFormat = (dateString: string) => {
  const date = parseISO(dateString)
  return format(date, 'LLLL d, yyyy')
}

export { DateJSX, DateFormat }
