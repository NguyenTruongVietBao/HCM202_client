import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { BookOpen, Info, Star, Menu, X } from 'lucide-react';
import { magazineInfo } from '../lib/constants';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Tạp chí', icon: BookOpen },
    { path: '/about', label: 'Giới thiệu', icon: Info },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='bg-gradient-to-r from-red-600 via-red-700 to-red-800 shadow-2xl border-b-4 border-yellow-400 relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute inset-0 bg-yellow-400 opacity-5'></div>
      <div className='absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-10 -translate-y-16 translate-x-16'></div>
      <div className='absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 rounded-full opacity-10 translate-y-12 -translate-x-12'></div>

      {/* Main header */}
      <div className='relative max-w-7xl mx-auto p-4'>
        <div className='flex items-center justify-between'>
          {/* Logo and title */}
          <Link to='/' className='flex items-center gap-4 group'>
            <div className='relative'>
              <Star
                className='text-yellow-300 animate-pulse group-hover:animate-spin transition-all duration-500'
                size={40}
              />
              <div className='absolute inset-0 bg-yellow-300 rounded-full opacity-20 animate-ping'></div>
            </div>
            <div>
              <h1 className='text-3xl lg:text-4xl font-bold text-white drop-shadow-lg leading-tight'>
                <span className='text-yellow-300'>TẠP CHÍ</span>
                <br />
                <span className='text-2xl lg:text-3xl'>
                  TƯ TƯỞNG HỒ CHÍ MINH
                </span>
              </h1>
              <p className='text-yellow-100 mt-1 font-medium text-sm lg:text-base'>
                {magazineInfo.subtitle}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8'>
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-lg ${
                  location.pathname === path
                    ? 'bg-yellow-400 text-red-800 shadow-lg transform scale-105'
                    : 'text-yellow-100 hover:bg-red-500 hover:text-white hover:shadow-lg'
                }`}
              >
                <Icon size={20} />
                {label}
              </Link>
            ))}

            {/* Special CTA button */}
            <a
              href='#main-content'
              className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-6 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-yellow-300'
            >
              ĐỌC NGAY
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-yellow-300 hover:text-white transition-colors p-2 rounded-full hover:bg-red-500'
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className='lg:hidden absolute top-full left-0 right-0 bg-red-800 border-t border-red-600 shadow-2xl z-50'>
          <nav className='max-w-7xl mx-auto px-4 py-6'>
            <div className='space-y-4'>
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    location.pathname === path
                      ? 'bg-yellow-400 text-red-800'
                      : 'text-yellow-100 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              ))}
              <Link
                to='#main-content'
                onClick={() => setIsMobileMenuOpen(false)}
                className='flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-4 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 mt-4'
              >
                <BookOpen size={20} />
                ĐỌC TẠP CHÍ NGAY
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
