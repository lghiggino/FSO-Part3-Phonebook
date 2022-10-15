const express = require("express")
let people = require("./fixtures")

const app = express()

app.use(express.json())

app.get('/api/persons', (request, response) => {
    response.json(people)
})

app.get('/info', (request, response) => {
    const responseHTML = `
    <section>
        <p>Phonebook has info for ${people.length} people</p>
        <p>${new Date()}</p>
    </section>
    `
    response.send(responseHTML)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})