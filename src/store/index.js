import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import api from '../middleware/api/index'
import rootReducer from '../reducers/index'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(logger, thunk, api),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
)

export default configureStore
