const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));


if (!module.parent) {
  app.listen(PORT);
  console.log('Listening on', PORT);
}

module.exports.app = app;
