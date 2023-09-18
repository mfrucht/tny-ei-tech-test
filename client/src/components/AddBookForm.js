import React, { useState } from 'react';

function AddBookForm({onClose}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [publisher, setPublisher] = useState('');
  const [isbn, setIsbn] = useState('');
  const [year, setYear] = useState('');
  const [format, setFormat] = useState('');
  const [genre, setGenre] = useState('');
  const [publisherList, setPublisherList] = useState([]);
  const [authorList, setAuthorList] = useState([]);

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      pageCount,
      publisher,
      isbn,
      year
    };

    // Call the onAddBook function to add the book to the database
    // onAddBook(newBook);

    // Clear the form fields
    setTitle('');
    setAuthor('');
    setIsbn('');

    onClose();
  };

  useEffect(() => {
    fetch('http://localhost:3001/publishers'+isbn)
    .then(response => response.json())
    .then(data => {
      setBook(data);
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                class="w-full p-2 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Author:
              <input
                type="text"
                class="w-full p-2 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
            <label>
              ISBN:
              <input
                type="text"
                class="w-full p-2 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </label>
            <label>
              Page Count:
              <input
                type="numeric"
                class="w-full p-2 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500"
                value={pageCount}
                onChange={(e) => setPageCount(e.target.value)}
              />
            </label>
            <label for="genre">Genre:</label>
            <select id="genre" class="w-full p-2 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:border-blue-500" name="Genre">
              <option value="fiction">Fiction</option>
              <option value="nonFiction">Non Fiction</option>
            </select>
            <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4"
            >
              Add
            </button>
          </div>
          </form>
      </div>
    </div>
  );
}

export default AddBookForm;