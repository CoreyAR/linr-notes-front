import React from 'react'
import SearchActions from '../Redux/SearchRedux'
import mapStyles from './Styles/RootMapStyle'

class SearchPage extends React.Component {
  getInitialState () {
    return {
    }
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

export default SearchPage
