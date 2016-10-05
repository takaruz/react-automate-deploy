/**
 * Created by takaruz on 10/5/16.
 */
import {
  INIT_APP,
  INIT_CLIENT,
  INIT_VERSION,
  SELECT_APP,
  SELECT_CLIENT,
  SELECT_VERSION,
  LOAD_APPS_SUCCESS,
  LOAD_CLIENTS_SUCCESS,
  LOAD_VERSION_SUCCESS
} from '../constants/actionTypes'

const initialState = []

const initialClient = {
  "id": -1,
  "name": "-",
  "abbr": "-"
}
const initialApp = {
  "id": -1,
  "name": "-",
  "version": "-",
  "lastUpdate": "-",
  "ip": "-",
  "ServStatus": "-",
  "AppStatus": "-"
}
const initialVersion = {
  "id": -1,
  "name": "-",
  "releaseDate": "-",
  "status": "-",
  "hashCode": "-"
}


export const client = (state = initialClient, action) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return action.data
    case INIT_CLIENT:
      return initialClient
    default:
      return state
  }
}

export const app = (state = initialApp, action) => {
  switch (action.type) {
    case SELECT_APP:
      return action.data
    case INIT_APP:
      return initialApp
    default:
      return state
  }
}

export const version = (state = initialVersion, action) => {
  switch (action.type) {
    case SELECT_VERSION:
      return action.data
    case INIT_VERSION:
      return initialVersion
    default:
      return state
  }
}

export const clients = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CLIENTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export const apps = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPS_SUCCESS:
      return action.payload.application
    default:
      return state
  }
}

export const versions = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VERSION_SUCCESS:
      return action.payload.version
    default:
      return state
  }
}
