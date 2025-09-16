import React from 'react';
import { magazineInfo, famousQuotes } from '../lib/constants';
import { BookOpen, ArrowRight, FileText, Award, Quote } from 'lucide-react';

export default function HeroSection({ mainContent }) {
  return (
    <section className='relative py-20 bg-gradient-to-br from-red-50 via-yellow-50 to-white'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-10 -translate-y-48 translate-x-48'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-red-300 rounded-full opacity-10 translate-y-40 -translate-x-40'></div>

      <div className='relative max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-block px-6 py-3 bg-red-600 text-white text-sm font-bold rounded-full mb-8 shadow-lg'>
            {magazineInfo.title.toUpperCase()}
          </div>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            {mainContent.title}
          </h1>
          <p className='text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8'>
            {mainContent.subtitle}
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
            <a
              href='#main-content'
              className='px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center gap-3 hover:scale-105'
            >
              <BookOpen size={24} />
              Đọc Tạp Chí Đầy Đủ
              <ArrowRight size={20} />
            </a>
            <div className='flex items-center gap-6 text-gray-600'>
              <div className='flex items-center gap-2'>
                <FileText size={20} className='text-red-500' />
                <span className='font-medium'>4 Chương chính</span>
              </div>
              <div className='flex items-center gap-2'>
                <Award size={20} className='text-yellow-600' />
                <span className='font-medium'>Nhóm 2 - HCM202</span>
              </div>
            </div>
          </div>

          {/* Featured Quote */}
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-100'>
              <Quote className='text-red-500 mx-auto mb-6' size={40} />
              <blockquote className='text-2xl md:text-3xl text-gray-800 font-light italic leading-relaxed mb-6'>
                "{famousQuotes[0].text}"
              </blockquote>
              <cite className='text-red-600 font-bold text-lg'>
                - Chủ tịch Hồ Chí Minh ({famousQuotes[0].year})
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
