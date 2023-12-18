import Api from "./api"

const API_SEND_MESSAGE = '/message'

export const sendContactMessage = (data) => {
  return Api.post(API_SEND_MESSAGE, data)
}