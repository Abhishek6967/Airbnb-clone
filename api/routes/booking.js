const express = require('express');
const router = express.Router();

const {
  createBookings,
  getBookings,
  getSingleBookings,
} = require('../controllers/bookingController');

router.route('/').get(getBookings);
router.route('/:id').get(getSingleBookings);
router.route('/new').post(createBookings);

module.exports = router;
