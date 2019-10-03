const objection = require('objection');
const knex = require('./knex');

objection.Model.knex(knex);

module.exports = objection;