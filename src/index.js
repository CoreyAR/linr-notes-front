import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './Redux'
import { browserHistory } from 'react-router'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import App from './Containers/App.js'
import SearchPage from './Containers/SearchPage'
import DetailPage from './Containers/DetailPage'


// Theme imports
import customBaseTheme from './Themes/customBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()



const store = createStore()



render((
  <MuiThemeProvider muiTheme={getMuiTheme(customBaseTheme)}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={SearchPage} />
        </Route>
        <Route path="detail" component={DetailPage} />
          <Redirect from='*' to='/' />

      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'))

