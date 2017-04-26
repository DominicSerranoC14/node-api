'use strict';

const { bookshelf } = require('../db/database');

const Favorite = bookshelf.Model.extend(
  {
    tableName: 'favorites'
  }
);

module.exports = Favorite;
