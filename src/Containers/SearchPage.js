import React from 'react'
import {connect} from 'react-redux'
import SearchActions from '../Redux/SearchRedux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  onSearchSubmit(query) {
    this.props.searchRequest(query)
  }


  render () {
    const style = {
  
    }

    return (
      <div>
      <h1>SearchPage</h1>
          <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    />
    <RaisedButton label="Primary" primary={true} style={style} onTouchTap={this.onSearchSubmit.bind(this)}/>
    <h2>{this.props.result}</h2>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    fetch: state.search.fetch,
    error: state.search.error,
    result: state.search.result
  }
}

function mapDispatchToProps (dispatch) {
  return {
    searchRequest: (query) => dispatch(SearchActions.searchRequest(query)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
