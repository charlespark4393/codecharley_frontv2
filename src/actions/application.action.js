import { ON_APPLICATION_ERROR } from './types'

export function onApplicationError(error, toastDuration = 500) {
  return {
    type: ON_APPLICATION_ERROR,
    error: error || null,
    toastDuration,
  }
}
