import { call, put } from 'redux-saga/effects'
import SearchActions from '../Redux/SearchRedux'
import history from '../history'

export function * search (api, action) {
  if (action.type === 'SEARCH_REQUEST') {
    try {
      const {query} = action
      const resp = yield call(api.search, query)
      if (resp.status === 200) {
        yield put(SearchActions.searchSuccess(resp.data))
      } else {
        throw new Error(resp.problem)
      }
    } catch (e) {
      yield put(SearchActions.searchFailure(e))
    }
  }

}
