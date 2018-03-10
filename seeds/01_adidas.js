exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw("DELETE FROM adidas; Alter Sequence adidas_id_seq RESTART WITH 8;").then(function() {
    // Inserts seed entries
    return knex('adidas').insert([
      {
        id: 1,
        model: 'Yeezy Boost 350 v2',
        size: '10',
        color: 'black/red',
        retail: '$220',
        resell: '$850'
      }, {
        id: 2,
        model: 'Yeezy Boost 350 v2',
        size: '10',
        color: 'cream white',
        retail: '$220',
        resell: '$700'
      }, {
        id: 3,
        model: 'Haven UltraBoost',
        size: '10',
        color: 'solid black',
        retail: '$220',
        resell: '$500'
      }, {
        id: 4,
        model: 'Iniki x Neighborhood',
        size: '10',
        color: 'solid black',
        retail: '$220',
        resell: '$300'
      }, {
        id: 5,
        model: 'Iniki London exclusive',
        size: '10',
        color: 'solid black/red',
        retail: '$120',
        resell: '$200'
      }, {
        id: 6,
        model: 'UltraBoost DPR',
        size: '10',
        color: 'light blue/grey',
        retail: '$180',
        resell: '$250'
      }, {
        id: 7,
        model: 'Yeezy Boost 750',
        size: '10',
        color: 'chocolate/gum',
        retail: '$250',
        resell: '$800'
      }
    ]);
  });
};
