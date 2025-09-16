import React, { useState } from 'react';
import {
  X,
  Play,
  QrCode,
  Calendar,
  User,
  Star,
  Clock,
  FileText,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import { Link } from 'react-router';
import QRCode from '../components/QRCode';
import { mainContent } from '../lib/constants';
import VideoPopup from '../components/VideoPopup';

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className='min-h-screen relative overflow-hidden bg-[#F7F1E3]'>
      {/* Vintage newspaper background layers */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-[0.35]'
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-[0.18]'
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 320px)',
        }}
      />
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(1200px 600px at 50% -10%, rgba(0,0,0,0.08), transparent 60%), radial-gradient(800px 400px at 10% 110%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(800px 400px at 90% 110%, rgba(0,0,0,0.06), transparent 60%)',
        }}
      />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection mainContent={mainContent} />
      {/* Main Content Sections */}
      <section id='main-content' className='py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Paper panel */}
          <div className='relative rounded-3xl border border-[#E2DAC4] bg-[#FCFAF4]/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_30px_rgba(0,0,0,0.05)] p-6 md:p-10'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Nội Dung <span className='text-red-600'>Chính</span>
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Khám phá Tư tưởng Hồ Chí Minh thông qua 4 chương chính được
                trình bày một cách có hệ thống.
              </p>
            </div>

            <div className='space-y-20'>
              {mainContent.sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Content */}
                  <div className='lg:w-1/2 space-y-6'>
                    <div className='flex items-center gap-4 mb-6'>
                      <div className='w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                        {index + 1}
                      </div>
                      <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>
                        {section.title}
                      </h3>
                    </div>

                    <p className='text-lg text-gray-700 leading-relaxed'>
                      {section.content}
                    </p>

                    <div className='flex items-center gap-4'>
                      <button
                        onClick={() =>
                          setSelectedVideo({
                            title: section.title,
                            content: section.content,
                            image: section.image,
                            videoUrl: section.videoUrl,
                            qrData: section.qrData,
                            author: 'HCM202 - Nhóm 2',
                            date: new Date().toLocaleDateString('vi-VN'),
                            readTime: '15 phút',
                            tags: [
                              'Tư tưởng Hồ Chí Minh',
                              'Độc lập dân tộc',
                              'Chủ nghĩa xã hội',
                            ],
                          })
                        }
                        className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold'
                      >
                        <Play size={20} />
                        Xem Video
                      </button>
                      <Link
                        to={`./video/${section.videoId}?slug=${section.id}`}
                        className='flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold'
                      >
                        <FileText size={20} />
                        Xem Chi Tiết
                      </Link>
                    </div>
                  </div>

                  {/* Image and QR */}
                  <div className='lg:w-1/2 relative'>
                    <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                      <img
                        src={section.image}
                        alt={section.title}
                        className='w-full h-96 object-cover'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>

                      {/* Section Number Badge */}
                      <div className='absolute top-4 left-4'>
                        <div className='bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full'>
                          <span className='text-red-600 font-bold'>
                            Chương {index + 1}
                          </span>
                        </div>
                      </div>
                      {/* QR Code */}
                      <div className='absolute top-4 right-4'>
                        <QRCode data={section.qrData} size={120} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      {/* <StatisticsSection /> */}
      {/* Footer */}
      <Footer />
      {/* Video Popup */}
      <VideoPopup
        article={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default Home;
