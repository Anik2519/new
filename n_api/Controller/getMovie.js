const mongoose = require('mongoose');
const express = require('express');

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