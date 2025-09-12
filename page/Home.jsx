import React, { useState } from "react";
import { X, Play, QrCode, Calendar, User } from "lucide-react";

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Dữ liệu mẫu cho các bài báo với QR code và video
  const articles = [
    {
      id: 1,
      title: "Thành phố thông minh - Tương lai đã đến",
      excerpt:
        "Công nghệ AI và IoT đang thay đổi cách chúng ta sống trong thành phố hiện đại.",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
      author: "Nguyễn Văn A",
      date: "12/09/2025",
      category: "Công nghệ",
      qrData: "https://example.com/video/1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Khám phá vũ trụ với kính viễn vọng mới",
      excerpt:
        "Những hình ảnh đầu tiên từ kính viễn vọng thế hệ mới mang đến góc nhìn chưa từng có.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      author: "Trần Thị B",
      date: "11/09/2025",
      category: "Khoa học",
      qrData: "https://example.com/video/2",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Biến đổi khí hậu và giải pháp xanh",
      excerpt:
        "Các sáng kiến mới trong việc ứng phó với biến đổi khí hậu đang được triển khai toàn cầu.",
      image:
        "https://images.unsplash.com/photo-1569163139394-de44421fb4a7?w=600&h=400&fit=crop",
      author: "Lê Văn C",
      date: "10/09/2025",
      category: "Môi trường",
      qrData: "https://example.com/video/3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  // Component QR Code (đơn giản hóa - trong thực tế bạn sẽ cần thư viện QR)
  const QRCode = ({ data, size = 80 }) => {
    // Tạo QR code đơn giản bằng API online
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
      data
    )}`;

    return (
      <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm border">
        <img src={qrUrl} alt="QR Code" className="w-20 h-20 mb-1" />
        <span className="text-xs text-gray-600 flex items-center gap-1">
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
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-4">
            <div className="aspect-video mb-4">
              <iframe
                src={article.videoUrl}
                title={article.title}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div>
                <p className="text-gray-600 mb-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-blue-600">Báo Điện Tử</span> QR News
          </h1>
          <p className="text-gray-600 mt-1">
            Tin tức hiện đại với công nghệ QR
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-1/3 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {/* QR Code overlay */}
                  <div className="absolute top-4 right-4">
                    <QRCode data={article.qrData} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <User size={16} />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {article.date}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedVideo(article)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Cách sử dụng QR Code
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <p className="mb-2">
                📱 <strong>Bước 1:</strong> Mở ứng dụng camera trên điện thoại
              </p>
              <p className="mb-2">
                🎯 <strong>Bước 2:</strong> Hướng camera vào mã QR trên hình ảnh
              </p>
            </div>
            <div>
              <p className="mb-2">
                🔗 <strong>Bước 3:</strong> Nhấn vào link xuất hiện trên màn
                hình
              </p>
              <p className="mb-2">
                🎬 <strong>Bước 4:</strong> Thưởng thức video liên quan!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Video Popup */}
      <VideoPopup
        article={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">QR News</h4>
            <p className="text-gray-400">
              Kết nối thông tin với công nghệ QR hiện đại
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
