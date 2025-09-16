import React from 'react';
import {
  Star,
  BookOpen,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Quote,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { magazineInfo, famousQuotes, categories } from '../lib/constants';

export default function About() {
  const mission = [
    {
      icon: Target,
      title: 'Sứ mệnh',
      description:
        'Nghiên cứu, tuyên truyền và phổ biến tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội một cách sâu sắc, chính xác và sinh động.',
    },
    {
      icon: Heart,
      title: 'Tầm nhìn',
      description:
        'Trở thành tạp chí hàng đầu về tư tưởng Hồ Chí Minh, góp phần giáo dục lý tưởng cách mạng cho thế hệ trẻ Việt Nam.',
    },
    {
      icon: Globe,
      title: 'Giá trị',
      description:
        'Khoa học, chính xác, dễ hiểu và ứng dụng được trong thực tiễn xây dựng và bảo vệ Tổ quốc.',
    },
  ];

  const team = [
    {
      name: 'PGS.TS Nguyễn Văn Minh',
      role: 'Tổng Biên tập',
      expertise: 'Chuyên gia tư tưởng chính trị Hồ Chí Minh',
      experience: '25 năm kinh nghiệm',
    },
    {
      name: 'TS. Trần Thị Hương',
      role: 'Phó Tổng Biên tập',
      expertise: 'Lý luận cách mạng và xã hội chủ nghĩa',
      experience: '20 năm kinh nghiệm',
    },
    {
      name: 'ThS. Lê Văn Thành',
      role: 'Thư ký Tòa soạn',
      expertise: 'Triết học chính trị và ứng dụng thực tiễn',
      experience: '15 năm kinh nghiệm',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-100 via-yellow-50 to-red-50'></div>
        <div className='absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 -translate-y-48 translate-x-48'></div>
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-red-300 rounded-full opacity-20 translate-y-40 -translate-x-40'></div>

        <div className='relative max-w-7xl mx-auto px-4 text-center'>
          <div className='inline-block px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full mb-6'>
            GIỚI THIỆU TẠP CHÍ
          </div>
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            <span className='text-red-600'>Về Chúng Tôi</span>
          </h1>
          <p className='text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8'>
            {magazineInfo.description}
          </p>

          <div className='flex justify-center gap-8 text-gray-600 mb-12'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-red-600'>
                {magazineInfo.foundedYear}
              </div>
              <div className='text-sm'>Năm thành lập</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-yellow-600'>6</div>
              <div className='text-sm'>Chuyên mục</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-600'>50+</div>
              <div className='text-sm'>Chuyên gia</div>
            </div>
          </div>

          {/* Featured Quote */}
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-100'>
              <Quote className='text-red-500 mx-auto mb-4' size={40} />
              <blockquote className='text-xl md:text-2xl text-gray-800 font-light italic leading-relaxed mb-4'>
                "{famousQuotes[1].text}"
              </blockquote>
              <cite className='text-red-600 font-semibold'>
                - Chủ tịch Hồ Chí Minh ({famousQuotes[1].year})
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Sứ mệnh & <span className='text-red-600'>Tầm nhìn</span>
            </h2>
            <p className='text-xl text-gray-600'>
              Định hướng phát triển của tạp chí trong thời kỳ mới
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {mission.map((item, index) => (
              <div
                key={index}
                className='text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6'>
                  <item.icon className='text-red-600' size={32} />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Chuyên Mục <span className='text-red-600'>Nghiên Cứu</span>
            </h2>
            <p className='text-xl text-gray-600'>
              Các lĩnh vực nghiên cứu chuyên sâu của tạp chí
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${category.color.replace(
                  'bg-',
                  'border-'
                )}`}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div
                    className={`w-3 h-3 ${category.color} rounded-full`}
                  ></div>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {category.name}
                  </h3>
                </div>
                <p className='text-gray-600'>
                  Nghiên cứu chuyên sâu về {category.name.toLowerCase()} trong
                  tư tưởng Hồ Chí Minh
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
