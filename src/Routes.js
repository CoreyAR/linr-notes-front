import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RootMap from './Containers/RootMap'

'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './Redux'
import UserActions from './Redux/UserRedux'

import { Router, Route, IndexRoute, Redirect } from 'react-router'
import history from './history.js'
import App from './Containers/App.js'
// import HomePage from './Containers/home/HomePage'
// import LoginPage from './Containers/LoginPage'
// import AdminPage from './Containers/admin/AdminPage.js'
// import ReportsHome from './Containers/Reports/ReportsHome.js'
// import SubmissionReport from './Containers/Reports/SubmissionReport'
// import TimeSheetView from './Containers/Timesheet/TimeSheetView'
// import EnterTimesheetView from './Containers/Timesheet/EnterTimesheetView'

// Theme imports
import customBaseTheme from './Themes/customBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()



const store = createStore()

function requireAuth (dispatch) {
  const token = localStorage.getItem('token')
  console.log('token', token)
  if (!token) {
    history.push('/login')
  } else {
    store.dispatch(UserActions.verifyRequest(token))
  }
}



render((
  <MuiThemeProvider muiTheme={getMuiTheme(customBaseTheme)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App} onEnter={requireAuth(store)} >
          <IndexRoute component={SearchPage} />
          <IndexRoute component={DetailPage} />
          <Redirect from='*' to='/' />
        </Route>
        
        
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('app'))

