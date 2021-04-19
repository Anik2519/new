const winston = require('winston');
const mongoose = require('mongoose');
const express = require('express');
const middlewareOnStart = require('./middleware/errorOnInitial')
const genre = require('./Router/forGenre')
const movie = require('./Router/forMovie')
const error = require('./middleware/error');
const app = express();
winston.add(new winston.transports.File({ filename: 'logfile.log' }));

app.use(middlewareOnStart.appOnstart)
app.use(express.json());
genre.routes(app);
movie.routes(app); 
app.use(error);

mongoose.connect('mongodb://localhost/n_api',{useNewUrlParser: true},{ useUnifiedTopology: true })
    .then(() => winston.info('Connected to MongoDB...'));

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));