'use strict';

const Show = require('./show.js');
const Favorite = require('./favorite.js');

const lookUpFavorite = (faveID) => {
  return Favorite.forge({ id: faveID })
  .fetch()
  .then(data => data.toJSON().show_id)
  .then(id => Show.forge({ id }).fetch())
  .then(showModel => showModel.toJSON())
};

lookUpFavorite(9)
.then(console.log)
.catch(err => console.log(`Err: ${err}`))
