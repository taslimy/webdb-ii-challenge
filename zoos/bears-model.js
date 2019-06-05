const db = require("../data/dbConfig");

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
