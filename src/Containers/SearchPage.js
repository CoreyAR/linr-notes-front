import React from 'react'
import SearchForm from '../Components/SearchForm'
import SearchActions from '../Redux/SearchRedux'
import {connect} from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: {}
    }
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
        {this.props.loading ? <CircularProgress /> : null}
        {this.props.error ? <div>No results found, please try again</div> : null}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    fetch: state.search.fetch,
    error: state.search.error,
    result: state.search.result,
    loading: state.search.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    searchRequest: (query) => dispatch(SearchActions.searchRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
