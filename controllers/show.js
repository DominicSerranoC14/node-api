'use strict';

const { bookshelf } = require('../db/database');
const Show = require('../models/show.js');

const getShows = (req, res, next) => {
  return Show.getAll()
  .then(shows => {
    res.json(shows);
  })
  .catch(err => next(err))
};

const getSingleShow = (req, res, next) => {
  return Show.getSingleShow(req.params.id)
  .then(show => {
    res.json(show);
  })
  .catch(err => next(err))
};

module.exports = { getShows, getSingleShow };
