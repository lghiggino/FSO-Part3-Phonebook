const mongoose = require("mongoose")
require("dotenv").config()

// if (process.argv.length < 3) {
//     console.log("please provide the password as an argument node mongo.js <password> ")
//     process.exit(1)
// }

const url = process.env.MONGO_DB_CONNECTION_STRING
console.log("qual é a url?", url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log("Connected to MongoDB")
    }).catch(error => {
        console.error(error)
    })


const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        minLength: 8,
        maxLength: 20,
        required: true,
    }
})

personSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Person", personSchema)

//CREATE
// const person = new Person({
//     name: "Mica Allen",
//     number: "123-456-789-0"
// })

// person.save().then(response => {
//     console.log("person saved", response)
//     mongoose.connection.close()
// }).catch(error => {
//     console.log(error)
// }).finally(
//     console.log("over")
// )