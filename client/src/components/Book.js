import React from 'react';

const Book = ({
  title,
  authorName,
  publisherName,
  year,
  isbn
}) => {
  return (
    <>
      {/* <ul>
        <li key={book.isbn}>{book.title}</li>
        <li></li>
      </ul>  */}
      <div className="book-details">
        <div>Title: {title}</div>
        <div>Author: {authorName}</div>
        <div>Year: {year}</div>
        <br/>
      </div>
    </>
  );
};

export default Book;