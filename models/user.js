const { Model } = require('../core/objection')

class User extends Model {
    static get tableName() {
        return 'users';
    }
}

module.exports = User;