import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Steph", age: 26 }
    ],
    showPersons: false
  };

  swtichNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Steph", age: 26 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Steph", age: 26 }
      ]
    });
  };

  togglePersonHandler = () => {
    const condt = this.state.showPersons;
    this.setState({ showPersons: !condt });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

let persons = null;
if(this.state.showPersons){
  persons = (<div>
  <Person
    name={this.state.persons[0].name}
    age={this.state.persons[0].age}
  />
  <Person
    name={this.state.persons[1].name}
    age={this.state.persons[1].age}
    click={this.swtichNameHandler.bind(this, "Max!")}
    changed={this.nameChangedHandler}
  >
    My Hobbies: Racing
  </Person>
  <Person
    name={this.state.persons[2].name}
    age={this.state.persons[2].age}
  />
</div>)
}

    return (
      <div className="App">
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
