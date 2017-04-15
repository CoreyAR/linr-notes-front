import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import API from '../Services/Api'
import R from 'ramda'


const api = API.create()

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  // const enhancers = []

  /* ------------- Async Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */
  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']

  if (process.env.__DEV__) {
    const USE_LOGGING = true
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    })
    middleware.push(logger)
  }


  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  // if (ReduxPersist.active) {
  //   enhancers.push(autoRehydrate())
  // }

  /* ------------- Assemble Middleware ------------- */

  // enhancers.push(applyMiddleware(...middleware))

  let store = createStore(rootReducer, applyMiddleware(...middleware))

  // configure persistStore and check reducer version number
  // if (ReduxPersist.active) {
  //   RehydrationServices.updateReducers(store)
  // }

  sagaMiddleware.run(rootSaga)

  return store
}
