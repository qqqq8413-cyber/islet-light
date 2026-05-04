'use client';

import { useState, useEffect } from 'react';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image';
  thumbnail: string;
  duration?: string;
  description?: string;
}

interface PortfolioData {
  featured: Project[];
  projects: Project[];
}

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => {
        // featured 應該是陣列，如果不是則轉換
        const featured = Array.isArray(data.featured)
          ? data.featured
          : [data.featured];
        setPortfolioData({ ...data, featured });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load portfolio data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white">載入中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* 特色作品輪播 */}
      {portfolioData?.featured && (
        <FeaturedCarousel items={portfolioData.featured} />
      )}

      {/* 品牌故事區塊 */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-zinc-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
                關於嶼光
              </p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-8">
                捕捉光影的故事
              </h2>
              <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                在這島嶼上，我們相信每一瞬光影都承載著獨特的故事。
                無論是品牌的靈魂、人物的情感，還是空間的詩意，
                嶼光致力於用影像語言，將最真實的時刻凝聚成永恆。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 作品流 */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 md:gap-8 mb-8 md:mb-12">
            <div>
              <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">
                我們的作品
              </p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                精選作品集
              </h2>
            </div>
            <Link href="/portfolio" className="hidden md:block">
              <button className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider whitespace-nowrap">
                查看全部 →
              </button>
            </Link>
          </div>
        </div>

        {/* 影片作品 */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">精選影片</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {portfolioData?.projects
              .filter((p) => p.type === 'video')
              .slice(0, 3)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  type={project.type}
                  thumbnail={project.thumbnail}
                  duration={project.duration}
                />
              ))}
          </div>
        </div>

        {/* 攝影作品 */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">精選攝影</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {portfolioData?.projects
              .filter((p) => p.type === 'image')
              .slice(0, 3)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  type={project.type}
                  thumbnail={project.thumbnail}
                  duration={project.duration}
                />
              ))}
          </div>
        </div>

        <div className="md:hidden text-center mt-12">
          <Link href="/portfolio">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors">
              查看全部作品
            </button>
          </Link>
        </div>
      </section>

      {/* 服務區塊 */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-zinc-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              我們提供
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              完整的創意服務
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: '商業廣告', desc: '從概念到成片的完整製作' },
              { title: '企業形象', desc: '品牌故事與價值的視覺呈現' },
              { title: '攝影服務', desc: '商業、人像、婚禮、空間攝影' },
              { title: '影片製作', desc: '短影片、教材、宣傳影片製作' }
            ].map((service, i) => (
              <div
                key={i}
                className="group border border-white/10 rounded-lg p-8 hover:border-white/30 transition-all hover:bg-white/5"
              >
                <h3 className="text-white font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 區塊 */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div>
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
              開始合作
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              讓我們為你的故事發光
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
              無論你的項目規模大小，嶼光都準備好將你的願景化為現實。
              讓我們一起創造令人印象深刻的視覺體驗。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm md:text-base">
                聯絡我們
              </button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors text-sm md:text-base">
                查看作品
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
