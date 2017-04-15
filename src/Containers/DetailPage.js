import React from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Map, {GoogleApiWrapper, Marker} from '../Components/Map'
import mapStyles from './Styles/RootMapStyle'
import data from '../Data/example.json'


class _DetailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 36.1639,
      lng: -86.7817,
    }
  }


  render () {
    const result = data[0]

    return (
      <div className={'row'} style={{marginTop: '32px'}}>
        <div className={'col s6'}>
         <Card style={{width:'400px',}}>
          <CardMedia
            overlay={<CardTitle title={result.title} subtitle={result.artist}/>}
          >
            <img src={result.image}  />
          </CardMedia>
          <CardText>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p>Release Date</p><p>{result.release_date}</p>
          </div>
          <div style={{borderBottom: '1px solid grey', display: 'flex', justifyContent: 'space-between'}}>
            <p>Labels</p><p>{result.labels[0]}</p>
          </div>
            
          </CardText>
        </Card>
        </div>
        <div className={'col s6'}>
        {
          result.tracks.map((t, i) => {
              console.log(t)
              return (
                <Card
                  
                  key={i}
                >
              <CardHeader
                  title={t.recording.title}
                actAsExpander
                showExpandableButton
                />
                <CardText expandable={true}>
                  <ul>
                {t.recording['artist-relation-list'].map((a, i) => {
                  // console.log(a)
                  return (
                  <li key={i}>
                    <p>{a.artist.name} - {a['attribute-list'] ? a['attribute-list'].join(', ') : a.type}</p>
                  </li>
                  )
                })}
                </ul>
                </CardText>
                </Card>
              )
          })
        }
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


