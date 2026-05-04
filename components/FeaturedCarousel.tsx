'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FeaturedItem {
  id: string;
  title: string;
  type: 'video' | 'image';
  videoUrl?: string;
  imageUrl?: string;
  thumbnail: string;
  description?: string;
}

interface FeaturedCarouselProps {
  items: FeaturedItem[];
}

export default function FeaturedCarousel({ items }: FeaturedCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[current];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 輪播內容 */}
      {item.type === 'video' ? (
        <video
          key={item.id}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={item.videoUrl} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={item.imageUrl || ''}
          alt={item.title}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* 漸層覆蓋 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />

      {/* 標題 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-16">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          {item.title}
        </h1>
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all ${
                idx === current ? 'bg-white w-8 md:w-12' : 'bg-white/30 w-3 md:w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
