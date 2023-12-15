import Api from './api'

const API_AUTH_SIGNIN = '/auth/signIn'

export const signInUser = (data) => {
  return Api.post(API_AUTH_SIGNIN, data)
}
