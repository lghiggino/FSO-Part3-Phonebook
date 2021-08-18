const peopleRouter = require("express").Router()
const Person = require("../models/people")

peopleRouter.get("/", (request, response) => {
    Person.find({}).then(elements => {
        response.json(elements)
    })
})

peopleRouter.get("/:id", (request, response, next) => {
    // console.log("request.params.id: ", request.params.id)
    const personId = request.params.id

    Person.findById(personId).then(element => {
        if (element) {
            response.json(element)
        } else {
            response.status(404).end()
        }
    }).catch(error => { next(error) })
})

peopleRouter.delete("/:id", (request, response, next) => {
    const id = request.params.id
    Person.findByIdAndRemove(id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => { next(error) })
})

peopleRouter.post("/", (request, response, next) => {
    console.log(request.body)

    if (!request.body.name) {
        return response.status(400).json({ error: "name missing" })
    }
    if (!request.body.number) {
        return response.status(400).json({ error: "number missing" })
    }

    const person = new Person({
        name: request.body.name,
        number: request.body.number,
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    }).catch(error => { next(error) })

})

peopleRouter.get("/info", (request, response) => {
    let personsLenght = 0
    let newDate = new Date().toLocaleDateString()

    Person.find({}).then(elements => {
        personsLenght = elements.length
    }).then(() => {
        response.send(`
        <div>
            <h2>Phonebook has info for ${personsLenght} people</h2>
            <p> ${newDate} </p>
        </div>
    `)
    })
})

module.exports = peopleRouter