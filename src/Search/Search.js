import React, {Component} from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';

class Search extends Component {
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

    fetch(`https://api.github.com/search/users?q=${search}`, {
      headers: {
        "User-Agent": "Awesome-Octocat-App",
        "Accept": "application/vnd.github.v3+json"
      }
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
        <SearchForm onSearch={this.onSearch} fetching={this.state.fetching} onResults />
        <SearchResults items={this.state.items}/>
      </section>
    )
  }
}

export default Search;

