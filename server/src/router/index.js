const express = require('express');
const { nabokov } = require('../db');
const router = express.Router();

function create_router(db) {
  router.get('/nabokov', async (req, res) => {
    const nabokov_books = await nabokov(db);
    res.json(nabokov_books);
  });
  
  router.get('/', (req, res) => {
    res.send('hello, world');
  });

  return router;
}

module.exports = {
  create_router
};
