const express = require('express');
const newMovieController = require('../Controller/newMovie');
const getMovieController = require('../Controller/getMovie');

const app = express();

let routes = (app) => {
app.post('/api/newmovie', newMovieController.newMovie);
app.get('/api/allmovie', getMovieController.getMovie);
};

module.exports = {
    routes: routes
  }