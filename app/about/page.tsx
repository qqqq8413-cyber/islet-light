'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="px-4 md:px-8 lg:px-16 max-w-4xl mx-auto pb-16 md:pb-24">
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
            關於嶼光
          </h1>
          <p className="text-white/60 text-base md:text-lg">
            我們的故事與視界
          </p>
        </div>

        {/* 主要內容 */}
        <div className="space-y-6 md:space-y-8 text-white/80 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
              我們是誰
            </h2>
            <p>
              嶼光是一個致力於創造高品質影片和攝影內容的創意工作室。我們相信每一個品牌都有獨特的故事值得被好好呈現，無論是透過動態影片、靜態攝影或創意概念。
            </p>
            <p className="mt-4">
              我們的團隊由資深的導演、攝影師、剪輯師和創意策劃師組成，致力於將你的願景化為現實。
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
              我們的核心價值
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">品質優先</h3>
                <p className="text-white/60">
                  每一個項目都經過精心策劃和執行，確保最高的專業標準
                </p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">創意無限</h3>
                <p className="text-white/60">
                  我們不斷探索新的視角和表現方式，為你的品牌注入新鮮活力
                </p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">合作伙伴</h3>
                <p className="text-white/60">
                  我們將自己視為你的創意伙伴，而不只是服務商
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
              我們的服務
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">商業廣告</strong> - 從概念到成片的完整廣告製作
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">品牌影片</strong> - 傳達品牌故事與價值的影片內容
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">社群內容</strong> - 優化於各平台的短影片與靜態內容
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">商業攝影</strong> - 專業的產品、環景和活動攝影
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">創意策劃</strong> - 從創意概念到視覺執行的完整支援
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
              為什麼選擇我們
            </h2>
            <p>
              我們對細節的關注、對創意的執著，以及與客戶密切的合作方式，使我們成為將你的願景化為現實的理想選擇。
            </p>
            <p className="mt-4">
              無論你的項目規模大小，我們都承諾提供同等的專業性和熱情。
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10 text-center">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
            開始你的項目
          </h2>
          <Link href="/contact">
            <button className="px-6 md:px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm md:text-base">
              聯絡我們
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
