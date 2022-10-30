require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { generateId, duplicateName, morganLogger, errorHandler } = require("./utils");
const Person = require("./models/person");

const app = express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(morganLogger());

app.get("/api/persons", (request, response) => {
  Person.find({}).then((people) => {
    response.json(people);
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findById(id).then((person) => {
    if (person){
      response.json(person);
    }else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
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
  const id = request.params.id;
  Person.findByIdAndRemove(id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;

  const person = new Person({
    name: body.name,
    number: body.number,
    date: new Date(),
  });

  person
    .save()
    .then((savedPerson) => {
      response.status(201).json(savedPerson);
    })
    .catch((error) => {
      next(error);
    });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// https://fullstackopen.com/en/part3/deploying_app_to_internet
