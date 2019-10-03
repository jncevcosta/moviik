const knexConf = require('../knexfile.js')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(knexConf);

module.exports = knex;