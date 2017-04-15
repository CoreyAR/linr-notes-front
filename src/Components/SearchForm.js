import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {

    return (
        <form>
          <label htmlFor="spotifyUriSearch">Spotify URI (song URIs only)</label>
          <br/>
          <TextField onChange={this.handleChange.bind(this)} name="spotifyUriSearch" />
          <br/>
          <RaisedButton onClick={() => this.props.searchRequest(this.state.spotifyUriSearch)}>Submit</RaisedButton>
        </form>
    )
  }
}

export default SearchForm
