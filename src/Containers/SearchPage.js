import React from 'react'
import SearchForm from '../Components/SearchForm';
import SearchResults from '../Components/SearchResults';

class SearchPage extends React.Component {

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render () {
    return (
      <div>
        <h1>SearchPage</h1>
        <SearchForm />
        <SearchResults />
      </div>
    )
  }
}

export default SearchPage
