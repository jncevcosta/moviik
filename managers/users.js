const User = require('../models/user');

class User {

    create(data) {
        return await User.query().insert(data);
    }

}

module.exports = User;