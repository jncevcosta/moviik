const { Model } = require('../core/objection')
const Password = require('objection-password')();


class User extends Password(Model) {
    static get tableName() {
        return 'users';
    }
}

module.exports = User;