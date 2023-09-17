import React from 'react';

const Book = ({
  title,
  authorName,
  authorDOB,
  authorDOD,
  isbn,
  year,
  publisher,
  pageCount,
  genre,
  format
}) => {
  return (
    <>
      <div className="bg-white p-8 mx-auto mt-8 max-w-xl border-l border-emerald-500">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-gray-600 mt-2">{authorName}</p>
          <ul className="mt-2">
            <li>
              <strong>ISBN: </strong> {isbn}
            </li>
            <li>
              <strong>Page Count: </strong> {pageCount}
            </li>
            <li>
              <strong>Publisher:</strong> {publisher}
            </li>
            <li>
              <strong>Published Year: </strong> {year}
            </li>
            <li>
              <strong>Format: </strong> {format}
            </li>
          </ul>
      </div>
    </>
  );
};

export default Book;