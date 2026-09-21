
"use client"
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {

  const { readBooks, setReadBooks } = useContext(BooksContext)

  const handleReadBook = () => {
    setReadBooks([...readBooks, book])
    toast.success(`You have read "${book.bookName}" `)
  }
  return (
    <div>
      <button className="btn rounded-xl border-0 bg-emerald-600 px-6 text-white shadow-md hover:bg-emerald-700" onClick={() => handleReadBook()}>
        Read
      </button>
    </div>
  );
};

export default ReadButton;