/*import ShowNote from "./example/showNote/showNote";*/
import { useState } from "react";
import Filter from "./components/filter/filter";
import AddNew from "./components/addNew/addNew";
import Phonebooks from "./components/phonebook/phonebook";

/////////////////////////////////////////Modificações á partir daqui

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "999-999" },
  ]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [search, setSearch] = useState("");
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
  };
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
