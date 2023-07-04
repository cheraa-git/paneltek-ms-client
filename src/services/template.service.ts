import { axios } from '../utils/axios'

const templateEndpoint = '/template/'
export const templateService = {
  getProcessingOrdersLength: async (start: string, end: string | null) => {
    const { data } = await axios.get(templateEndpoint + 'length', { params: { start, end } })
    return data
  },
  requestReport: async (reportId: string, start: string, end: string | null) => {
    const { data } = await axios.get(templateEndpoint, { params: { start, end, reportId } })
    return data
  }
}
