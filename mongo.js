const mongoose = require("mongoose")
require('dotenv').config()

if (process.argv.length < 3) {
    console.log("please provide the password as an argument node mongo.js <password>")
    process.exit(1)
}

const password = process.env.MONGO_DB_PASS

const url = process.env.MONGO_DB_CONNECTION_STRING
console.log("qual é a url?", url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model("Person", personSchema)

//CREATE
const person = new Person({
    name: "Barões da Pisadinha",
    number: "(75) 9 8888 7777"
})

person.save().then(response => {
    console.log("person saved", response)
    mongoose.connection.close()
}).catch(error => {
    console.log(error)
}).finally(
    console.log("over")
)