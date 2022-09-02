const { json, response } = require("express");
const express = require("express");
const app = express();
const persons = require("./db.json");

app.use(express.json());

app.get("/api/persons", (request, response) => {
  return response.status(200).json(persons);
});

app.get("/info", (request, response) => {
  const date = {
    date: new Date(),
    howMany: `Phonebook has info for ${persons.length} people `,
  };
  return response.status(200).json(date);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const filter = persons.find((currentPerson) => currentPerson.id === id);
  if (filter) {
    return response.status(200).json(filter);
  } else {
    return response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const filter = persons.filter((currentPerson) => currentPerson.id === id);
  if (filter) {
    persons.splice(filter[0].id - 1, filter[0].id);
    return response.status(200).json(persons);
  } else {
    return response.status(404).end;
  }
});

app.post("/api/persons", (request, response) => {
  const person = request.body;
  if (person.name.length === 0 || person.number.length === 0) {
    return response
      .status(404)
      .json({ message: "The name or number is missing" });
  }
  const filter = persons.filter((current) => current.name === person.name);
  if (filter.length === 1) {
    return response.status(404).json({ message: "Name best Unique" });
  }
  person.id = Math.floor(Math.random() * 10000);
  persons[persons.length] = person;
  return response.json(persons);
});

app.listen(3001, () => {
  console.log("Server up at port: ", process.env.PORT);
});
