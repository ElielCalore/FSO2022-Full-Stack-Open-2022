/*import ShowNote from "./example/showNote/showNote";*/
import { useState, useEffect } from "react";
import Filter from "./components/filter/filter";
import AddNew from "./components/addNew/addNew";
import Phonebooks from "./components/phonebook/phonebook";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState();

  const handleChange = (e) =>
    setNewName({ ...newName, [e.target.name]: e.target.value });
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
    setAdd({ name: newName.name, number: newName.number });
  };
  useEffect(() => {
    async function addNewPerson() {
      try {
        if (newName.name.length > 0 && newName.number.length > 0) {
          const response = await axios.post(
            "http://localhost:3001/persons",
            add
          );
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
    addNewPerson();
  }, [add]);

  useEffect(() => {
    const eventHandler = (response) => {
      setPersons(response.data);
    };

    const promise = axios.get("http://localhost:3001/persons");
    promise.then(eventHandler);
  }, []);

  return (
    <div>
      <Phonebooks handleChangeSearch={handleChangeSearch} />
      <AddNew handleSubmit={handleSubmit} handleChange={handleChange} />
      <Filter persons={persons} search={search} />

      {/*<ShowNote />*/}
    </div>
  );
}
export default App;
