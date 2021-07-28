const express = require("express")
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

let persons = require("./persons.js")

//creating Middleware
const requestLogger = (request, response, next) => {
    console.log("Method", request.method)
    console.log("Path", request.path)
    console.log("Body", request.body)
    console.log("-----")
    next()
}
app.use(requestLogger)


// ROUTES
app.get("/", (request, response) => {
    response.send("<h1>Hello from Phonebook</h1>")
})

app.get("/api/persons", (request, response) => {
    request.body = ""
    response.json(persons)
})

//get ONE
app.get("/api/persons/:id", (request, response) => {
    const idNumber = +request.params.id
    const singlePerson = persons.filter(p => p.id === idNumber)
    if (singlePerson) {
        response.json(singlePerson)
    } else {
        response.status(404).end()
    }
})

//delete ONE
app.delete("/api/persons/:id", (request, response) => {
    const idNumber = +request.params.id
    persons = persons.filter(p => p.id !== idNumber)

    response.status(204).end()
})

//post ONE
app.post("/api/persons", (request, response) => {
    console.log(request.body)

    if (!request.body.name) {
        return response.status(400).json({ error: "name missing" })
    }
    if (!request.body.number) {
        return response.status(400).json({ error: "number missing" })
    }

    // const repeatedPerson = persons.filter(person => person.name === request.body.name)
    // if (repeatedPerson) {
    //     return response.status(400).json({ error: "Name must be unique" })
    // }

    persons.filter(person =>{ 
        if(person.name === request.body.name){
            console.log(person.name, request.body.name)
            return response.status(400).json({ error: "Name must be unique" })
        }
    })

    const generateId = () => {
        return persons.length + 1
    }

    const person = {
        name: request.body.name,
        number: request.body.number,
        id: generateId()
    }

    persons = persons.concat(person)
    response.json(person)
})



app.get("/info", (request, response) => {
    const personsLenght = persons.length
    const newDate = new Date()

    response.send(`
        <div>
            <h2>Phonebook has info for ${personsLenght} people</h2>
            <p> ${newDate} </p>
        </div>
    `)
})

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ "error": "Unknown Endpoint" })
}

app.use(unknownEndpoint)
const PORT = process.env.PORT || 3004
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})