import { AppDispatch } from '../store'
import { reportService } from '../../services/report.service'
import { addReport, setReportLoading, setReports, updateReport } from './reportSlice'
import { templateService } from '../../services/template.service'

export const getReports = () => async (dispatch: AppDispatch) => {
  try {
    const res = await reportService.get()
    dispatch(setReports(res))
  } catch (error) {
    console.log(error)
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
    console.log(completedReport)
    dispatch(updateReport(completedReport))
  } catch (error) {
    console.log(error)
    dispatch(setReportLoading(false))
  }
}
