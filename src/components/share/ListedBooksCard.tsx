import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({ book }: { book: IBook }) => {
  return (
    <div key={book.bookId}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row">

      {/* Image */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100 md:h-100 md:w-56">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5 md:p-7">

        <div>
          {/* Category + Rating */}
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
              {book.category}
            </span>

            <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
              ★ {book.rating}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-slate-500">
            By <span className="font-semibold text-slate-700">{book.author}</span>
          </p>

          {/* Review */}
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Info */}
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <div>
              <p className="text-slate-400">Pages</p>
              <p className="font-bold text-slate-700">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-slate-400">Published</p>
              <p className="font-bold text-slate-700">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-slate-400">Publisher</p>
              <p className="font-bold text-slate-700">{book.publisher}</p>
            </div>

            <div>
              <p className="text-slate-400">Rating</p>
              <p className="font-bold text-slate-700">{book.rating}/5</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/books/${book.bookId}`}
            className="btn rounded-xl bg-emerald-600 px-6 text-white hover:bg-emerald-700"
          >
            View Details
          </Link>

          <button className="btn rounded-xl border-slate-300 bg-white px-6 text-slate-700 hover:border-emerald-500 hover:bg-emerald-50">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;