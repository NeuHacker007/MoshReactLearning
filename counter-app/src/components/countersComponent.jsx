import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = () => {
      console.log("delete event is called!");
  }

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => {
          return (
            <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete}>
            </Counter>
          );
        })}
      </div>
    );
  }
}

export default Counters;
