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
      <a href={"/books"+isbn} class="block hover:bg-gray-200 p-4 transition-all border-b border-emerald-500 ">
      <li key={isbn} class="mb-4">
        <h2 class="text-lg font-bold">{title}</h2>
        <div class="flex justify-between">
          <p class="mt-1 mr-4">Author: {authorName}</p>
          <p class="mt-1">{year}</p>
        </div>
      </li>
      </a>
    </>
  );
};

export default Book;