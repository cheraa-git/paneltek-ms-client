import dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')

export const timestampToDateTime = (timestamp?: number) => {
  if (!timestamp) return ''
  return dayjs(timestamp).format('HH:mm D MMM')
}

export const reportDateFormat = (date: string | null) => {
  if (date === null) return ''
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}
