import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  // The below solution is the old way to dealing with this binding problem in React.
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // The fat arrow function doesn't needs to rebind the this to refer to the component obj
  handleIncrement = () => {
    console.log("Counter Increased", this);

    // In react, it doesn't automactically detect the changes, we 
    // need to call setState method of react to keep view and data sync
    // explicitly. The SetState will merge or update the state based on 
    // whether the origin state already have this property or not.
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
