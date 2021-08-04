import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  handleDecrement = () => {
      this.setState({
          value: this.state.value === 0 ? 0 : this.state.value - 1,
      })
  }

  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btm-sm"
        >
          Increment
        </button>
        <button onClick={this.handleDecrement} className="btn btn-danger btm-sm m-2">
            Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value <= 0 ? "Zero" : value;
  }
}

export default Counter;
