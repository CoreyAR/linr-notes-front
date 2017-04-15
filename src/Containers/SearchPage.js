import React from 'react'
import mapStyles from './Styles/RootMapStyle'

class SearchPage extends React.Component {
  getInitialState () {
    return {
      activeMarker: null,
      lat: 36.1639,
      lng: -86.7817
    }
  },

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  onMarkerClick: function (props, marker, e) {
    this.setState({
    })
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
    )
  }
}

export default SearchPage
