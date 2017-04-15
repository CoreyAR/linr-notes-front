import React from 'react'
import {API_KEY} from './../env'
import Map, {GoogleApiWrapper, Marker, InfoWindow, HeatmapOverlay} from '../Components/Map'
import mapStyles from './Styles/RootMapStyle'

var _RootMap = React.createClass({
  getInitialState () {
    return {
      activeMarker: null,
      lat: 36.1639,
      lng: -86.7817
    }
  },

  componentWillReceiveProps (nextProps) {
  },

  componentDidUpdate(prevProps, prevState) {
    
  },

  onMarkerClick: function (props, marker, e) {
    this.setState({
    })
  },

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

      <Map
        style={style}
        onReady={this.fetchPlaces}
        google={this.props.google}
        zoom={14}
        initialCenter={{lat: this.state.lat,lng: this.state.lng}}
        center={null}
        mapStyles={mapStyles}
      >
      </Map>
    )
  }
})

export default GoogleApiWrapper({
  apiKey: API_KEY, libraries: ['places']
})(_RootMap)
