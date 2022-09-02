const { json } = require("express");
const express = require("express");
const app = express();
const persons = require("./db.json");

app.use(express.json());

app.get("/api/persons", (request, response) => {
  return response.status(200).json(persons);
});

app.listen(4001, () => {
  console.log("Server up at port: ", process.env.PORT);
});
