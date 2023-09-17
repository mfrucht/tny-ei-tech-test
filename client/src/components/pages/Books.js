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
      <h1 class='text-3xl font-semibold mb-4'>Books</h1>
      {books? books.map((book) => {
        return <ul role="list" class="pl-10 pr-10 divide-y divide-slate-200">
          <Book key={book.id} {...book} />
        </ul>
        })
        : null }
    </>
  );
}