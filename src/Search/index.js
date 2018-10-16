import React, {Component} from 'react';

import Form from '../Form';
import Results from '../Results';
import settings from '../settings';

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fetching: false,
      items: [],
    }

    this.onSearch = this.onSearch.bind(this)
  }

  onSearch (search) {
    this.setState({fetching: true})

    fetch(`${settings.api_url}${search}`, {
      headers: settings.default_headers
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({fetching: false})
        this.setState({items: result.items})
        console.log('aaaaa', result)
      })
  }

  render () {
    return(
      <section className="App-body">
        <Form onSearch={this.onSearch} fetching={this.state.fetching} onResults />
        <Results items={this.state.items}/>
      </section>
    )
  }
}

