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
    }
  }
})

export const { setReports, setReportLoading } = reportSlice.actions

export const reportReducer = reportSlice.reducer
