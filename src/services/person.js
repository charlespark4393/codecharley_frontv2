import Api from "./api"

const API_PERSON = '/person'
const API_PERSON_BY_ID = '/person/:id'

export const getPerson = (query) => {
  return Api.get(API_PERSON, { query })
}

export const getPersonById = (id) => {
  return Api.get(API_PERSON_BY_ID, {}, { id })
}

export const createPerson = (data) => {
  return Api.post(API_PERSON, data)
}

export const updatePerson = (id, data) => {
  return Api.put(API_PERSON_BY_ID, data, { id })
}

export const deletePerson = (id) => {
  return Api.delete(API_PERSON_BY_ID, {}, { id })
}