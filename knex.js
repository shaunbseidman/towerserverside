const environment = process.env.NODE_ENV || "development"
const configs = require("./knexfile.js")
const dbConfig = configs[environment]
const knex = require("knex")

module.exports = knex(dbConfig)
