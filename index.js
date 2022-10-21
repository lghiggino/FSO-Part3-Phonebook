const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { generateId, duplicateName, morganLogger } = require("./utils");

let people = require("./fixtures");

const app = express();
app.use(cors());
app.use(express.static('build'))
app.use(express.json());
app.use(morganLogger());

app.get("/api/persons", (request, response) => {
  response.json(people);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = people.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.get("/info", (request, response) => {
  const responseHTML = `
    <section>
        <p>Phonebook has info for ${people.length} people</p>
        <p>${new Date()}</p>
    </section>
    `;
  response.send(responseHTML);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = people.find((person) => person.id === id);
  if (person) {
    people.filter((person) => person.id !== id);
    response.status(204).end();
  } else {
    response.status(404).end();
  }
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  const isDuplicate = duplicateName(people, body.name);

  if (isDuplicate) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing",
    });
  }

  const newPersonId = generateId(people);
  body.id = newPersonId;

  people = people.concat(body);
  response.status(201).json(body);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// https://fullstackopen.com/en/part3/deploying_app_to_internet
