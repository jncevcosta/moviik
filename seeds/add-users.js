
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Jose' },
        { name: 'Adolfo', email: 'a@moviik.com' },
        { name: 'daniel', company: 'Moviik', email: 'd@moviik.com' }
      ]);
    });
};
