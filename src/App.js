import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">

                    <ul className="collection with-header">
                        <li className="collection-header">Aggregators</li>
                        <a className="collection-item" href="https://www.youtube.com/playlist?list=WL">YouTube</a>
                        <a className="collection-item" href="https://www.instapaper.com/u">Instapaper</a>
                    </ul>

                    <ul className="collection with-header">
                        <li className="collection-header">Articles</li>
                        <a className="collection-item" href="https://news.ycombinator.com/">Hacker News</a>
                        <a className="collection-item" href="https://github.com/markerikson/react-redux-links">react-redux-links</a>
                        <a className="collection-item" href="https://fivethirtyeight.com">FiveThirtyEight</a>
                        <a className="collection-item" href="https://www.theatlantic.com">The Atlantic</a>
                    </ul>

                    <ul className="collection with-header">
                        <li className="collection-header">Social</li>
                        <a className="collection-item" href="https://twitter.com/">Twitter</a>
                        <a className="collection-item" href="https://discordapp.com/channels/102860784329052160/102860784329052160">reactiflux</a>
                        <a className="collection-item" href="https://www.reddit.com/r/javascript+programming+reactjs+webdev/">Reddit programming</a>
                        <a className="collection-item" href="https://www.reddit.com/r/nfl+nba+hockey+baseball+CollegeBasketball+cfb/">Reddit sports</a>
                    </ul>

                    <ul className="collection with-header">
                        <li className="collection-header">Other</li>
                        <a className="collection-item" href="https://github.com/trending">Github trending repositories</a>
                        <a className="collection-item" href="http://rotoworld.com/sports/nfl/football">Rotoworld NFL</a>
                        <a className="collection-item" href="http://www.politifact.com/">Politifact</a>
                        <a className="collection-item" href="http://www.allsides.com/">AllSides</a>
                    </ul>
            </div>
        );
    }
}

export default App;
