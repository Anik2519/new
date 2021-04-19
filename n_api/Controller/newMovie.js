const { Movie, validatemovie } = require('../models/movie');
const { Genre, validategenre } = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');

let newMovie = async (req, res, next) => {
  try {
    let movie = new Movie({
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name
      },
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();
    res.send(movie);
  }
  catch (ex) {
    next(ex);
  }
};

module.exports = {
  newMovie: newMovie
}

  //const result = validate(req.body);
  //if (result.error) return res.status(400).send(error.details[0].message);
  //const genre = await Genre.findById(req.body.genreId);
  //if (!genre) return res.status(400).send('Invalid genre.');
