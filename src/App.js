import "./App.css";
import NavBar from "./components/navbar";
// import Counters from "./components/counters";
import React, { Component } from "react";
// import HookCounter from "./components/HookCounter";
// import UsingObjects from "./components/UsingObjects";
// import UpdateDocumentTitle from "./components/UpdateDocumentTitle";
// import HookMouse from "./components/HookMouse";
import UseMemoCounters from "./components/UseMemoCounters";
class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => ({ ...c, value: 0 }));
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value =
      counters[index].value <= 0 ? 0 : counters[index].value - 1;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> */}
          {/* <HookCounter /> */}
          {/* <UsingObjects /> */}
          {/* <UpdateDocumentTitle /> */}
          {/* <HookMouse /> */}
          <UseMemoCounters />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
