import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookDetailCard from '../BookDetailCard';

export default function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/books'+isbn)
    .then(response => response.json())
    .then(data => {
      setBook(data);
    });
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1 class='text-3xl mb-4 pt-5 text-center'>Book Details</h1>
      {book ? book.map((book) => {
        return <>
        <button class="mb-4 ml-10 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none" onClick={handleGoBack}>
          Back
        </button>
            <BookDetailCard key={book.id} {...book} />
          </>
        })
        : null }
    </div>
  );
}