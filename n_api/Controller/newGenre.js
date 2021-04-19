const { Genre, validate } = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');

let newGenre = async (req, res, next) => {
  const result = validate(req.body);
  if (result.error) return res.status(400).send(error.details[0].message);
  try {
    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
  }
  catch (ex) {
    next(ex);
  }
};

module.exports = {
  newGenre: newGenre
}