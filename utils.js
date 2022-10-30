const morgan = require("morgan");

const generateId = (people) => {
  const maxId =
    people.length > 0 ? Math.max(...people.map((person) => person.id)) : 0;
  return maxId + 1;
};

const duplicateName = (people, name) =>
  people.some((person) => person.name === name);

const morganLogger = () => {
  return morgan(function (tokens, req, res) {
    console.log(req.method);

    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError"){
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = { generateId, duplicateName, morganLogger, errorHandler };
