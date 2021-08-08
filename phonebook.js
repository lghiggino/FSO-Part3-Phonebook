require("dotenv").config()
const express = require("express")
const app = express()
const Person = require("./models/people")


//MIDDLEWARES
app.use(express.json())
app.use(express.static("build"))

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
    response.send("<h1>If you are seeing this message something went wrong with: app.use(express.static('build')) </h1>")
})

app.get("/api/persons", (request, response) => {
    Person.find({}).then(elements => {
        response.json(elements)
    })
})

//get ONE
app.get("/api/persons/:id", (request, response) => {
    console.log("request.params.id: ", request.params.id)
    const idNumber = request.params.id
    const singlePerson = persons.filter(p => p.id === idNumber)

    if (singlePerson) {
        response.json(singlePerson)
    } else {
        response.status(404).end()
    }
})

//delete ONE
app.delete("/api/persons/:id", (request, response) => {
    const idNumber = request.params.id
    persons = persons.filter(p => p.id !== idNumber)

    // response.json(persons)
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
    try {
        const person = new Person({
            name: request.body.name,
            number: request.body.number,
        })

        person.save().then(savedPerson => {
            response.json(savedPerson)
        })
    }
    catch(error){
        console.log("error while creating a new person", error)
    }


    

    
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