import { AppDispatch } from '../store'
import { reportService } from '../../services/report.service'
import { addReport, cancelReport, setError, setReportLoading, setReports, updateReport } from './reportSlice'
import { templateService } from '../../services/template.service'

const handleError = (error: any) => (dispatch: AppDispatch) => {
  if (error.response?.data?.message) dispatch(setError(error.response.data.message))
  else if (error.message) dispatch(setError(error.message))
  else dispatch(setError('Неизвестная ошибка'))
  dispatch(setReportLoading(false))
}

export const getReports = () => async (dispatch: AppDispatch) => {
  try {
    const res = await reportService.get()
    dispatch(setReports(res))
  } catch (error: any) {
    dispatch(handleError(error))
  }
  dispatch(setReportLoading(false))
}

export const requestReport = (startDate: string, endDate: string | null) => async (dispatch: AppDispatch) => {
  dispatch(setReportLoading(true))
  try {
    const pendingReport = await templateService.getProcessingOrdersLength(startDate, endDate)
    dispatch(addReport(pendingReport))
    dispatch(setReportLoading(false))
    const completedReport = await templateService.requestReport(pendingReport.id, startDate, endDate)
    dispatch(updateReport(completedReport))
  } catch (error: any) {
    if (error.response?.data?.reportId) dispatch(cancelReport(error.response.data.reportId))
    dispatch(handleError(error))
  }
}
