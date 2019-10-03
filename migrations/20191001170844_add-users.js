exports.up = async function (knex) {
    await knex.schema.createTable('users', function (t) {
        t.increments('id').unsigned().primary();
        t.text('name').notNull();
        t.text('company').nullable();
        t.text('email').nullable();
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTable('users');
};
