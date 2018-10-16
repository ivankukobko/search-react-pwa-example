import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (e) {
    console.log('in', e, e.target.value)
    this.state.search = e.target.value
  }

  onFormSubmit (e) {
    e.preventDefault();
    let {search} = this.state
    if (search == null || search == '') return
    console.log('out', search)

    this.props.onSearch(search)
  }

  render () {
    return(
      <form onSubmit={this.onFormSubmit} className="search-form-form">
        <input className="search-form-input" onChange={this.onInputChange}/>
        <button className="search-form-button">Search {this.props.fetching ? '...' : ''}</button>
      </form>
    )
  }
}

export default SearchForm;
