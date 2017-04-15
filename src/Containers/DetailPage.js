import React from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Map, {GoogleApiWrapper, Marker} from '../Components/Map'
import mapStyles from './Styles/RootMapStyle'

class _DetailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 36.1639,
      lng: -86.7817,
    }
  }

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {

  }


  render () {

    return (
      <div className={'row'}>
        <div className={'col s6'}>
         <Card style={{width:'400px',}}>
          <CardMedia
            overlay={<CardTitle title={this.props.result.albumTitle} subtitle={this.props.result.artist}/>}
          >
            <img src={this.props.result.artwork}  />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            
          </CardText>
        </Card>
        </div>
        <div className={'col s6'}>
          <Map
            style={{height: '200px', width: '200px',}}
            onReady={this.fetchPlaces}
            google={this.props.google}
            zoom={14}
            initialCenter={{lat: this.state.lat, lng: this.state.lng}}
            center={null}
            mapStyles={mapStyles}
          >
            <Marker
                key={Math.random()}
                // position={{lat: this.state.lat, lng: this.state.lng}}
                onClick={this.onMarkerClick}
             />
          </Map>
          </div>
        
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    result: state.search.result
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

const DetailPage = GoogleApiWrapper({
  apiKey: 'AIzaSyCgB_ol9ARr3j0fiY515y2MzFZcSAzbF50', libraries: ['places']
})(_DetailPage)

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)


