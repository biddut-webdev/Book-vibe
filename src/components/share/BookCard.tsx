
import React from 'react';
import Image from 'next/image';
import { IBook } from '@/types/books.type';
import Link from 'next/link';

interface IBookCardProps {
  book: IBook
}


const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-emerald-700 shadow backdrop-blur">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">

        {/* Title */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition group-hover:text-emerald-600">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            by{' '}
            <span className="font-medium text-slate-700">
              {book.author}
            </span>
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="font-semibold text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs text-slate-400">Publisher</p>

            <p className="truncate text-sm font-semibold text-slate-700">
              {book.publisher}
            </p>
          </div>

          <Link href={`/books/${book.bookId}`}>  <button className="shrink-0 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Details
          </button></Link>
        </div>

      </div>
    </div>
  );
};

export default BookCard;
