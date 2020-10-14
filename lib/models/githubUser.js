const { Model } = require('objection');
const knex = require('../Config/index')
Model.knex(knex)
class GithubUser extends Model {
  static get tableName() {
    return 'github_users';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['github_id'],
      properties: {
        id: { type: 'integer' },
        github_id:{ type: 'integer' },
        name: { type: 'string' },
        username: { type: 'string' },
        email: { type: 'string' },
        profile_picture: { type: 'string' },
      }
    };
  }
}

module.exports = GithubUser;