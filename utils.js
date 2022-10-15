const generateId = (people) => {
    const maxId = people.length > 0 ? Math.max(...people.map((person) => person.id)) : 0;
    return maxId + 1;
};

const duplicateName = (people, name) => people.some((person) => person.name === name);
  
module.exports = {generateId, duplicateName};