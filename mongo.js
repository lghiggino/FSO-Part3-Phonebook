const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const personName = process.argv[3];
const personPhone = process.argv[4];

const url = `mongodb+srv://fullStackOpen:${password}@cluster1.sy3fs6k.mongodb.net/personApp?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3){
    getAllPeople()
}

if (process.argv.length === 5) {
    addNewPerson()
}

async function addNewPerson() {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");

      const person = new Person({
        name: `${personName}`,
        number: `${personPhone}`,
        date: new Date(),
      });

      return person.save();
    })
    .then(() => {
      console.log("person saved!");
      console.log(`Added ${personName} ${personPhone} to phonebook`);
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}

async function getAllPeople(){
    mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");

      Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person)
        })
        mongoose.connection.close()
      })
    })
    .then(() => {
      console.log("person saved!");
      console.log(`Added ${personName} ${personPhone} to phonebook`);
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}