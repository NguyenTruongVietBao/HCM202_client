import React from 'react';
import { Star, X, User, Calendar, Clock } from 'lucide-react';
import QRCode from './QRCode';

export default function VideoPopup({ article, onClose }) {
  if (!article) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm'>
      <div className='bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-auto shadow-2xl border-4 border-yellow-400'>
        <div className='flex justify-between items-center p-6 border-b-2 border-red-100 bg-gradient-to-r from-red-50 to-yellow-50'>
          <h3 className='text-xl font-bold text-red-800 flex items-center gap-2'>
            <Star className='text-yellow-500' size={24} />
            {article.title}
          </h3>
          <button
            onClick={onClose}
            className='p-2 hover:bg-red-100 rounded-full transition-all duration-300 hover:scale-110'
          >
            <X size={28} className='text-red-600' />
          </button>
        </div>

        <div className='p-6'>
          <div className='aspect-video mb-6 rounded-xl overflow-hidden shadow-lg'>
            <iframe
              src={article.videoUrl}
              title={article.title}
              className='w-full h-full'
              allowFullScreen
            ></iframe>
          </div>

          <div className='grid lg:grid-cols-2 gap-6'>
            <div className='relative'>
              <img
                src={article.image}
                alt={article.title}
                className='w-full h-64 object-cover rounded-xl shadow-lg'
              />
              <div className='absolute top-4 right-4'>
                <QRCode data={article.qrData} size={80} />
              </div>
            </div>

            <div className='space-y-4'>
              <p className='text-gray-700 leading-relaxed text-lg'>
                {article.content}
              </p>

              <div className='flex flex-wrap gap-2'>
                {article.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-gradient-to-r from-red-100 to-yellow-100 text-red-700 text-sm rounded-full border border-red-200 font-medium'
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
                <div className='flex items-center gap-4 text-sm text-gray-600'>
                  <span className='flex items-center gap-1 font-medium'>
                    <User size={16} className='text-red-500' />
                    {article.author}
                  </span>
                  <span className='flex items-center gap-1'>
                    <Calendar size={16} className='text-yellow-600' />
                    {article.date}
                  </span>
                  <span className='flex items-center gap-1'>
                    <Clock size={16} className='text-green-600' />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
