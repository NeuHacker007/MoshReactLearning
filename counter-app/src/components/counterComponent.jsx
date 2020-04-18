import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
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
      count: this.state.count + 1,
    });
  };
  /**
   * This is one way to passing event paremeter,
   * It wraps the real handleIncrement function with
   * another function just because, in
   *  onClick ={function}
   * the function here is just the memory address which
   * cannot have () to pass in the parameter,
   * An altertive way is just put this dohandleIncrement
   * replace the function in onClick. To avoid messy by wrapping
   * too many levels
   */
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

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
