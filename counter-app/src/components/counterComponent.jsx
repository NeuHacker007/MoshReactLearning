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
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            // if we use map to re-map the array data, we need to provide
            // unique key attribute. Otherwise the react virtual dom will not
            // not know which item in the list is changing. This is similar
            // to the trackBy in Angular
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
