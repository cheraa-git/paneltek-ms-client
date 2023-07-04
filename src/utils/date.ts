import dayjs from 'dayjs'

export const timestampToDateTime = (timestamp?: string) => {
  if (!timestamp) return ''
  return dayjs(+timestamp).format('HH:mm DD.MM.YY')
}
