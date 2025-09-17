import React, { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { mainContent } from '../lib/constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function Video() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const [expanded, setExpanded] = useState(false);

  const section = mainContent.sections.find((s) => s.id === slug) || {
    title: 'Video tư liệu',
    content:
      'Nội dung không khả dụng từ đường dẫn. Vui lòng quay lại trang chủ để chọn chủ đề.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
    qrData: window?.location?.href,
  };

  const embedUrl = `https://www.youtube.com/embed/${id}`;

  // Chuyển longContent dạng text thành cấu trúc mục lục: Chương, 1., a., -
  const renderStructuredContent = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/).map((l) => l.trim());
    const elements = [];
    let listItems = [];

    const flushList = () => {
      if (listItems.length) {
        elements.push(
          <ul
            key={`ul-${elements.length}`}
            className='list-disc pl-5 space-y-1'
          >
            {listItems.map((item, idx) => (
              <li key={idx} className='text-gray-600'>
                {item}
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, idx) => {
      if (!line) {
        flushList();
        return;
      }
      // Tiêu đề chương: bắt đầu bằng I., II., III.
      if (/^[IVXLC]+\./.test(line)) {
        flushList();
        elements.push(
          <h3
            key={`h3-${idx}`}
            className='text-lg font-semibold text-gray-900 mt-6 mb-2'
          >
            {line.replace(/^([IVXLC]+\.)\s*/, '')}
          </h3>
        );
        return;
      }
      // Mục lớn: 1., 2., 3.
      if (/^\d+\./.test(line)) {
        flushList();
        elements.push(
          <h4
            key={`h4-${idx}`}
            className='font-semibold text-gray-800 mt-4 mb-1'
          >
            {line.replace(/^(\d+\.)\s*/, '')}
          </h4>
        );
        return;
      }
      // Tiểu mục: a., b., c.
      if (/^[a-zA-Z]\./.test(line)) {
        flushList();
        elements.push(
          <h5 key={`h5-${idx}`} className='font-medium text-gray-800 mt-3 mb-1'>
            {line.replace(/^([a-zA-Z]\.)\s*/, '')}
          </h5>
        );
        return;
      }
      // Bullet: bắt đầu bằng "- "
      if (/^-\s+/.test(line)) {
        listItems.push(line.replace(/^-\s+/, ''));
        return;
      }
      // Đoạn văn bình thường
      flushList();
      elements.push(
        <p key={`p-${idx}`} className='text-gray-600'>
          {line}
        </p>
      );
    });
    flushList();
    return <div className='space-y-2'>{elements}</div>;
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
      <Header />
      <div className='bg-gradient-to-r from-red-600 via-red-700 to-red-800 '>
        <div className='flex items-center justify-between max-w-7xl mx-auto px-4'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 px-4 py-2 text-yellow-200 hover:text-white hover:bg-red-600/40 rounded-full transition-colors'
          >
            <ArrowLeft size={20} />
            Quay lại
          </Link>
          <Link
            to='/'
            className='text-sm text-yellow-200 hover:text-white underline underline-offset-4'
          >
            Về trang chủ
          </Link>
        </div>
      </div>
      {/* Hero/Title */}
      <section className='relative py-10 bg-gradient-to-r from-red-600 via-red-700 to-red-800'>
        <div className='absolute inset-0 bg-yellow-400 opacity-10'></div>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='mt-6'>
            <h1 className='text-2xl md:text-4xl font-bold text-white'>
              {section.title}
            </h1>
            <p className='mt-2 text-yellow-100 max-w-3xl'>{section.content}</p>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className='max-w-7xl mx-auto px-4 py-10'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Player */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden border'>
              <div className='aspect-video'>
                <iframe
                  src={embedUrl}
                  title={section.title}
                  className='w-full h-full'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              </div>
              <div className='p-6 border-t'>
                <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600'>
                  <span className='inline-flex items-center gap-2'>
                    <Calendar size={16} />
                    {new Date().toLocaleDateString('vi-VN')}
                  </span>
                  <span className='inline-flex items-center gap-2'>
                    <Clock size={16} />
                    15 phút
                  </span>
                  <button className='ml-auto inline-flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors'>
                    <Share2 size={16} /> Chia sẻ
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden border'>
              <img
                src={section.image}
                alt={section.title}
                className='w-full h-40 object-cover'
              />
              <div className='p-6 space-y-4 relative'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  Thông tin
                </h3>
                <div
                  className={`prose prose-sm max-w-none transition-[max-height] duration-300 ease-in-out ${
                    expanded ? 'max-h-[1000px]' : 'max-h-64 overflow-hidden'
                  }`}
                  aria-expanded={expanded}
                >
                  {renderStructuredContent(section.longContent)}
                </div>
                {!expanded && (
                  <div className='pointer-events-none absolute left-0 right-0 bottom-20 h-16 bg-gradient-to-t from-white to-transparent'></div>
                )}
                <button
                  type='button'
                  onClick={() => setExpanded(!expanded)}
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors text-sm font-semibold'
                  aria-controls='sidebar-content'
                >
                  {expanded ? 'Thu gọn' : 'Xem đầy đủ'}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
