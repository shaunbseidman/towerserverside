const database = require("./knex.js");

module.exports = {
  list() {
    return database('adidas')
  },
  read(id) {
    return database('adidas').select().where("id", id).first()
  },
  create(adidas) {
    return database('adidas').insert(adidas).returning('*').then(record => record[0])
  },
  update(id, adidas) {
    return database("adidas").update(adidas).where("id", id).returning("*").then(record => record[0]);
  },
  delete(id) {
    return database("adidas").delete().where("id", id);
  },
  list() {
    return database('adidas')
  },
  read(id) {
    return database('adidas').select().where("id", id).first()
  }
};
