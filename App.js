class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="config-wrapper">
          <div className="config">
            <div id="break-label">Break Length</div>
          </div>
          <div className="config">
            <div id="session-label">Session Length</div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))