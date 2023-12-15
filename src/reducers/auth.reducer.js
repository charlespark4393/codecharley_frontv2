import {
  AUTH_LOGOUT,
  AUTH_PROFILE_UPDATE,
  AUTH_TOKEN_SET,
  ON_APPLICATION_ERROR,
  SIGNIN_USER_REQUEST,
} from '../actions'

import { createReducer } from '../utils'

const initialState = () => {
  return {
    isAuthenticated: false,
    token: null,
    profile: {},
    fetchingToken: false,
    role: {},
  }
}

export const auth = createReducer(initialState(), {
  [SIGNIN_USER_REQUEST]: (state) => ({ ...state, fetchingToken: true }),
  [ON_APPLICATION_ERROR]: (state) => ({ ...state, fetchingToken: false }),
  [AUTH_TOKEN_SET]: (state, payload) => {
    const { token, user: profile } = payload
    return {
      ...state,
      isAuthenticated: true,
      token,
      profile,
      fetchingToken: false,
    }
  },
  [AUTH_PROFILE_UPDATE]: (state, payload) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        ...payload.profile,
      },
    }
  },
  [AUTH_LOGOUT]: () => initialState(),
})
