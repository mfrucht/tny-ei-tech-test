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

async function addBook(book, db) {
  const existingRecord = await database.query('SELECT * FROM books WHERE isbn = ?', [bookisbn]);
  const existingAuthor = await database.query('SELECT * FROM authors WHERE name = ?', [book.authorName]);

  if (existingRecord) {
    // A matching record exists, you can choose to update it or skip
    console.log('A matching record already exists.');
  } else {
    if (existingAuthor) {
      if (existingPublisher) {
        return new Promise((resolve,reject) => {
          db.run(
            'INSERT INTO books (title, author, genre, isbn, page_count, format, publisher_id, year) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [book.title, existingAuthor.author_id, book.genre, book.isbn, book.page_count, book.format, null, book.year],
            (err) => {
              if (err) {
                console.error(err);
                res.status(500).json({ error: 'Error adding book to database' });
              } else {
                res.status(201).json({ message: 'Book added successfully' });
              }
            }
          );
        });
      }
    } else {
      return new Promise((resolve,reject) => {
        return new Promise((resolve,reject) => {
          db.run(
            'INSERT INTO authors (name) VALUES (?)',
            [book.title, existingAuthor.author_id, book.genre, book.isbn, book.page_count, book.format, null, book.year],
            (err) => {
              if (err) {
                console.error(err);
                res.status(500).json({ error: 'Error adding book to database' });
              } else {
                res.status(201).json({ message: 'Book added successfully' });
              }
            }
          );
        });
        db.run(
          'INSERT INTO books (title, author, genre, isbn, page_count, format, publisher_id, year) VALUES (?, ?, ?)',
          [book.title, existingAuthor.author_id, book.genre, book.isbn, book.page_count, book.format, null, book.year],
          (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Error adding book to database' });
            } else {
              res.status(201).json({ message: 'Book added successfully' });
            }
          }
        );
      });
    }
    
  }
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
