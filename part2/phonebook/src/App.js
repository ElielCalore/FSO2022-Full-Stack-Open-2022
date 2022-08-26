/*import ShowNote from "./example/showNote/showNote";*/
import { useState } from "react";

/////////////////////////////////////////Modificações á partir daqui

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "999-999" },
  ]);

  const [newName, setNewName] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      persons.filter((currentName) => currentName.name === newName.name)
        .length > 0
    ) {
      return alert(`${newName.name} is already added to phonebook`);
    }
    if (
      persons.filter((currentName) => currentName.number === newName.number)
        .length > 0
    ) {
      return alert(`${newName.number} is already added to phonebook`);
    }

    setPersons([
      ...persons,
      { name: newName.name },
      { number: newName.number },
    ]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={persons.name}
          />
          number:
          <input
            onChange={handleChange}
            type="text"
            name="number"
            value={persons.number}
          />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
        <div>
          debug: {newName.name} {newName.number}
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((currentElement) => {
        return (
          <div key={currentElement.name}>
            <strong>
              {currentElement.name} {currentElement.number}
            </strong>
          </div>
        );
      })}

      {/*<ShowNote />*/}
    </div>
  );
}

export default App;
