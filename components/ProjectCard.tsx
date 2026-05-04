'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image';
  thumbnail: string;
  duration?: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  type,
  thumbnail,
  duration,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/project/${id}`}>
      <div
        className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* 深色覆蓋 */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-20'
          }`}
        />

        {/* 播放按鈕（影片） */}
        {type === 'video' && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors">
              <svg
                className="w-10 h-10 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* 底部資訊 - 懸停時移動 */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 transition-transform duration-500 ${
          isHovered ? 'translate-y-0' : 'translate-y-2'
        }`}>
          <p className="text-white/60 text-xs uppercase tracking-wider mb-2">
            {category}
          </p>
          <h3 className="text-white font-bold text-lg line-clamp-2 mb-2">
            {title}
          </h3>
          {duration && (
            <p className="text-white/50 text-xs">{duration}</p>
          )}
        </div>

        {/* 右上角類型標籤 */}
        <div className="absolute top-4 right-4">
          <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/80 border border-white/20">
            {type === 'video' ? '影片' : '攝影'}
          </span>
        </div>
      </div>
    </Link>
  );
}
