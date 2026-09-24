import ReadButton from '@/components/bookDetails/ReadButton';
import WishlistButton from '@/components/bookDetails/WishlistButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
  params: Promise<{
    id: string
  }>
}


const getBooks = async () => {
  try {

    const res = await fetch(`${process.env.SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error)
    return [];
  }
};


const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const bookData = await getBooks();
  const book = bookData.find((book: IBook) => String(book.bookId) === String(id)) as IBook




  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="card lg:card-side overflow-hidden border border-slate-200  bg-slate-100 shadow-xl">

        {/* Book Image */}
        <figure className="relative p-6 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={300}
            className="h-160 w-full rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-[1.02]"
          />
        </figure>

        {/* Book Details */}
        <div className="card-body justify-center p-6 md:p-10 lg:w-3/5">

          {/* Category & Rating */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              {book.category}
            </span>

            <span className="flex items-center gap-1 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-600">
              ★ {book.rating}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-lg text-slate-500">
            By{' '}
            <span className="font-semibold text-emerald-600">
              {book.author}
            </span>
          </p>

          {/* Review */}
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-bold text-slate-800">
              About this book
            </h3>

            <p className="text-sm leading-7 text-slate-600 md:text-base">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="my-6 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-5 md:grid-cols-4">

            <div>
              <p className="text-xs font-medium text-slate-400">
                Pages
              </p>
              <p className="mt-1 font-bold text-slate-800">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Published
              </p>
              <p className="mt-1 font-bold text-slate-800">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Publisher
              </p>
              <p className="mt-1 font-bold text-slate-800">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Rating
              </p>
              <p className="mt-1 font-bold text-slate-800">
                {book.rating}/5
              </p>
            </div>

          </div>

          {/* Actions */}
          <div className="card-actions justify-end">
            <ReadButton book={book} />

            <WishlistButton book={book} />
          </div>

        </div>
      </div>
    </div>
  );


};

export default BookDetailsPage;