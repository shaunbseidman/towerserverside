
exports.up = function(knex, Promise) {
  return knex.schema.createTable('nike', table =>{
    table.increments('id')
    table.text('model')
    table.text('size')
    table.text('color')
    table.text('retail')
    table.text('resell')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('nike')

};
