/**
 * Created by takaruz on 10/5/16.
 */
const initialState = []
const initialClient = {
  "id": -1,
  "name": "-",
  "abbr": "-"
}

export const client = (state = initialClient, action) => {
  switch (action.type) {
    case 'SELECT_CLIENT_SUCCESS':
      return action.client
    default:
      return state
  }
}

export const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CLIENTS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const app = (state = initialClient, action) => {
  switch (action.type) {
    case 'SELECT_APP_SUCCESS':
      return action.client
    default:
      return state
  }
}

export const apps = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_APPS_SUCCESS':
      return action.payload.application
    default:
      return state
  }
}
