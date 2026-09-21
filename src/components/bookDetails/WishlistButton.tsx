
"use client"
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({ book }: { book: IBook }) => {

  const { wishlist, setWishlist } = useContext(BooksContext)

  const handleAddToWishlist = () => {
    setWishlist([...wishlist, book])
    toast.success(`You have added "${book.bookName}" to your wishlist `)
  }
  return (
    <div>

      <button className="btn rounded-xl border-0 bg-emerald-600 px-6 text-white shadow-md hover:bg-emerald-700" onClick={() => handleAddToWishlist()}>
        Add to Wishlist
      </button>
    </div>
  );
};



export default WishlistButton;