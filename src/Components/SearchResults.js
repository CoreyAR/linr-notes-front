import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

class SearchResults extends React.Component {

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render () {
    let rows = [<li>test</li>, <li>test2</li>];

    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {rows}
        </ul>
      </div>
    )
  }
}

export default SearchResults
