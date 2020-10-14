const { Model } = require('objection');
const knex = require('../Config/index')
Model.knex(knex)
class LinkedinUser extends Model {
  static get tableName() {
    return 'linkedin_users';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['linkedin_id'],
      properties: {
        id: { type: 'integer' },
        linkedin_id: { type: 'string', minLength: 1, maxLength: 255 },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        email: { type: 'string' },
        profile_picture: { type: 'string' },
      }
    };
  }
}

module.exports = LinkedinUser;