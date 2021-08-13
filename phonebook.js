require("dotenv").config()
const express = require("express")
const app = express()
const Person = require("./models/people")

//MIDDLEWARES
app.use(express.static("build"))
app.use(express.json())

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
    const personId = request.params.id

    Person.findById(personId).then(element => {
        if (element) {
            response.json(element)
        } else {
            response.status(404).end()
        }
    }).catch(error => {
        console.log(error)
        response.status(400).send({ error: "malformatted id" })
    })

})

//delete ONE
app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id
    Person.findByIdAndRemove(id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => {
            console.error(error)
        })
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

    if (!Person.findOne({ name: request.body.name })) {
        try {
            const person = new Person({
                name: request.body.name,
                number: request.body.number,
            })

            person.save().then(savedPerson => {
                response.json(savedPerson)
            })
        }
        catch (error) {
            console.log("error while creating a new person", error)
        }
    } else {
        const id = request.params.id
        const person = {
            name: request.body.name,
            number: request.body.number
        }

        Person.findOneAndUpdate(id, person, { new: true })
            .then(updatePerson => {
                response.json(updatePerson)
            })
            .catch(error => {
                console.log(error)
            })
    }
})



app.get("/info", (request, response) => {
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

const unknownEndpoint = (request, response) => {
    response.status(404).send({ "error": "Unknown Endpoint" })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.log("================HIT THE ERROR HANDLER==================")
    console.error(error)
    if (error.name === "CastError") {
        return response.status(400).send({ error: "Malformatted id" })
    } else if (error.name === "ValidationError") {
        return response.status(400).send({ error: "Validation error" })
    }
    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3004
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})