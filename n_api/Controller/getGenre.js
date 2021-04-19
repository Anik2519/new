const mongoose = require('mongoose');
const express = require('express');
const { Genre, validate } = require('../models/genre');

let getGenre = async (req, res, next) => {
  try {
    const genres = await Genre.find();
    res.send(genres);
  }
  catch (ex) {
    next(ex);
  }
};

module.exports = {
  getGenre: getGenre
}