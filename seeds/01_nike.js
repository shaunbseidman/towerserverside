exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw("DELETE FROM nike; Alter Sequence nike_id_seq RESTART WITH 5;").then(function() {
    // Inserts seed entries
    return knex('nike').insert([
      {
        id: 1,
        model: 'Air Max 97 UNDFTD',
        size: '10.5',
        color: 'black/red',
        retail: '$200',
        resell: '$350'
      }, {
        id: 2,
        model: 'Air Max 97 UNDFTD',
        size: '10.5',
        color: 'white/cream/red',
        retail: '$200',
        resell: '$500'
      }, {
        id: 3,
        model: 'OFF WHITE Air Jordan 1',
        size: '10',
        color: 'red/black/white',
        retail: '$190',
        resell: '$1900'
      }, {
        id: 4,
        model: 'OFF WHITE Blazer',
        size: '10',
        color: 'white/cream/red',
        retail: '$190',
        resell: '$860'
      }, {
        id: 5,
        model: 'Tiffany Low SB',
        size: '11',
        color: 'teal/black/grey',
        retail: '$200',
        resell: '$900'
      }, {
        id: 6,
        model: 'KAWS Jordan 4',
        size: '10',
        color: 'grey suede',
        retail: '$180',
        resell: '$800'
      }, {
        id: 7,
        model: 'Supreme Jordan 5 Retro',
        size: '10',
        color: 'desert camo',
        retail: '$200',
        resell: '$500'
      }
    ]);
  });
};
