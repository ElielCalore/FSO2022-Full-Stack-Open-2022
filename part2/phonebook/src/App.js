/*import ShowNote from "./example/showNote/showNote";*/
import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      persons.filter(
        (currentName) =>
          currentName.name.toLowerCase() === newName.toLowerCase()
      ).length > 0
    ) {
      return alert(`${newName} is already added to phonebook`);
    }

    setPersons([...persons, { name: newName }]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      {persons.map((currentElement) => {
        return (
          <div key={currentElement.name}>
            <strong>{currentElement.name}</strong>
          </div>
        );
      })}

      {/*<ShowNote />*/}
    </div>
  );
}

export default App;
