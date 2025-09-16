import { QrCode } from 'lucide-react';
import React from 'react';

export default function QRCode({ data, size = 100 }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    data
  )}`;

  return (
    <div className='flex flex-col items-center p-2 bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl shadow-lg border-2 border-red-200'>
      <img src={qrUrl} alt='QR Code' className='w-24 h-24 mb-2 rounded-lg' />
      <span className='text-xs font-semibold text-red-700 flex items-center gap-1'>
        <QrCode size={14} />
        Quét để xem video
      </span>
    </div>
  );
}
