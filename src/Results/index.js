import React, {Component} from 'react';
import './index.css';

import Item from '../ResultsItem';
import settings from '../settings';

export default class extends Component {
  render () {
    let {items} = this.props
    let listItems = items && items
      .map((item, index) =>
        <Item key={index}
          title={item[settings.mappings.title]}
          url={item[settings.mappings.url]}
          image_url={item[settings.mappings.image_url]}
        />)

    return(
      <div className="search-results">
        {items && items.length > 0 ? listItems : <h3>No search results</h3>}
      </div>
    )
  }
}
