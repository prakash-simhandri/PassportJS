
exports.up = function(knex, Promise) {
    return knex.schema.createTable('github_users', table => {
        table.increments('id').primary();
        table.string('github_id').unique().notNullable();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('email').nullable()
        table.string('profile_picture').notNullable();
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('github_users')
  };
