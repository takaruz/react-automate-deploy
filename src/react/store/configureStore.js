/**
 * Created by takaruz on 10/5/16.
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {apiMiddleware} from 'redux-api-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default () => {
  const middlewares = [thunk, apiMiddleware]

  if (process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}
