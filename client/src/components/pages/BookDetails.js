import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetailCard from '../BookDetailCard';

export default function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books'+isbn)
    .then(response => response.json())
    .then(data => {
      setBook(data);
    });
  }, []);

  return (
    <div>
      <h1 class='text-3xl mb-4 pt-5 text-center'>Book Details</h1>
      {book ? book.map((book) => {
        return <ul role="list" class="pl-10 pr-10 divide-y divide-slate-200">
          <BookDetailCard key={book.id} {...book} />
        </ul>
        })
        : null }
    </div>
  );
}