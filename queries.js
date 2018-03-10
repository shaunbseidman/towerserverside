const database = require("./knex.js");

module.exports = {
  list() {
    return database('nike')
  },
  read(id) {
    return database('nike').select().where("id", id).first()
  },
  create(nike) {
    return database('nike').insert(nike).returning('*').then(record => record[0])
  },
  update(id, nike) {
    return database("nike").update(nike).where("id", id).returning("*").then(record => record[0]);
  },
  delete(id) {
    return database("nike").delete().where("id", id);
  },
  list() {
    return database('nike')
  },
  read(id) {
    return database('nike').select().where("id", id).first()
  }
};
