/**
 * Created by takaruz on 10/5/16.
 */
import {CALL_API} from 'redux-api-middleware'
import {LIST_ENDPOINT, CLIENT_ENDPOINT} from '../constants/endpoints'

export const loadClients = () => ({
  [CALL_API]: {
    endpoint: LIST_ENDPOINT,
    method: 'GET',
    types: ['LOAD_CLIENTS_REQUEST', 'LOAD_CLIENTS_SUCCESS', 'LOAD_CLIENTS_FAILURE']
  }
})

export const loadApplications = (id) => ({
  [CALL_API]: {
    endpoint: `${CLIENT_ENDPOINT}/${id}`,
    method: 'GET',
    types: ['LOAD_APPS_REQUEST', 'LOAD_APPS_SUCCESS', 'LOAD_APPS_FAILURE']
  }
})

export const selectClient = (id, clients) => {
  return {
    type: 'SELECT_CLIENT_SUCCESS',
    client: clients.find((client) => client.id === id)
  }
}


// TODO
export const selectItem = (id, array) => {
  return {
    type: 'SELECT_CLIENT_SUCCESS',
    data: array.find((item) => item.id === id)
  }
}