
import React from 'react';
import BookCard from '@/components/share/BookCard';
import { IBook } from '@/types/books.type';


const getBooks = async () => {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error)
    return [];
  }

};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-10.5 px-4">
      <h2 className='font-bold text-3xl text-center py-5'>Books</h2>
      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;

