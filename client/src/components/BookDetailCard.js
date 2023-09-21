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
      <div class={genre=='fiction' ? "bg-white p-8 mx-10 mt-8 max-w-xl border-l border-emerald-500"
        : "bg-white p-8 mx-10 mt-8 max-w-xl border-l border-red-500"}>
        <h1 class="text-3xl font-semibold">{title}</h1>
        <p class="text-gray-600 mt-2">{authorName}</p>
          <ul class="mt-2">
            <li class="mt-2 mb-2">
              <p class="text-gray-600 text-xs">ISBN</p>
              <p class="font-semibold">{isbn}</p>
            </li>
            <li class="mt-2 mb-2">
              <p class="text-gray-600 text-xs">Page Count</p>
              <p class="font-semibold">{pageCount}</p>
            </li>
            <li class="mt-2 mb-2">
              <p class="text-gray-600 text-xs">Publisher</p>
              <p class="font-semibold">{publisher}</p>
            </li>
            <li class="mt-2 mb-2">
              <p class="text-gray-600 text-xs">Year</p>
              <p class="font-semibold">{year}</p>
            </li>
            <li class="mt-2 mb-2">
              <p class="text-gray-600 text-xs">Format</p>
              <p class="font-semibold">{format}</p>
            </li>
          </ul>
      </div>
    </>
  );
};

export default Book;