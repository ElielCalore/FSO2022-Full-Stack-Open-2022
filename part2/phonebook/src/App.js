/*import ShowNote from "./example/showNote/showNote";*/
import { useState, useEffect } from "react";
import Filter from "./components/filter/filter";
import AddNew from "./components/addNew/addNew";
import Phonebooks from "./components/phonebook/phonebook";
import { Alert } from "./components/alert/alert";
//import axios from "axios";
import services from "./services/services";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState({ name: "", number: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) =>
    setNewName({ ...newName, [e.target.name]: e.target.value });

  const handleChangeSearch = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      persons.filter((currentName) => currentName.name === newName.name)
        .length > 0
    ) {
      alert(
        `${newName.name} is already added to phonebook, replace the old number with a new one?`
      );
      {
        let filter = persons.filter(
          (currentName) => currentName.name === newName.name
        );
        const idToUpdate = filter[0].id;
        setAdd({ name: newName.name, number: newName.number, id: idToUpdate });
        setPersons([...persons, newName]);
        services.update(add);

        setMessage(`Update ${newName.name} was successfully`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);

        return services.getAll().then((initialLoad) => setPersons(initialLoad));
      }
    }

    if (
      persons.filter((currentName) => currentName.number === newName.number)
        .length > 0
    ) {
      return alert(`${newName.number} is already added to phonebook`);
    }

    //setAdd({ name: newName.name, number: newName.number });
    setPersons([...persons, newName]);
    services.create(newName);

    setMessage(`Added ${newName.name} was successfully`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  useEffect(() => {
    services.getAll().then((initialLoad) => setPersons(initialLoad));
  }, []);

  const remove = (id, name) => {
    console.log(id);
    if (alert(`Do you want to delete ${name} from your phonebook? `));
    {
      services
        .remove(id)
        .catch((err) => console.log(err))
        .then(setPersons(persons.filter((person) => person.id !== id)));

      setMessage(`Deleted ${newName.name} was successfully`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <Alert message={message} />
      <Phonebooks handleChangeSearch={handleChangeSearch} />
      <AddNew handleSubmit={handleSubmit} handleChange={handleChange} />
      <Filter persons={persons} search={search} remove={remove} />

      {/*<ShowNote />*/}
    </div>
  );
}
export default App;
