
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
       {username:'jeff1200',password:'12345'},
       {username:'jeff1500',password:'123'}
      ]);
    });
};
