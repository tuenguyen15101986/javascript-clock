class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25,
    };
  }
  render() {
    return (
      <div id="app">
        <div id="config-wrapper">
          <div className="config">
            <div id="break-label">Break Length</div>
            <button id="break-decrement">Decrement</button>
            <div id="break-length">{this.state.breakLength}</div>
            <button id="break-increment">Increment</button>
          </div>
          <div className="config">
            <div id="session-label">Session Length</div>
            <button id="session-decrement">Decrement</button>
            <div id="session-length">{this.state.sessionLength}</div>
            <button id="session-increment">Increment</button>
          </div>
        </div>
        <div id="timer-wrapper">
          <div id="timer-label">Session</div>
          <div id="time-left">{this.state.timeLeft}</div>
          <button id="start_stop">Start / Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
