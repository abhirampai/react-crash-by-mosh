import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span style={{fontSize: 30}} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btm-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
