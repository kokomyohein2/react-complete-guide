import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Steph", age: 26 }
    ],
    otherState: "some other value"
  });

  const swtichNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "ko", age: 1 },
        { name: "Manu", age: 1 },
        { name: "Steph", age: 1 }
      ]
    });
  };

  return (
    <div className="App">
      <button onClick={swtichNameHandler}>Swtich Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
