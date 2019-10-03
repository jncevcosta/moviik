
exports.up = async function (knex) {
    await knex.schema.alterTable('users', function (t) {
        t.unique('email');
    })
};

exports.down = async function (knex) {
    knex.schema.alterTable('users', function (t) {
        t.dropUnique('email');
    })
};
