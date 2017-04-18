'use strict';

const { bookshelf } = require('../db/database');

const Show = bookshelf.Model.extend(
  {
    tableName: 'shows'
  },
  {
    getAll: () => {
      return Show.forge()
      .fetchAll()
    },
    // Get a specific show based on nid (identifier key)
    getSingleShow: (showId) => {
      return Show.forge({ nid: showId })
      .fetch()
    }
  }
);

module.exports = Show;
