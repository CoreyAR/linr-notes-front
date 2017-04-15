import React from 'react'
import mapStyles from './Styles/RootMapStyle'

class DetailPage extends React.Component {
  getInitialState () {
    return {
    }
  }

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
    
  }


  render () {
    const style = {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '100%'
    }

    return (
      <div>
        <h1>DetailPage</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)


