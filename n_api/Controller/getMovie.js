const mongoose = require('mongoose');
const express = require('express');
const { Movie, validatemovie } = require('../models/movie');

let getMovie = async (req, res, next) => {
  try {
    const Movies = await Movie.find();
    res.send(Movies);
  }
  catch (ex) {
    next(ex);
  }

};

module.exports = {
  getMovie: getMovie
}
