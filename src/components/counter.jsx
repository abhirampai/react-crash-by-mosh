import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <div>
          {this.state.tags.length !==0 ? <ul>
          {this.state.tags.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul> : <span>No tags</span>}
        
      </div>
    );
  }
}

export default Counter;
