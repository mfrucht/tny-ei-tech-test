import { useEffect, useState } from 'react';
import Book from '../BookListItem';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading,setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.authorName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  useEffect(() => {
    fetch('http://localhost:3001/books')
    .then(response => response.json())
    .then(data => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1 class='text-3xl mb-4 pt-5 text-center'>Books</h1>
      <input
        type="text"
        placeholder="Search by title, author"
        value={searchQuery}
        onChange={handleSearch}
        class="bg-white border-2 border-gray-300 rounded-lg p-2 ml-10 mb-4"
      />
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          <p className="ml-2 text-gray-700">Loading...</p>
        </div>
      ) : (
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
      )}
    </>
  );
}