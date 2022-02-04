const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res) => {
  res.status(404).json({message: 'Not found'});
});

app.use((err, req, res, next) => {
  const params = req.params;
  res.status(500).json({params, message: err.message});
});

module.exports = app;
