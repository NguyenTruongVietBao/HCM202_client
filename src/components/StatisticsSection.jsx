import React from 'react';
import { magazineInfo, mainContent } from '../lib/constants';
import { Link } from 'react-router';
import { Heart, ArrowRight } from 'lucide-react';

export default function StatisticsSection() {
  return (
    <section className='py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden'>
      <div className='absolute inset-0 bg-yellow-400 opacity-10'></div>
      <div className='absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 -translate-y-32 -translate-x-32'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full opacity-20 translate-y-24 translate-x-24'></div>

      <div className='relative max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold text-white mb-12'>
          Tạp Chí <span className='text-yellow-300'>Số Liệu</span>
        </h2>

        <div className='grid md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='text-5xl font-bold text-yellow-300 mb-2'>
              {mainContent.length}
            </div>
            <div className='text-white text-lg'>Chương Chính</div>
          </div>
          <div className='text-center'>
            <div className='text-5xl font-bold text-yellow-300 mb-2'>
              {mainContent.sections.length}
            </div>
            <div className='text-white text-lg'>Bài Nghiên Cứu</div>
          </div>
          <div className='text-center'>
            <div className='text-5xl font-bold text-yellow-300 mb-2'>50+</div>
            <div className='text-white text-lg'>Chuyên Gia</div>
          </div>
          <div className='text-center'>
            <div className='text-5xl font-bold text-yellow-300 mb-2'>
              {magazineInfo.foundedYear}
            </div>
            <div className='text-white text-lg'>Năm Thành Lập</div>
          </div>
        </div>

        <div className='mt-12'>
          <Link
            to='/about'
            className='inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-red-800 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl font-bold text-lg hover:scale-105'
          >
            <Heart size={24} />
            Tìm Hiểu Thêm Về Chúng Tôi
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
