import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

class SearchForm extends React.Component {

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render () {

    return (
        <form>
          <label for="artistSearch">Artist</label>
          <input type="text" name="artistSearch" id="artistSearch" />
          <br/>
          <label for="songSearch">Song</label>
          <input type="text" name="songSearch" id="songSearch" />
          <br/>
          <label for="spotifyUriSearch">Spotify URI (song URIs only)</label>
          <input type="text" name="spotifyUriSearch" id="spotifyUriSearch" />
          <br/>
          <RaisedButton>Submit</RaisedButton>
        </form>
    )
  }
}

export default SearchForm
