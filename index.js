const express = require("express");
let people = require("./fixtures");

const app = express();

app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(people);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = people.find((person) => person.id === id);
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
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
      people.filter(person => person.id !== id)
      response.status(204).end()
    } else {
      response.status(404).end()
    }
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
