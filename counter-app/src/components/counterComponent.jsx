import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
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
    //console.log(productId);
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    console.log("props", this.props);
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCounter() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
