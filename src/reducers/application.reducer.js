import { ON_APPLICATION_ERROR } from '../actions'
import { toast } from 'react-toastify'
import { createReducer } from '../utils'

const initialState = {
  isLoading: false,
  statusBar: true,
  iapSettings: {},
  afxEnabled: true,
  downloads: [],
  sortKey: Math.floor(Math.random() * 1000) + 101,
  uploadingStates: {},
  cryptoBase: null,
}
export const application = createReducer(initialState, {
  [ON_APPLICATION_ERROR](state, { error: appError, toastDuration = 5000 }) {
    const error = (appError && appError.message) || null
    error && toast(error, { type: 'error' })
    return {
      ...state,
      error,
      message: null,
      isLoading: false,
      toastDuration: error ? toastDuration : undefined,
    }
  },
})
