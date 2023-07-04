import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IReport } from '../../types'

export interface ReportState {
  reports: IReport[]
  loading: boolean
}

const initialState: ReportState = {
  reports: [],
  loading: true
}

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReports: (state, { payload }: PayloadAction<IReport[]>) => {
      state.reports = payload
    },
    setReportLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },
    addReport: (state, { payload }: PayloadAction<IReport>) => {
      state.reports.unshift(payload)
    },
    updateReport: (state, { payload }: PayloadAction<IReport>) => {
      state.reports = state.reports.map(report => report.id === payload.id ? { ...report, ...payload } : report)
    }
  }
})

export const { setReports, setReportLoading, addReport, updateReport } = reportSlice.actions

export const reportReducer = reportSlice.reducer
