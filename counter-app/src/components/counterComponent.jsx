import React, { Component } from "react";
class Counter extends Component {
  /**
   * a component without any local state is called controlled component.
   * It is using the props and event to communicate with components that
   * has local state
   */
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    // console.log("props", this.props);
    // when user want to pass some elements within the component tag
    // this is where to use this.props.children to access those.
    // eg. in parent component we have some elements within the component tag
    //    <Counter> <h4></h4> </Counter>
    // we can access <h4> through this.props.children
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCounter() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
