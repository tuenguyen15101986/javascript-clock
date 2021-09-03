class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      countDown: 25,
      startStop: "Start",
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement = (event) => {
    if (event.target.id === "break-decrement" && this.state.breakLength > 0) {
      this.setState({ breakLength: (this.state.breakLength -= 1) });
    } else if (
      event.target.id === "session-decrement" &&
      this.state.sessionLength > 0
    ) {
      this.setState({ sessionLength: (this.state.sessionLength -= 1) });
    }
  };
  handleIncrement = (event) => {
    if (event.target.id === "break-increment" && this.state.breakLength < 60) {
      this.setState({ breakLength: (this.state.breakLength += 1) });
    } else if (
      event.target.id === "session-increment" &&
      this.state.sessionLength < 60
    ) {
      this.setState({ sessionLength: (this.state.sessionLength += 1) });
    }
  };
  render() {
    return (
      <div id="app">
        <h1>Pomodoro Timer</h1>
        <div id="config-wrapper">
          <div className="config">
            <div className="label" id="break-label">
              Break Length
            </div>
            <div className="control">
              <button id="break-decrement" onClick={this.handleDecrement}>
                -
              </button>
              <div className="time-display" id="break-length">
                {this.state.breakLength}
              </div>
              <button id="break-increment" onClick={this.handleIncrement}>
                +
              </button>
            </div>
          </div>
          <div className="config">
            <div className="label" id="session-label">
              Session Length
            </div>
            <div className="control">
              <button id="session-decrement" onClick={this.handleDecrement}>
                -
              </button>
              <div className="time-display" id="session-length">
                {this.state.sessionLength}
              </div>
              <button id="session-increment" onClick={this.handleIncrement}>
                +
              </button>
            </div>
          </div>
        </div>
        <div id="timer-wrapper">
          <div className="label" id="timer-label">
            Session
          </div>
          <div className="time-display" sid="time-left">
            {this.state.countDown}
          </div>
          <div className="control">
            <button id="start_stop">{this.state.startStop}</button>
            <button id="reset">Reset</button>
          </div>
        </div>
        <footer>A project by Tue Nguyen</footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
