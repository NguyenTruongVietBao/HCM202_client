import {
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  BookOpen,
} from 'lucide-react';
import React from 'react';
import { magazineInfo, famousQuotes } from '../lib/constants';

export default function Footer() {
  const currentQuote = famousQuotes[0]; // Lấy trích dẫn đầu tiên

  return (
    <footer className='bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-white relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute inset-0 bg-yellow-400 opacity-5'></div>
      <div className='absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full opacity-10 -translate-y-32 -translate-x-32'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full opacity-10 translate-y-24 translate-x-24'></div>

      <div className='relative max-w-7xl mx-auto px-4 pt-16 pb-8'>
        {/* Main footer content */}
        <div className='grid md:grid-cols-3 gap-12 mb-12'>
          {/* Magazine Info */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3 mb-4'>
              <Star className='text-yellow-300 animate-pulse' size={32} />
              <h3 className='text-2xl font-bold text-yellow-300'>
                {magazineInfo.title}
              </h3>
            </div>
            <p className='text-yellow-100 text-lg leading-relaxed'>
              {magazineInfo.description}
            </p>
            <div className='space-y-2 text-sm text-yellow-200'>
              <div className='flex items-center gap-2'>
                <Calendar size={16} />
                <span>Thành lập: {magazineInfo.foundedYear}</span>
              </div>
              <div className='flex items-center gap-2'>
                <BookOpen size={16} />
                <span>{magazineInfo.frequency}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Globe size={16} />
                <span>
                  {magazineInfo.language} • {magazineInfo.issn}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <h4 className='text-xl font-bold text-yellow-300 mb-4'>
              Thông tin Liên hệ
            </h4>
            <div className='space-y-4 text-yellow-100'>
              <div className='flex items-start gap-3'>
                <MapPin
                  className='text-yellow-300 mt-1 flex-shrink-0'
                  size={18}
                />
                <div>
                  <p className='font-medium'>{magazineInfo.publisher}</p>
                  <p className='text-sm'>Nhà Văn Hoá Sinh Viên</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='text-yellow-300' size={18} />
                <span>(+84) 1234 1234</span>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='text-yellow-300' size={18} />
                <span>hcm202.nhom2@fpt.edu.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h4 className='text-xl font-bold text-yellow-300 mb-4'>
              Liên kết Nhanh
            </h4>
            <div className='space-y-3'>
              <a
                href='/magazine'
                className='block text-yellow-100 hover:text-yellow-300 transition-colors'
              >
                → Tạp chí mới nhất
              </a>
              <a
                href='/about'
                className='block text-yellow-100 hover:text-yellow-300 transition-colors'
              >
                → Giới thiệu tạp chí
              </a>
              <a
                href='#'
                className='block text-yellow-100 hover:text-yellow-300 transition-colors'
              >
                → Hướng dẫn tác giả
              </a>
              <a
                href='#'
                className='block text-yellow-100 hover:text-yellow-300 transition-colors'
              >
                → Chính sách biên tập
              </a>
              <a
                href='#'
                className='block text-yellow-100 hover:text-yellow-300 transition-colors'
              >
                → Đăng ký nhận bản tin
              </a>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className='border-t border-red-700 pt-8 mb-8'>
          <div className='text-center max-w-4xl mx-auto'>
            <Star className='text-yellow-300 mx-auto mb-4' size={40} />
            <blockquote className='text-xl md:text-2xl text-yellow-100 font-light italic leading-relaxed mb-4'>
              "{currentQuote.text}"
            </blockquote>
            <cite className='text-yellow-300 font-semibold'>
              - Chủ tịch Hồ Chí Minh ({currentQuote.year})
            </cite>
            <p className='text-sm text-yellow-200 mt-2'>
              {currentQuote.context}
            </p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className='flex justify-center gap-4 mb-8'>
          <div className='w-20 h-1 bg-yellow-400 rounded'></div>
          <div className='w-8 h-1 bg-red-400 rounded'></div>
          <div className='w-20 h-1 bg-yellow-400 rounded'></div>
        </div>

        {/* Copyright */}
        <div className='text-center text-yellow-200 text-sm'>
          <p className='mb-2'>
            © {new Date().getFullYear()} {magazineInfo.title}. Mọi quyền được
            bảo lưu.
          </p>
          <p>
            Phát hành bởi{' '}
            <span className='text-yellow-300 font-medium'>
              {magazineInfo.publisher}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
