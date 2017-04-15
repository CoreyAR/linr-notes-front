import React from 'react'
import {connect} from 'react-redux'
import Header from '../Components/Header.js'
// Grid Styles for Whole App
require('./../Styles/main.scss')
/**
 * Application component
 *
 * This is the parent component for all routes in the application. It displays
 * the header and wraps the content of the current route in a container div.
 */
class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div >
        <Header />
        <div className='container'>
          <div className='row'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
