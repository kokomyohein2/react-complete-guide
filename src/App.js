import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Steph", age: 26 }
    ]
  };

  swtichNameHandler = () => {
    console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.swtichNameHandler}>Swtich Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
      </div>
    );
  }
}

export default App;
