import React, {PureComponent} from 'react';
import './index.css';

export default class extends PureComponent {
  render () {
    const {image_url, url, title, description} = this.props

    return(
      <li className="search-results-item">
        {image_url &&
            <a href={url || ''}>
              <img src={image_url} className="search-results-item-image" />
            </a>}
        <a className="search-results-item-title" href={url || ''}>{title}</a>
        <div className="search-results-item-description">{description || ''}</div>
      </li>
    )
  }
}

