import React from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increaseCount = () => {
    this.setState((prevState, prevProps) => {
      return { count: prevState.count + prevProps.diff };
    });
  };
  decreaseCount = () => {
    this.setState((prevState, prevProps) => {
      return { count: prevState.count - prevProps.diff };
    });
  };
  render() {
    this.props.diff;
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>+{this.props.diff}</button>
        <button onClick={this.decreaseCount}>-{this.props.diff}</button>
      </div>
    );
  }
}

root.render(
  <div>
    <App diff={1} />
    <App diff={10} />
  </div>
);
