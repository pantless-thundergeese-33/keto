const path = require('path');
const express = require('express');

const app = express();
const apiRouter = require('./routes/api.js');
const PORT = 3000;

const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://practice:qwerty13579@cluster0.ds4ax.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // Options for parsing the URI (not too sure what's going on here, it's just from the star wars database unit)
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ketoproject',
  })
  .then(console.log('Connected to Mongo DB.'))
  .catch(console.error());

//Require cookie-parser to parse incoming cookies from requests
//npm install cookie-parser
const cookieParser = require('cookie-parser');
/**
 * handle parsing request body
 */
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

// api route handler
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send("This is not the page you're looking for..."));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
