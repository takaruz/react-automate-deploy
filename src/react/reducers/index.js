/**
 * Created by takaruz on 10/5/16.
 */
import {combineReducers} from 'redux'
import {client, clients, app, apps, version, versions} from './deploy'

export default combineReducers({
  client, clients, app, apps, version, versions
})