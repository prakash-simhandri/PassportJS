
exports.up = function(knex, Promise) {
    return knex.schema.createTable('linkedin_users', table => {
        table.increments('id').primary();
        table.string('linkedin_id').unique().notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').nullable()
        table.string('profile_picture').notNullable();
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('linkedin_users')
  };
