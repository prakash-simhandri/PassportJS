
exports.up = function(knex, Promise) {
    return knex.schema.createTable('facebook_users', table => {
        table.increments('id').primary();
        table.string('facebook_id').unique().notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('profile_picture').notNullable();
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('facebook_users')
  };