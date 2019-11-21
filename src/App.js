import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a1", name: "Max", age: 28 },
      { id: "a2", name: "Manu", age: 29 },
      { id: "a3", name: "Steph", age: 26 }
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

  deletePersonHandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
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
