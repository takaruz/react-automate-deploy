/**
 * Created by takaruz on 10/5/16.
 */
import {combineReducers} from 'redux'
import {client, clients, app, apps, version, versions} from './deploy'
import {jobs} from './status'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form: formReducer,
  client, clients, app, apps, version, versions, jobs
})