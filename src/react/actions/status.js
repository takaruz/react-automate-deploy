/**
 * Created by takaruz on 10/5/16.
 */
import {CALL_API} from 'redux-api-middleware'
import {JOB_ENDPOINT} from '../constants/endpoints'
import {
  LOAD_JOBS_FAILURE,
  LOAD_JOBS_REQUEST,
  LOAD_JOBS_SUCCESS,
} from '../constants/actionTypes'

export const loadJobs = () => ({
  [CALL_API]: {
    endpoint: JOB_ENDPOINT,
    method: 'GET',
    types: [LOAD_JOBS_REQUEST, LOAD_JOBS_SUCCESS, LOAD_JOBS_FAILURE]
  }
})
