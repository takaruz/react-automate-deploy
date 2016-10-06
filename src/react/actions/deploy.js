/**
 * Created by takaruz on 10/5/16.
 */
import {CALL_API} from 'redux-api-middleware'
import {LIST_ENDPOINT, CLIENT_ENDPOINT, VERSION_ENDPOINT, JOB_ENDPOINT} from '../constants/endpoints'
import {
  LOAD_APPS_FAILURE,
  LOAD_APPS_REQUEST,
  LOAD_APPS_SUCCESS,
  LOAD_CLIENTS_FAILURE,
  LOAD_CLIENTS_REQUEST,
  LOAD_CLIENTS_SUCCESS,
  LOAD_VERSION_FAILURE,
  LOAD_VERSION_REQUEST,
  LOAD_VERSION_SUCCESS,
  SUBMIT_JOB_FAILURE,
  SUBMIT_JOB_REQUEST,
  SUBMIT_JOB_SUCCESS
} from '../constants/actionTypes'

export const loadClients = () => ({
  [CALL_API]: {
    endpoint: LIST_ENDPOINT,
    method: 'GET',
    types: [LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE]
  }
})

export const loadApplications = (id) => ({
  [CALL_API]: {
    endpoint: `${CLIENT_ENDPOINT}/${id}`,
    method: 'GET',
    types: [LOAD_APPS_REQUEST, LOAD_APPS_SUCCESS, LOAD_APPS_FAILURE]
  }
})

export const loadVersions = (id) => ({
  [CALL_API]: {
    endpoint: `${VERSION_ENDPOINT}/${id}`,
    method: 'GET',
    types: [LOAD_VERSION_REQUEST, LOAD_VERSION_SUCCESS, LOAD_VERSION_FAILURE]
  }
})

export const submitJob = (values) => ({
  [CALL_API]: {
    endpoint: JOB_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(values),
    types: [SUBMIT_JOB_REQUEST, SUBMIT_JOB_SUCCESS, SUBMIT_JOB_FAILURE]
  }
})

export const selectItem = (id, array, type) => ({
  type: type,
  data: array.find((item) => item.id === id)
})

export const clearSelectedItem = (type) => ({
  type: type
})