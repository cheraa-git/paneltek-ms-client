import { AppDispatch } from '../store'
import { reportService } from '../../services/report.service'
import { setReportLoading, setReports } from './reportSlice'

export const getReports = () => async (dispatch: AppDispatch) => {
  try {
    const res = await reportService.get()
    dispatch(setReports(res))
  } catch (error) {
    console.log(error)
  }
  dispatch(setReportLoading(false))
}
