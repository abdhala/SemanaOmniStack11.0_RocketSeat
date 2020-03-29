
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.String('id').primary();
      table.String('nome').notNullable();
      table.String('email').notNullable();
      table.String('whatsapp').notNullable();
      table.String('cidade').notNullable();
      table.String('estado',2).notNullable();

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ong');
  
};
