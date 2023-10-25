const Booking = require('../models/Booking');
const Place = require('../models/Place');
const userFromToken = require('../utils/userFromToken');
exports.createBookings = async (req, res) => {
  try {
    const userData = userFromToken(req);
    console.log(userData)
    const { place, checkIn, checkOut, numOfGuests, name, phone, price } =
      req.body;

    const booking = await Booking.create({
      user: userData.id,
      place,
      checkIn,
      checkOut,
      numOfGuests,
      name,
      phone,
      price,
    });

    res.status(200).json({
      booking,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const userData = await userFromToken(req);
    if (!userData) {
      return res
        .status(401)
        .json({ error: 'You are not authorized to access this page!' });
    }

    const booking = await Booking.find({ user: userData.id }).populate('place')

    res
      .status(200).json({ booking, success: true })


  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};
exports.getSingleBookings = async (req, res) => {
  try {
    // const userData = await userFromToken(req);
    const boobId = req.params.id
    console.log(boobId)
    
    // if (!userData) {
    //   return res
    //     .status(401)
    //     .json({ error: 'You are not authorized to access this page!' });
    // }

    const booking = await Place.find({_id: boobId})
    res
      .status(200).json({ booking, success: true })


  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};
