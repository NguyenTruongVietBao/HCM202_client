import React, { useState } from 'react';
import { X, Play, QrCode, Calendar, User } from 'lucide-react';
import { articles } from '../lib/constants';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Component QR Code
  const QRCode = ({ data, size = 80 }) => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      data
    )}`;

    return (
      <div className='flex flex-col items-center p-2 bg-white rounded-lg shadow-sm border'>
        <img src={qrUrl} alt='QR Code' className='w-20 h-20 mb-1' />
        <span className='text-xs text-gray-600 flex items-center gap-1'>
          <QrCode size={12} />
          Quét QR
        </span>
      </div>
    );
  };

  // Component Video Popup
  const VideoPopup = ({ article, onClose }) => {
    if (!article) return null;

    return (
      <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'>
        <div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto'>
          <div className='flex justify-between items-center p-4 border-b'>
            <h3 className='text-lg font-bold text-gray-800'>{article.title}</h3>
            <button
              onClick={onClose}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
            >
              <X size={24} />
            </button>
          </div>

          <div className='p-4'>
            <div className='aspect-video mb-4'>
              <iframe
                src={article.videoUrl}
                title={article.title}
                className='w-full h-full rounded-lg'
                allowFullScreen
              ></iframe>
            </div>

            <div className='grid md:grid-cols-2 gap-4'>
              <img
                src={article.image}
                alt={article.title}
                className='w-full h-48 object-cover rounded-lg'
              />
              <div>
                <p className='text-gray-600 mb-2'>{article.excerpt}</p>
                <div className='flex items-center gap-4 text-sm text-gray-500'>
                  <span className='flex items-center gap-1'>
                    <User size={16} />
                    {article.author}
                  </span>
                  <span className='flex items-center gap-1'>
                    <Calendar size={16} />
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className='max-w-6xl mx-auto px-4 py-8'>
        <div className='grid gap-8'>
          {articles.map((article) => (
            <article
              key={article.id}
              className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='md:flex'>
                {/* Image Section */}
                <div className='md:w-1/3 relative'>
                  <img
                    src={article.image}
                    alt={article.title}
                    className='w-full h-64 md:h-full object-cover'
                  />
                  {/* QR Code overlay */}
                  <div className='absolute top-4 right-4'>
                    <QRCode data={article.qrData} />
                  </div>
                </div>

                {/* Content Section */}
                <div className='md:w-2/3 p-6'>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>
                      {article.category}
                    </span>
                  </div>

                  <h2 className='text-2xl font-bold text-gray-800 mb-3'>
                    {article.title}
                  </h2>

                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {article.excerpt}
                  </p>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4 text-sm text-gray-500'>
                      <span className='flex items-center gap-1'>
                        <User size={16} />
                        {article.author}
                      </span>
                      <span className='flex items-center gap-1'>
                        <Calendar size={16} />
                        {article.date}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedVideo(article)}
                      className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      <Play size={16} />
                      Xem Video
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Video Popup */}
      <VideoPopup
        article={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
