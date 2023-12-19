import Api from "./api"

const API_SEND_MESSAGE = '/message'
const API_GET_CONTACTS = '/main/contacts'

export const sendContactMessage = (data) => {
  return Api.post(API_SEND_MESSAGE, data)
}

export const getContacts = () => {
  return Api.get(API_GET_CONTACTS)
}