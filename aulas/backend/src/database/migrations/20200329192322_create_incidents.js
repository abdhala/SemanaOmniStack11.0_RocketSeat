
exports.up = function(knex) {
    knex.schema.createTable('incidents', function(table){
        table.increments();

        table.String('title').notNullable();
        table.String('description').notNullable();
        table.decimal('value').notNullable();

        table.String('ong_id').notNullable();
        // criar foreign key
        table.foreign('ong_id').references('id').inTable('ong');

  
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  
};
