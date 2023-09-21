const path = require('node:path');
const sqlite3 = require('sqlite3').verbose();

const DB_LOCATION = 'db/data/tny-ei-tech-test.db';

async function start_db() {
  const filename = path.resolve('.', DB_LOCATION);
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(filename,
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(db);
        }
      }
    );
  });
}

async function stop_db(db) {
  return new Promise((resolve) => {
    db.close(() => resolve());
  });
}

async function books(db) {
  const sql = `
  SELECT
    books.title,
    authors.name as authorName,
    books.isbn,
    books.year,
    books.genre,
    publishers.publisher_name as publisher
  FROM books 
  JOIN authors ON books.author_id = authors.author_id
  JOIN publishers ON books.publisher_id = publishers.publisher_id
  `;

  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    })
  });
}

async function bookByIsbn(db, isbn) {
  const sql = `
  SELECT
    books.title,
    authors.name as authorName,
    authors.date_of_birth as authorDOB,
    authors.date_of_death as authorDOD,
    books.isbn,
    books.year,
    publishers.publisher_name as publisher,
    books.page_count as pageCount,
    books.genre,
    books.format
  FROM books
  JOIN authors ON books.author_id = authors.author_id
  JOIN publishers ON books.publisher_id = publishers.publisher_id
  WHERE books.isbn = ?
  `;
  return new Promise((resolve, reject) => {
    db.all(sql, [isbn], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    })
  });
}

async function publishers(db) {
  const sql = `SELECT * FROM publishers`;

  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    })
  });
}

async function authors(db) {
  const sql = `SELECT * FROM authors`;

  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    })
  });
}

module.exports = {
  start_db,
  stop_db,
  books,
  bookByIsbn,
  publishers,
  authors
}
