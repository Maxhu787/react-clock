import React from 'react';
import './App.css';

/*
function getRealTime() {
  const currentTime = Date.now();
  console.log(new Date(Math.round(currentTime / 1000) * 1000), currentTime);
  return (Math.floor(currentTime / 1000) + 1) * 1000 - currentTime;
}

(async function () {
  let reduceTime = 0;
  while (true) {
    reduceTime = getRealTime();
    await sleep(reduceTime);
  }
})()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};*/

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
        <p>Test React clock</p>
        <div id="time">{this.state.time}</div>
      </div>
    );
  }
}

export default App;
