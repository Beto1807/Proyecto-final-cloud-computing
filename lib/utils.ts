import ms from 'ms'

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'Nunca'
  return `${
    timeOnly ? '' : 'Hace '
  }${ms(Date.now() - new Date(timestamp).getTime())}`
}
