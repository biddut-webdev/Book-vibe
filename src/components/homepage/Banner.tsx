
import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-500 via-white to-emerald-50 px-6 py-10 shadow-sm md:px-12 lg:py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              📚 Discover Your Next Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to freshen up{' '}
              <span className="text-emerald-600">
                your bookshelf
              </span>
            </h1>

            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Explore inspiring stories, timeless classics, and exciting new
              reads. Find books that match your mood and make every reading
              moment memorable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg">
                View The List →
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                Explore Books
              </button>
            </div>

            <div className="flex items-center gap-6 pt-2 text-sm text-slate-500">
              <span>✓ Curated Books</span>
              <span>✓ Easy Discovery</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl md:h-80 md:w-80" />

            <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
              <Image
                src={bannerImg}
                alt="A collection of books"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
