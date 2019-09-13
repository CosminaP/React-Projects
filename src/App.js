import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ heroes: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { heroes, searchField } = this.state;
    const filterHeroes = heroes.filter(hero =>
      hero.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Heroes Rolodex</h1>
        <SearchBox handleChange={this.handleChange}
          placeholder="Search for heroes">
        </SearchBox>
        <CardList heroes={filterHeroes} />
      </div>
    )
  }
}
export default App;