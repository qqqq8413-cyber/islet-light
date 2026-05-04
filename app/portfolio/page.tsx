'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image';
  thumbnail: string;
  duration?: string;
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        const cats = Array.from(
          new Set(data.projects.map((p: Project) => p.category))
        ) as string[];
        setCategories(cats);
        setSelectedCategory(cats[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load portfolio data:', err);
        setLoading(false);
      });
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white">載入中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* 返回按鈕 */}
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-6 md:mb-8">
        <Link href="/">
          <button className="text-white/60 hover:text-white transition-colors text-sm">
            ← 返回首頁
          </button>
        </Link>
      </div>

      {/* 標題 */}
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-8 md:mb-12">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
          全部作品
        </h1>
        <p className="text-white/60 text-sm md:text-base">按風格分類的完整作品集 - 影片與攝影</p>
      </div>

      {/* 分類篩選 */}
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-colors text-xs md:text-sm font-medium ${
              selectedCategory === null
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            全部
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-colors text-xs md:text-sm font-medium ${
                selectedCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 作品網格 */}
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
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

        {filteredProjects.length === 0 && (
          <div className="text-center text-white/60 py-12">
            <p>此分類無作品</p>
          </div>
        )}
      </div>
    </div>
  );
}
