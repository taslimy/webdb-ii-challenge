const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/lambda.db3"
  },
  useNullAsDefault: true,
  debug: true
};

const db = knex(knexConfig);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db("bears");
}

function findById(id) {
  return db("bears")
    .where({ id })
    .first();
}

function insert(bear) {
  return db("bears").insert(bear);
}

function update(id, changes) {
  return db("bears")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("bears")
    .where({ id })
    .del();
}
