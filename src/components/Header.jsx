import React from 'react';

export default function Header() {
  return (
    <header className='bg-white shadow-sm border-b-4 border-blue-600'>
      <div className='max-w-6xl mx-auto px-4 py-4'>
        <h1 className='text-3xl font-bold text-gray-800'>
          <span className='text-blue-600'>Báo Điện Tử</span> QR News
        </h1>
        <p className='text-gray-600 mt-1'>Tin tức hiện đại với công nghệ QR</p>
      </div>
    </header>
  );
}
