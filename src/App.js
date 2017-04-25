import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <ul>
              <li>Programming
                  <ul>
                      <li><a href="https://github.com/trending">Github trending repositories</a></li>
                      <li><a href="https://news.ycombinator.com/">Hacker News</a></li>
                      <li><a href="https://github.com/markerikson/react-redux-links">react-redux-links</a></li>
                      <li><a href="https://discordapp.com/channels/102860784329052160/102860784329052160">reactiflux</a></li>
                      <li><a href="https://www.reddit.com/r/javascript+programming+reactjs+webdev/">Reddit programming</a></li>
                  </ul>
              </li>
              <li>Sports
                  <ul>
                      <li><a href="http://rotoworld.com/sports/nfl/football">Rotoworld NFL</a></li>
                      <li><a href="http://www.thescore.com/trending">theScore</a></li>
                      <li><a href="https://www.reddit.com/r/nfl+nba+hockey+baseball+CollegeBasketball+cfb/">Reddit sports</a></li>
                  </ul>
              </li>
              <li>Politics
                  <ul>
                      <li><a href="http://www.allsides.com/">AllSides</a></li>
                      <li><a href="http://www.politico.com/">Politico</a></li>
                      <li><a href="http://www.politifact.com/">Politifact</a></li>
                      <li><a href="https://fivethirtyeight.com/politics/">FiveThirtyEight</a></li>
                      <li><a href="http://www.npr.org/sections/politics/">NPR News</a></li>
                      <li><a href="https://www.theatlantic.com/politics/">The Atlantic</a></li>
                  </ul>
              </li>
              <li>Misc
                  <ul>
                      <li><a href="https://getpocket.com">Pocket</a></li>
                      <li><a href="https://medium.com/">Medium</a></li>
                  </ul>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
