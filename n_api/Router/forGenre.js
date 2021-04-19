const newGenresController = require('../Controller/newGenre');
const getGenresController = require('../Controller/getGenre');
const error = require('../middleware/error');

let routes = (app) => {
  app.post('/api/genre', newGenresController.newGenre);
  app.get('/api/genre', getGenresController.getGenre);
  app.use(error);
};

module.exports = {
  routes: routes
}