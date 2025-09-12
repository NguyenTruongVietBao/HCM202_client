import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Calendar,
  User,
  Eye,
  Share2,
  Heart,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

// Dữ liệu video mở rộng với thông tin chi tiết
const videosData = {
  123: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Thành phố thông minh - Tương lai đã đến",
    description:
      "Khám phá cách công nghệ AI và IoT đang thay đổi cuộc sống đô thị hiện đại. Video này sẽ đưa bạn qua những ứng dụng thực tế của công nghệ thông minh trong giao thông, an ninh, và quản lý năng lượng.",
    author: "Nguyễn Văn A",
    publishDate: "12/09/2025",
    views: "15,234",
    duration: "8:32",
    category: "Công nghệ",
    tags: ["AI", "IoT", "Smart City", "Technology"],
    thumbnail:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=450&fit=crop",
    relatedArticle: "Bài viết gốc: Thành phố thông minh và tương lai số",
  },
  456: {
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    title: "Khám phá vũ trụ với kính viễn vọng mới",
    description:
      "Những hình ảnh đầu tiên từ kính viễn vọng thế hệ mới mang đến góc nhìn chưa từng có về vũ trụ. Hãy cùng chúng tôi khám phá những điều kỳ diệu của không gian và những phát hiện mới nhất.",
    author: "Trần Thị B",
    publishDate: "11/09/2025",
    views: "28,567",
    duration: "12:15",
    category: "Khoa học",
    tags: ["Space", "Telescope", "Astronomy", "Discovery"],
    thumbnail:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=450&fit=crop",
    relatedArticle: "Bài viết gốc: Những phát hiện mới về vũ trụ",
  },
  789: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Biến đổi khí hậu và giải pháp xanh",
    description:
      "Tìm hiểu về những sáng kiến mới trong việc ứng phó với biến đổi khí hậu. Video này trình bày các giải pháp xanh đang được triển khai trên toàn cầu và tác động tích cực của chúng.",
    author: "Lê Văn C",
    publishDate: "10/09/2025",
    views: "9,876",
    duration: "10:47",
    category: "Môi trường",
    tags: [
      "Climate Change",
      "Green Solutions",
      "Environment",
      "Sustainability",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1569163139394-de44421fb4a7?w=800&h=450&fit=crop",
    relatedArticle: "Bài viết gốc: Giải pháp xanh cho tương lai",
  },
};

const Video = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  const videoData = videosData[id];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!videoData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Video không tồn tại
          </h2>
          <p className="text-gray-600 mb-4">
            Xin lỗi, chúng tôi không thể tìm thấy video này.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            Quay về trang chủ
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Đã sao chép link!");
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">QR News Video</h1>
            <p className="text-sm text-gray-600">Xem video từ mã QR</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="aspect-video">
                <iframe
                  src={videoData.url}
                  title={videoData.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-3">
                  {videoData.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {videoData.title}
                </h1>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Eye size={16} />
                    {videoData.views} lượt xem
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {videoData.publishDate}
                  </span>
                  <span>⏱️ {videoData.duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      liked
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <Heart size={16} fill={liked ? "currentColor" : "none"} />
                    {liked ? "Đã thích" : "Thích"}
                  </button>

                  <div className="relative">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Share2 size={16} />
                      Chia sẻ
                    </button>

                    {showShareMenu && (
                      <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border p-2 w-48 z-10">
                        <button
                          onClick={copyToClipboard}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Sao chép link
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {videoData.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {videoData.author}
                  </p>
                  <p className="text-sm text-gray-600">Nhà báo</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Mô tả</h3>
                <p className="text-gray-600 leading-relaxed">
                  {videoData.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Thẻ</h3>
                <div className="flex flex-wrap gap-2">
                  {videoData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Article */}
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  {videoData.relatedArticle}
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm mt-1 flex items-center gap-1">
                  Đọc bài viết gốc
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Video Thumbnail */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <img
                src={videoData.thumbnail}
                alt={videoData.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Hình ảnh liên quan
                </h3>
                <p className="text-sm text-gray-600">
                  Ảnh minh họa từ bài viết gốc trên báo
                </p>
              </div>
            </div>

            {/* QR Info */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Thông tin QR</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  🎯 <strong>Video ID:</strong> {id}
                </p>
                <p>
                  📱 <strong>Quét từ:</strong> Mã QR trên báo
                </p>
                <p>
                  🔗 <strong>Liên kết:</strong> Trực tiếp đến video
                </p>
              </div>
            </div>

            {/* Comments Preview */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <MessageCircle size={18} />
                Bình luận
              </h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-2 border-blue-200 pl-3">
                  <p className="font-medium">Người xem A</p>
                  <p className="text-gray-600">Video rất hay và bổ ích!</p>
                </div>
                <div className="border-l-2 border-green-200 pl-3">
                  <p className="font-medium">Người xem B</p>
                  <p className="text-gray-600">Cảm ơn thông tin hữu ích.</p>
                </div>
              </div>
              <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm">
                Xem tất cả bình luận →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
