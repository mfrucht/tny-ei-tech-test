import { useEffect, useState } from 'react';
import Book from '../BookListItem';
import AddBookForm from '../AddBookForm';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.authorName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleAddBook = (newBook) => {
    fetch('/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error adding book to database');
        }
      })
      .then((data) => {
        console.log(data); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:3001/books')
    .then(response => response.json())
    .then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <div>
      <h1 class='text-3xl mb-4 pt-5 text-center'>Books</h1>
      <div class="flex justify-between">
        <input
          type="text"
          placeholder="Search by title, author"
          value={searchQuery}
          onChange={handleSearch}
          class="bg-white border-2 border-gray-300 rounded-lg p-2 ml-10 mb-4"
        />
        <button
          onClick={togglePopup}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mb-4"
        >Add Book</button>
      </div>
      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AddBookForm onClose={togglePopup} />
        </div>
      )}
      <ul>
        {books ? (
          searchQuery === '' ? (
            books.map((book) => (
              <ul role="list" class="pl-10 pr-10 divide-y divide-slate-200">
                <Book key={book.id} {...book} />
              </ul>
            ))
          ) : (
            filteredBooks.map((book) => (
              <ul role="list" class="pl-10 pr-10 divide-y divide-slate-200">
                <Book key={book.id} {...book} />
              </ul>
            ))
          )
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
}