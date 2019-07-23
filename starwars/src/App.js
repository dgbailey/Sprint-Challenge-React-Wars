import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import PageNav from './components/PageNav';
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next:'',
      prev:''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      
      .then(res => {
        
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results,next:data.next,prev:data.previous });

      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <PageNav pagefunc={this.getCharacters} prev={this.state.prev } next={this.state.next}/>
        <CharacterList masterList={this.state.starwarsChars}/>
        <PageNav pagefunc={this.getCharacters} prev={this.state.prev } next={this.state.next}/>
      </div>
    );
  }
}

export default App;
