import React from 'react'
import SearchForm from '../Components/SearchForm'
import SearchActions from '../Redux/SearchRedux'
import {connect} from 'react-redux'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {

  }


  render () {
    return (
      <div>
        <h1>SearchPage</h1>
        <SearchForm searchRequest={this.props.searchRequest}/>
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
