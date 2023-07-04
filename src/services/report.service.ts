import { axios } from '../utils/axios'

const reportEndpoint = '/reports'
export const reportService = {
  get: async () => {
    const { data } = await axios.get(reportEndpoint)
    return data
  },

}
