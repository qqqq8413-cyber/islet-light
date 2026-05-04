'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 這裡可以連接到你的郵件服務（Formspree, SendGrid 等）
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="px-4 md:px-8 lg:px-16 max-w-3xl mx-auto pb-16 md:pb-24">
        {/* 返回按鈕 */}
        <div className="mb-6 md:mb-8">
          <Link href="/">
            <button className="text-white/60 hover:text-white transition-colors text-sm">
              ← 返回首頁
            </button>
          </Link>
        </div>

        {/* 標題 */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            聯絡我們
          </h1>
          <p className="text-white/60 text-base md:text-lg">
            對你的項目有想法嗎？我們很樂意聽到你的消息。
          </p>
        </div>

        {/* 表單 */}
        {submitted ? (
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 text-center">
            <p className="text-green-400 text-lg">
              ✓ 感謝你的信息！我們會盡快回覆。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm mb-2">名字</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="你的名字"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">電郵</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="你的電郵"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm mb-2">主題</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="項目主題"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">訊息</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="請告訴我們你的項目詳情"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              發送訊息
            </button>
          </form>
        )}

        {/* 其他聯絡方式 */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h2 className="text-white text-xl font-bold mb-6">其他聯絡方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2">電郵</h3>
              <a
                href="mailto:contact@example.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                contact@example.com
              </a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">電話</h3>
              <a
                href="tel:+886123456789"
                className="text-white/60 hover:text-white transition-colors"
              >
                +886 (0)123 456 789
              </a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">社群媒體</h3>
              <div className="space-y-1">
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
