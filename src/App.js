import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  getSeconds() {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  getMinutes() {
    return Math.floor(this.state.secondsElapsed / 60);
  }

  handleStartClick() {
    this.increment = setInterval( () => {
      this.setState({ secondsElapsed: (this.state.secondsElapsed + 1)});
    }, 1000)
  }

  handleStopClick() {
    clearInterval(this.increment);
  }

  handleResetClick() {
    clearInterval(this.increment);
    this.setState({ secondsElapsed: 0});
  }

  render() {
    return (
      <div>
      <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
      <button type="button" onClick={this.handleStartClick}>Start</button>
      <button type="button" onClick={this.handleStopClick}>Stop</button>
      <button type="button" onClick={this.handleResetClick}>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
