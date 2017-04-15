import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

class SearchResults extends React.Component {

  componentWillReceiveProps (nextProps) {
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render () {
    let rows = [];
    this.props.results.forEach((val) => {
      rows.push(<li>val</li>);
    })
    console.log(rows);

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
