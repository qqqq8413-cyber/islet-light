'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 監聽滾動
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    }, { passive: true });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10'
        : 'bg-gradient-to-b from-black/50 to-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="text-white font-bold text-xl hover:text-white/80 transition-colors flex items-center gap-2">
            <span className="text-lg">🌅</span>
            嶼光
          </div>
        </Link>

        {/* 桌面導航 */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            href="/"
            className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider group"
          >
            首頁
            <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/portfolio"
            className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider group"
          >
            作品集
            <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/about"
            className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider group"
          >
            關於
            <div className="h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            聯絡
          </Link>
        </div>

        {/* 手機漢堡選單 */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* 手機選單 */}
      {mobileOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-8 space-y-6">
            <Link
              href="/"
              className="block text-white/70 hover:text-white transition-colors text-lg font-medium"
              onClick={() => setMobileOpen(false)}
            >
              首頁
            </Link>
            <Link
              href="/portfolio"
              className="block text-white/70 hover:text-white transition-colors text-lg font-medium"
              onClick={() => setMobileOpen(false)}
            >
              作品集
            </Link>
            <Link
              href="/about"
              className="block text-white/70 hover:text-white transition-colors text-lg font-medium"
              onClick={() => setMobileOpen(false)}
            >
              關於
            </Link>
            <Link
              href="/contact"
              className="block pt-6 border-t border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              <button className="w-full px-4 py-3 bg-white text-black text-lg font-semibold rounded-lg hover:bg-white/90 transition-colors">
                聯絡我們
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
