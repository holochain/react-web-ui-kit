
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// @ts-ignore
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import { reducer } from './reducers/reducer'

const holochainClient = axios.create({
  baseURL: '/fn/holochain/callBridgedFunction',
  	method: 'POST',
  transformRequest: [
    function (data, headers) {
      return JSON.stringify(data)
    }
  ]
})

let rootReducer = combineReducers({ reducer })

const middleware = [axiosMiddleware(holochainClient)]

// @ts-ignore // allows us to use the redux debug tools browser plugin
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function CreateStore () {
  return createStore(
  	rootReducer,
  	composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
}

export default CreateStore
