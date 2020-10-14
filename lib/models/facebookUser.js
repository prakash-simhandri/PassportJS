const { Model } = require('objection');
const knex = require('../Config/index')
Model.knex(knex)
class FacebookUser extends Model {
  static get tableName() {
    return 'facebook_users';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        id: { type: 'integer' },
        facebook_id: { type: 'string', minLength: 1, maxLength: 255 },
        name: { type: 'string' },
        email: { type: 'string' },
        profile_picture: { type: 'string' },
      }
    };
  }
}

module.exports = FacebookUser;