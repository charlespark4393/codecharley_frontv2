import { onApplicationError } from '../actions/application.action'
import axios from 'axios'
import { appApiUrl } from '../config'
import isString from 'lodash/isString'
import { toast } from 'react-toastify'

import { store } from '../reducers'

class Api {
  static error = {}

  static get(route, data = {}, params = {}, options = {}) {
    Object.keys(data).forEach((key) => {
      if (data[key] && typeof data[key] === 'string') data[key] = data[key].replace(/'/g, "''")
    })
    return this.xhr(route, data, params, 'get', options)
  }

  static put(route, data = {}, params = {}, options = {}) {
    return this.xhr(route, data, params, 'put', options)
  }

  static post(route, data = {}, params = {}, options = {}) {
    return this.xhr(route, data, params, 'post', options)
  }

  static delete(route, data = {}, params = {}) {
    return this.xhr(route, data, params, 'delete')
  }

  static replaceVariables(route, params) {
    Object.keys(params).forEach((key) => {
      route = route.replace(`:${key}`, params[key])
    })
    return route
  }

  static async wrapApiErrors(error = {}) {
    try {
      let { status, data } = error.response || {}
      if (!status) {
        throw new Error('Connection with API server is broken')
      }
      if (status === 401) {
        const state = store.getState()
        const {
          auth: { token },
        } = state
        if (token) {
          store.dispatch({ type: 'AUTH_LOGOUT' })
          throw new Error('Unauthorized')
        }
      }
      if (typeof data == 'object' && data.text) data = await data.text()
      const { message } = data
      if (!message) {
        throw new Error(data)
      }

      if (isString(message)) {
        throw new Error(message)
      }
      if (status === 400) {
        let _message = ''
        message.forEach((item) => {
          _message += `${item}\n`
        })
        throw new Error(_message)
      }
      throw new Error('Unknown error')
    } catch (e) {
      console.log('API error', e)
      if (this.error !== e.message) {
        this.error = e.message
        setTimeout(() => {
          this.error = {}
        }, 3000)
        store.dispatch(onApplicationError(e))
      }
      // throw e
    }
  }

  static xhr(route, data = {}, params = {}, method, defaultOptions = {}) {
    const state = store.getState()

    const sendRequest = (axiosInstance) => {
      const url = Api.replaceVariables(route, params)
      const headers = {
        'Content-Type': 'application/json',
        'loan-number': this.loanNumber,
      }

      if (state.auth.token || (data).token) {
        headers.Authorization = `Bearer ${state.auth.token || (data).token}`
      }

      const options = {
        baseURL: appApiUrl,
        url,
        method,
        headers,
        timeout: 25000,
        ...defaultOptions,
      }

      if (method === 'get') {
        options.params = data
      } else {
        options.data = data
      }

      return axiosInstance(options)
        .then((res) => {
          const { success, message } = res.data
          if (success !== undefined && message) {
            toast(message, { type: success ? 'success' : 'error' })
          }
          return res.data
        })
        .catch((err) => {
          return Api.wrapApiErrors(err)
        })
    }
    return sendRequest(axios.create())
  }

  static uploadFiles(route, data = {}, params = {}, files, defaultOptions = {}) {
    const state = store.getState()

    const sendRequest = (axiosInstance) => {
      const url = Api.replaceVariables(route, params)
      const headers = {
        'Content-Type': 'multipart/form-data',
        'loan-number': this.loanNumber,
      }

      if (state.auth.token) {
        headers.Authorization = `Bearer ${state.auth.token}`
      }

      var formData = new FormData()
      files.forEach((file, index) => formData.append(`files[${index}]`, file))
      Object.keys(data).forEach((key) => formData.append(key, data[key]))

      const options = {
        baseURL: appApiUrl,
        url,
        method: 'post',
        headers,
        // timeout: 15000,
        data: formData,
        ...defaultOptions,
      }

      return axiosInstance(options)
        .then((res) => res.data)
        .catch((err) => {
          return Api.wrapApiErrors(err)
        })
    }
    return sendRequest(axios.create())
  }
}

export default Api
