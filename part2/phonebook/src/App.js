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
    console.log(persons);
    console.log(newName);
    setPersons([...persons, { name: newName }]);
    console.log(persons);
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
        console.log(persons.length);
        return (
          <div>
            <strong>{currentElement.name}</strong>
          </div>
        );
      })}

      {/*<ShowNote />*/}
    </div>
  );
}

export default App;
