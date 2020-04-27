import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    const { onIncrement, onDelete, onReset, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            ></Counter>
          );
        })}
      </div>
    );
  }
}

export default Counters;
