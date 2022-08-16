import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this)
    
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    this.interval = setInterval(this.updateDate, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  updateDate() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    })
  }
  render() {
    return (
      <div id="app">
        <div id="time-wrapper">
          <p id="time">{this.state.time}</p>
        </div>
        <div id="upcoming">
          <ul>
            <li><a href="google.com" target="_blank" rel="noopener noreferrer">test</a></li>
            <li><a href="google.com" target="_blank" rel="noopener noreferrer">test</a></li>
            <li><a href="google.com" target="_blank" rel="noopener noreferrer">test</a></li>
          </ul>
        </div>
        <p>Test React clock</p>
      </div>
    );
  }
}

export default App;
