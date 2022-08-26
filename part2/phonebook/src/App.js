/*import ShowNote from "./example/showNote/showNote";*/
import { useState } from "react";

/////////////////////////////////////////Modificações á partir daqui

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "999-999" },
  ]);

  const [newName, setNewName] = useState({ name: "", number: "" });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  };

  const handleChangeSearch = (e) => setSearch(e.target.value);

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

    setPersons([...persons, { name: newName.name, number: newName.number }]);
  };

  console.log(persons);
  // .filter((cur) => cur.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with
          <input
            size="large"
            value={search}
            type="text"
            placeholder="input search text"
            onChange={handleChangeSearch}
            enterButton
          />
        </div>

        <h2>Add a new</h2>
        <div>
          name:{" "}
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={persons.name}
          />
        </div>
        <div>
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
      </form>
      <h2>Numbers</h2>

      {persons
        .filter((cur) => cur.name.toLowerCase().includes(search.toLowerCase()))
        .map((currentElement) => {
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
