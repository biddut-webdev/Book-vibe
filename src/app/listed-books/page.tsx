
'use client'

import ListedBooksCard from '@/components/share/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")

  console.log(readBooks, wishlist, 'read books', "wishlist books")

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;

  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWhishlist = sortBooks(wishlist);

  return (
    <div className=' container mx-auto py-5'>

      <h2 className='my-7 bg-amber-100 rounded-3xl py-16 text-center font-bold text-4xl'>Listed Books</h2>

      <div className='text-center'>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as 'rating' | 'pages' | 'year')
          }
          className="select select-success"
        >
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books (${readBooks.length})`} />
        <div className="tab-content border-base-300 bg-base-100 p-10 space-y-10">
          {sortedReadBooks.length > 0 ?
            sortedReadBooks.map((book: IBook, ind: number) => {
              return (
                <ListedBooksCard key={ind} book={book} />
              );
            }) : <p className='font-semibold text-center'>Read Book not found</p>
          }

        </div>

        <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />
        <div className="tab-content border-base-300 bg-base-100 p-10">

          {sortedWhishlist.length > 0 ?
            sortedWhishlist.map((book: IBook, ind: number) => {
              return (
                <ListedBooksCard key={ind} book={book} />
              );
            }) : <p className='font-semibold text-center'>Wishlist not found</p>
          }
        </div>


      </div>
    </div>
  );
};

export default ListedBooks;