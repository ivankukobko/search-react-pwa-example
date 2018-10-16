import React, {Component} from 'react';
import './index.css';

export default class extends Component {
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
    const {fetching} = this.props
    return(
      <header>
        <form onSubmit={this.onFormSubmit} className="search-form-form">
          <input autofocus className="search-form-input" size="6" maxlength="1024" onChange={this.onInputChange}/>
          <button className="search-form-button" disabled={fetching}>Search</button>
        </form>
      </header>
    )
  }
}
