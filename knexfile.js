// Update with your config settings.

module.exports = {

  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true
  },

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      port: 5432,
      password: 'postgres',
      database: 'postgres'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
