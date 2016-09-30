import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {
  App,
  Main,
  Deploy,
  Registration,
  Settings,
  Status
} from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Main}/>
        <Route path='dashboard' component={Main}/>
        <Route path='deploy' component={Deploy}/>
        <Route path='registration' component={Registration}/>
        <Route path='settings' component={Settings}/>
        <Route path='status' component={Status}/>
      </Route>
    </Router>
  )
}