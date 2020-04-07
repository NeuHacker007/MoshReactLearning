import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCounter()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
