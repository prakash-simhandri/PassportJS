
exports.up = function(knex, Promise) {
    return knex.schema.createTable('google_users', table => {
        table.increments('id').primary();
        table.string('google_id').unique().notNullable();
        table.string('full_name').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('profile_picture').notNullable();
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('google_users')
  };
