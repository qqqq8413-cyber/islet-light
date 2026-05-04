'use client';

import { useState, useEffect } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image';
  thumbnail: string;
  videoUrl?: string;
  imageUrl?: string;
  duration?: string;
  description: string;
  year: number;
}

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.projects.find(
          (p: Project) => p.id === params.id
        );
        setProject(found || null);
        setAllProjects(data.projects);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load project:', err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <p className="text-white">載入中...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">作品不存在</p>
          <Link href="/portfolio">
            <button className="text-white/60 hover:text-white">
              返回作品集
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // 尋找上一個和下一個作品
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* 返回按鈕 */}
      <div className="px-4 md:px-8 lg:px-16 max-w-5xl mx-auto mb-6 md:mb-8">
        <Link href="/portfolio">
          <button className="text-white/60 hover:text-white transition-colors text-sm">
            ← 返回作品集
          </button>
        </Link>
      </div>

      {/* 主內容 */}
      <div className="px-4 md:px-8 lg:px-16 max-w-5xl mx-auto pb-16 md:pb-24">
        {/* 媒體展示 */}
        <div className="mb-12">
          {project.type === 'video' ? (
            <VideoPlayer
              src={project.videoUrl || ''}
              poster={project.thumbnail}
              title={project.title}
            />
          ) : (
            <div className="relative w-full h-auto bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={project.imageUrl || project.thumbnail}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* 作品資訊 */}
        <div className="mb-8 md:mb-12">
          <div className="mb-6 md:mb-8">
            <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3">
              {project.category}
            </p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* 詳細資訊 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-white/60 text-xs md:text-sm border-t border-b border-white/10 py-4 md:py-6">
            <div>
              <p className="text-white/40 mb-1">年份</p>
              <p className="text-white">{project.year}</p>
            </div>
            <div>
              <p className="text-white/40 mb-1">分類</p>
              <p className="text-white">{project.category}</p>
            </div>
            {project.duration && (
              <div>
                <p className="text-white/40 mb-1">長度</p>
                <p className="text-white">{project.duration}</p>
              </div>
            )}
            <div>
              <p className="text-white/40 mb-1">格式</p>
              <p className="text-white">{project.type === 'video' ? '影片' : '圖片'}</p>
            </div>
          </div>
        </div>

        {/* 導航箭頭 */}
        <div className="flex justify-between items-center mb-12 pt-8">
          {prevProject ? (
            <Link href={`/project/${prevProject.id}`}>
              <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <span>←</span>
                <span className="text-sm">{prevProject.title}</span>
              </button>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link href={`/project/${nextProject.id}`}>
              <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <span className="text-sm">{nextProject.title}</span>
                <span>→</span>
              </button>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* CTA */}
        <div className="text-center border-t border-white/10 pt-12">
          <h2 className="text-white text-2xl font-bold mb-4">
            對這樣的作品感興趣？
          </h2>
          <Link href="/contact">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors">
              聯絡我們
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
