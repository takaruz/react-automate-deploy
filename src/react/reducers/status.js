/**
 * Created by takaruz on 10/5/16.
 */
import {
  LOAD_JOBS_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export const jobs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOBS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

