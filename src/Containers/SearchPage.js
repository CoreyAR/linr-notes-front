import React from 'react'
import SearchForm from '../Components/SearchForm'
import SearchResults from '../Components/SearchResults'
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

  onSearchSubmit(query) {
    this.props.searchRequest(query)
  }


  render () {
    return (
      <div>
        <h1>SearchPage</h1>
        <SearchForm onSearchSubmit={this.onSearchSubmit.bind(this)}/>
        <SearchResults />
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
