import Immutable from 'seamless-immutable'
import {createReducer, createActions} from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  searchRequest: ['query'],
  searchSuccess: ['data'],
  searchFailure: ['error']
})

export const SearchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  fetch: false,
  error: null,
  result: {
    artist: 'Greenday',
    albumTitle: 'Dookie',
    artwork: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Green_Day_-_Dookie_cover.jpg'
  }
})

/* ------------- Reducers ------------- */

export const searchRequest = (state, {query}) => {
  return state.merge({fetch: true, error: null})
}

export const searchSuccess = (state, {data}) => {
  data = data[0]
  return state.merge({fetch: false, error: null, result: data})
}

export const searchFailure = (state, {error}) => {
  return state.merge({fetch: false, error})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SEARCH_REQUEST]: searchRequest,
    [Types.SEARCH_SUCCESS]: searchSuccess,
    [Types.SEARCH_FAILURE]: searchFailure
  }
)
