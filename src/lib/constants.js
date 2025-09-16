// Thông tin về tạp chí
export const magazineInfo = {
  title: 'Tạp chí Tư tưởng Hồ Chí Minh',
  subtitle: 'Ánh sáng dẫn đường cho dân tộc Việt Nam',
  description:
    'Tạp chí nghiên cứu, tuyên truyền và phổ biến tư tưởng vĩ đại của Chủ tịch Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội.',
  foundedYear: 2025,
  publisher: 'Viện Nghiên cứu Tư tưởng Hồ Chí Minh',
  issn: 'ISSN 2025-1234',
  frequency: 'Xuất bản hàng tuần',
  language: 'Tiếng Việt',
};

// Danh mục chuyên đề
export const categories = [
  { id: 'tu-tuong-chinh-tri', name: 'Tư tưởng chính trị', color: 'bg-red-600' },
  { id: 'ly-luan-cach-mang', name: 'Lý luận cách mạng', color: 'bg-blue-600' },
  {
    id: 'ly-luan-xa-hoi-chu-nghia',
    name: 'Lý luận xã hội chủ nghĩa',
    color: 'bg-green-600',
  },
  {
    id: 'triet-hoc-chinh-tri',
    name: 'Triết học chính trị',
    color: 'bg-purple-600',
  },
  {
    id: 'thuc-tien-ung-dung',
    name: 'Thực tiễn ứng dụng',
    color: 'bg-yellow-600',
  },
  { id: 'ly-luan-xay-dung', name: 'Lý luận xây dựng', color: 'bg-indigo-600' },
];

// Trích dẫn nổi bật của Hồ Chí Minh
export const famousQuotes = [
  {
    text: 'Không có gì quý hơn độc lập, tự do',
    context: 'Lời kêu gọi toàn quốc kháng chiến',
    year: '1946',
  },
  {
    text: 'Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do',
    context: 'Tuyên ngôn Độc lập',
    year: '1945',
  },
  {
    text: 'Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có ý nghĩa gì',
    context: 'Về độc lập và hạnh phúc nhân dân',
    year: '1946',
  },
  {
    text: 'Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản',
    context: 'Về con đường cách mạng',
    year: '1960',
  },
];

