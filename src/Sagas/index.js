import { takeLatest } from 'redux-saga'
import API from '../Services/Api'


/* ------------- Types ------------- */

import { SearchTypes } from '../Redux/SearchRedux'


/* ------------- Sagas ------------- */
import { search } from './SearchSaga'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create()
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(SearchTypes.SEARCH_REQUEST, search, api),
  ]
}
