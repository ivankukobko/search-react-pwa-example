import React, {Component} from 'react';
import './SearchResults.css';

class SearchResults extends Component {
  render () {
    let {items} = this.props
    let listItems = items && items.map((item, index) => <li key={index}>{item.login}</li>)

    return(
      <div className="search-results">
        {this.props.items && this.props.items.length > 0 ? listItems : <h3>Nothing found</h3>}
      </div>
    )
  }
}

export default SearchResults;
