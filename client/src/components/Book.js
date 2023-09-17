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
      <li key={isbn} class="border-b border-emerald-500 mb-4">
        <h2 class="text-lg font-bold">{title}</h2>
        <div class="flex justify-between">
          <p class="mt-1 mr-4">Author: {authorName}</p>
          <p class="mt-1">{year}</p>
        </div>
      <br/>
      </li>
    </>
  );
};

export default Book;