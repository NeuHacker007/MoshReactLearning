import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return "Please create a new tag";
    return (
      <ul>
        {this.state.tags.map((tag) => (
          // if we use map to re-map the array data, we need to provide
          // unique key attribute. Otherwise the react virtual dom will not
          // not know which item in the list is changing. This is similar
          // to the trackBy in Angular
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return <div>{this.renderTags()}</div>;
  }
}

export default Counter;
