import React from 'react';

const Book = ({
  title,
  authorName,
  publisherName,
  genre,
  year,
  isbn
}) => {
  return (
    <>
      <a href={'/books/'+isbn} class={genre === 'fiction' 
        ? "block hover:bg-gray-200 pt-4 pb-2 transition-all border-t border-emerald-500 " 
        : "block hover:bg-gray-200 pt-4 pb-2 transition-all border-t border-red-500"}>
      <li key={isbn} class="mb-4">
        <h2 class="text-lg font-bold">{title}</h2>
        <div class="flex justify-between">
          <p class="mt-1 mr-4">{authorName}</p>
          <p class="mt-1">{year}</p>
        </div>
      </li>
      </a>
    </>
  );
};

export default Book;