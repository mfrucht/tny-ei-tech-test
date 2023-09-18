const express = require('express');
const { books, publishers, authors, bookByIsbn } = require('../db');
const { default: AddBookForm } = require('../../../client/src/components/AddBookForm');
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
  
  router.get('/', (req, res) => {
    res.send('hello, world');
  });

  router.post('/book', async (req, res) => {
    const book = req.body;
    const status = await AddBook(book);
    res.json(status);
  });

  return router;
}

module.exports = {
  create_router
};
