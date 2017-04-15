import React from 'react'
import mapStyles from './Styles/RootMapStyle'
import RaisedButton from 'material-ui/RaisedButton'

class SearchPage extends React.Component {
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
        <h1>SearchPage</h1>
        <form>
          <label for="artistSearch">Artist</label>
          <input type="text" name="artistSearch" id="artistSearch" />
          <br/>
          <label for="songSearch">Song</label>
          <input type="text" name="songSearch" id="songSearch" />
          <br/>
          <label for="spotifyUriSearch">Spotify URI</label>
          <input type="text" name="spotifyUriSearch" id="spotifyUriSearch" />
          <br/>
          <RaisedButton>Submit</RaisedButton>
        </form>
      </div>
    )
  }
}

export default SearchPage
