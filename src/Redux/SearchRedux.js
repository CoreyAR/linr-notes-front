import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  searchRequest: [],
  searchSuccess: ['data'],
  searchFailure: ['error']
})

export const SearchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  submission: []
})

/* ------------- Reducers ------------- */


export const searchRequest = (state, {}) => {
  return state.merge()
}
export const searchSuccess = (state, {data}) => {
  return state.merge()
}

export const searchFailure = (state, {error}) => {
  return state.merge()
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SEARCH_REQUEST]: searchRequest,
    [Types.SEARCH_SUCCESS]: searchSuccess,
    [Types.SEARCH_FAILURE]: searchFailure
  }
)
