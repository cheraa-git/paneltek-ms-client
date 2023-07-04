import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IReport } from '../../types'

export interface ReportState {
  reports: IReport[]
  loading: boolean
  error: string
}

const initialState: ReportState = {
  reports: [],
  loading: true,
  error: ''
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
    },
    cancelReport: (state, { payload: id }: PayloadAction<string>) => {
      state.reports = state.reports.map(report => report.id === id ? { ...report, status: 'cancelled' } : report)
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
    }
  }
})

export const { setReports, setReportLoading, addReport, updateReport, setError, cancelReport } = reportSlice.actions

export const reportReducer = reportSlice.reducer