export const mainContent = {
  title: 'Tư tưởng Hồ Chí Minh về Độc lập Dân tộc và Chủ nghĩa Xã hội',
  subtitle: 'Ánh sáng dẫn đường cho dân tộc Việt Nam',
  sections: [
    {
      id: 'doc-lap-dan-toc',
      title: 'I. Tư tưởng về Độc lập Dân tộc',
      content:
        'Hồ Chí Minh tiếp cận vấn đề độc lập dân tộc từ góc độ quyền con người, khẳng định "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do". Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.',
      longContent: `I. Tư tưởng Hồ Chí Minh về Độc lập Dân tộc

Độc lập, tự do là quyền thiêng liêng: Mọi dân tộc đều có quyền sống, quyền sung sướng và quyền tự do.

Giành và giữ độc lập: “Không có gì quý hơn độc lập, tự do”. Độc lập phải gắn liền với cơm no, áo ấm, hạnh phúc nhân dân.

Độc lập thực sự: Có chính phủ, nghị viện, quân đội, tài chính của mình; gắn với thống nhất, toàn vẹn lãnh thổ.

Cách mạng giải phóng dân tộc:

Phải đi theo con đường cách mạng vô sản.

Do Đảng Cộng sản lãnh đạo.

Dựa vào đại đoàn kết toàn dân, lấy công – nông làm gốc.

Chủ động, sáng tạo, có thể thắng lợi trước chính quốc.

Phải dùng bạo lực cách mạng chống lại bạo lực phản cách mạng.`,
      image: '/images/doc-lap-dan-toc.jpeg',
      videoUrl: 'https://www.youtube.com/embed/3jRm8KRwFlo',
      videoId: '3jRm8KRwFlo',
      qrData:
        'https://hochiminh-news.vercel.app/video/3jRm8KRwFlo?slug=doc-lap-dan-toc',
    },
    {
      id: 'chu-nghia-xa-hoi',
      title: 'II. Tư tưởng về Chủ nghĩa Xã hội',
      content:
        'Hồ Chí Minh quan niệm chủ nghĩa xã hội là mục tiêu cuối cùng của cách mạng Việt Nam. Người diễn đạt: "Chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn, việc làm, được ấm no và sống một đời hạnh phúc".',
      longContent: `II. Tư tưởng Hồ Chí Minh về Chủ nghĩa Xã hội

Quan niệm: CNXH làm cho dân hết bần cùng, ai cũng có cơm ăn, áo mặc, việc làm, hạnh phúc; dân giàu, nước mạnh.

Tất yếu khách quan: CNXH là xu thế phát triển của nhân loại, phù hợp khát vọng nhân dân.

Đặc trưng cơ bản:

Chính trị: chế độ dân chủ, nhân dân làm chủ.

Kinh tế: công – nông nghiệp hiện đại, công hữu tư liệu sản xuất chủ yếu.

Văn hóa – xã hội: công bằng, văn minh, tôn trọng con người.

Xây dựng CNXH ở Việt Nam:

Mục tiêu: dân chủ, kinh tế hiện đại, văn hóa dân tộc – khoa học – đại chúng.

Động lực: nhân dân, đoàn kết toàn dân dưới sự lãnh đạo của Đảng.

Thời kỳ quá độ: lâu dài, khó khăn, phải cải tạo xã hội cũ và xây dựng mới trên tất cả lĩnh vực.`,
      image: '/images/chu-nghia-xa-hoi.jpg',
      videoUrl: 'https://www.youtube.com/embed/3jRm8KRwFlo',
      videoId: '3jRm8KRwFlo',
      qrData:
        'https://hochiminh-news.vercel.app/video/3jRm8KRwFlo?slug=chu-nghia-xa-hoi',
    },
    {
      id: 'moi-quan-he',
      title: 'III. Mối quan hệ Biện chứng',
      content:
        'Độc lập dân tộc và chủ nghĩa xã hội là hai mặt biện chứng gắn liền, không thể tách rời. Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội. Chủ nghĩa xã hội là điều kiện để đảm bảo độc lập dân tộc vững chắc.',
      longContent: `III. Tư tưởng Hồ Chí Minh về mối quan hệ biện chứng giữa Độc lập Dân tộc và Chủ nghĩa Xã hội
 - Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội
 - Chủ nghĩa xã hội là điều kiện để đảm bảo độc lập dân tộc vững chắc
 - Điều kiện để đảm bảo độc lập dân tộc gắn liền với chủ nghĩa xã hội
 - Đảm bảo vai trò lãnh đạo tuyệt đối của Đảng Cộng sản trong suốt tiến trình cách mạng.
`,
      image: '/images/moi-quan-he.png',
      videoUrl: 'https://www.youtube.com/embed/GvNpvJldjz4',
      videoId: 'GvNpvJldjz4',
      qrData:
        'https://hochiminh-news.vercel.app/video/GvNpvJldjz4?slug=moi-quan-he',
    },
    {
      id: 'van-dung-hien-nay',
      title: 'IV. Vận dụng trong thời kỳ hiện nay',
      content:
        'Việt Nam tiếp tục vận dụng tư tưởng Hồ Chí Minh để phát triển đất nước theo phương châm "dân biết, dân bàn, dân làm, dân kiểm tra". Cần kiên định mục tiêu và con đường cách mạng, phát huy sức mạnh dân chủ xã hội chủ nghĩa.',
      longContent: `IV. Vận dụng tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với CNXH trong sự nghiệp cách mạng Việt Nam hiện nay
Trong bối cảnh hiện nay, Việt Nam tiếp tục vận dụng tư tưởng Hồ Chí Minh để phát triển đất nước.

- Kiên định mục tiêu và con đường cách mạng mà Hồ Chí Minh đã xác định
- Mục tiêu: Giành độc lập dân tộc và tiến lên chủ nghĩa xã hội.
- Con đường: Đi theo con đường cách mạng vô sản, do Đảng Cộng sản lãnh đạo, dựa vào đại đoàn kết toàn dân, liên minh công – nông, có thể giành thắng lợi trước chính quốc.
- Nguyên tắc: Giữ vững độc lập, dựa trên chủ nghĩa Mác – Lênin, đoàn kết quốc tế.
- Phát huy dân chủ XHCN.
- Củng cố hệ thống chính trị.
- Đấu tranh chống suy thoái tư tưởng, đạo đức, lối sống.`,
      image: '/images/van-dung.jpg',
      videoUrl: 'https://www.youtube.com/embed/aOnzYuN76oo',
      videoId: 'aOnzYuN76oo',
      qrData:
        'https://hochiminh-news.vercel.app/video/aOnzYuN76oo?slug=van-dung-hien-nay',
    },
  ],
};
