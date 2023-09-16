import { useEffect, useState } from 'react';
import Book from '../Book';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books')
    .then(response => response.json())
    .then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      <h1>Books</h1>
      {books? books.map((book) => {
        return <div>
          <Book key={book.id} {...book} />
        </div>
        })
        : null }
    </>
  );
}