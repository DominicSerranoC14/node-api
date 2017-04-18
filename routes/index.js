'use strict';

const { Router } = require('express');
const router = Router();
const { getShows, getSingleShow } = require('../controllers/show.js');


router.get('/shows', getShows);
router.get('/shows/:id', getSingleShow);


module.exports = router;
