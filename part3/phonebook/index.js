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

app.listen(3001, () => {
  console.log("Server up at port: ", process.env.PORT);
});
