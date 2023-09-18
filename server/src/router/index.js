const express = require('express');
const { books, publishers, authors, bookByIsbn } = require('../db');
const router = express.Router();

function create_router(db) {
  router.get('/books', async (req, res) => {
    const allBooks = await books(db);
    res.json(allBooks);
  });

  router.get('/books:isbn', async (req, res) => {
    var { isbn } = req.params;
    const book = await bookByIsbn(db, isbn);
    res.json(book);
  });

  return router;
}

module.exports = {
  create_router
};
