# 嶼光作品集網站 - 完整指南

## 📋 專案結構

```
/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首頁（作品流）
│   ├── portfolio/         # 作品集頁面
│   ├── project/[id]/      # 單個作品詳情頁
│   ├── about/             # 關於頁面
│   ├── contact/           # 聯絡頁面
│   └── layout.tsx         # 全域佈局
├── components/            # React 組件
│   ├── Navigation.tsx      # 導航欄
│   ├── FeaturedCarousel.tsx # 首頁輪播
│   ├── ProjectCard.tsx     # 作品卡片
│   └── VideoPlayer.tsx     # 影片播放器
├── public/
│   └── data/
│       └── portfolio.json  # 作品資料（JSON）
└── package.json

```

## 🚀 快速開始

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看網站。

## 📝 如何管理作品

所有作品資料都存儲在 `public/data/portfolio.json`。格式如下：

### JSON 資料結構

```json
{
  "featured": [
    {
      "id": "featured-1",
      "title": "特色作品標題",
      "type": "video",
      "videoUrl": "/portfolio/videos/featured.mp4",
      "thumbnail": "/portfolio/images/featured-thumb.jpg",
      "description": "作品描述"
    }
  ],
  "projects": [
    {
      "id": "project-1",
      "title": "作品標題",
      "category": "廣告",
      "type": "video",
      "thumbnail": "/portfolio/images/thumb-1.jpg",
      "videoUrl": "/portfolio/videos/project-1.mp4",
      "duration": "0:30",
      "description": "作品詳細描述",
      "year": 2024
    },
    {
      "id": "project-2",
      "title": "圖片作品",
      "category": "品牌",
      "type": "image",
      "thumbnail": "/portfolio/images/project-2.jpg",
      "imageUrl": "/portfolio/images/project-2.jpg",
      "description": "作品描述",
      "year": 2024
    }
  ]
}
```

### 新增作品步驟

#### 1️⃣ 上傳媒體文件

- **影片**: 放在 `public/portfolio/videos/` 目錄下
- **圖片**: 放在 `public/portfolio/images/` 目錄下

#### 2️⃣ 更新 JSON 資料

編輯 `public/data/portfolio.json`，在 `projects` 陣列中新增物件：

```json
{
  "id": "project-30",
  "title": "你的作品標題",
  "category": "選擇分類",
  "type": "video",
  "thumbnail": "/portfolio/images/thumb-30.jpg",
  "videoUrl": "/portfolio/videos/project-30.mp4",
  "duration": "1:30",
  "description": "作品的詳細描述",
  "year": 2024
}
```

## 📊 字段說明

| 字段 | 類型 | 說明 | 示例 |
|------|------|------|------|
| `id` | string | 唯一識別符 | `"project-1"` |
| `title` | string | 作品標題 | `"新年廣告"` |
| `category` | string | 分類（自動為 Portfolio 頁面生成篩選器） | `"廣告"`, `"品牌"` |
| `type` | string | 媒體類型 | `"video"` 或 `"image"` |
| `thumbnail` | string | 縮圖路徑 | `"/portfolio/images/thumb.jpg"` |
| `videoUrl` | string | 影片路徑（type="video" 時必填） | `"/portfolio/videos/demo.mp4"` |
| `imageUrl` | string | 圖片路徑（type="image" 時必填） | `"/portfolio/images/full.jpg"` |
| `duration` | string | 影片長度（可選） | `"2:45"` |
| `description` | string | 詳細描述 | `"該作品描述..."` |
| `year` | number | 製作年份 | `2024` |

## 🎨 頁面功能說明

### 首頁 (/)
- **特色作品輪播**: 自動播放影片或圖片（5秒切換）
- **最近作品**: 網格展示最新作品
- **CTA 按鈕**: 導至聯絡頁面

### 作品集 (/portfolio)
- **分類篩選**: 按 category 自動生成篩選按鈕
- **網格展示**: 3 列網格（桌面）、2 列（平板）、1 列（手機）
- **懸停效果**: 卡片縮放，影片顯示播放按鈕

### 作品詳情 (/project/[id])
- **完整媒體展示**: 影片或高清圖片
- **作品資訊**: 分類、製作年份、格式等
- **相鄰導航**: 前後作品快速跳轉
- **相關 CTA**: 聯絡表單

### 關於 (/about)
- 品牌故事
- 核心價值
- 服務項目

### 聯絡 (/contact)
- 聯絡表單
- 其他聯絡方式

## 🛠️ 自訂設定

### 修改品牌名稱
編輯 `components/Navigation.tsx` 中的 Logo：
```tsx
<div className="text-white font-bold text-xl">
  嶼光  {/* 改成你的品牌名稱 */}
</div>
```

### 修改網站標題與描述
編輯 `app/layout.tsx` 中的 metadata：
```tsx
export const metadata: Metadata = {
  title: "嶼光 - 作品集",  // 改成你的網站標題
  description: "影片與攝影作品集",  // 改成你的描述
};
```

### 修改聯絡方式
編輯 `app/contact/page.tsx` 中的郵件、電話、社群媒體連結

## 🎯 最佳實踐

### 圖片最佳化
- 縮圖尺寸: 建議 600x400px （保持 16:9 比例）
- 全尺寸圖片: 建議 1200x800px 或更大
- 格式: 使用 WebP 或壓縮後的 JPG

### 影片最佳化
- 格式: MP4（H.264 編碼）
- 解析度: 1920x1080 或更高
- 比特率: 4-8 Mbps（平衡質量與檔案大小）
- 縮圖: 與圖片規格相同

### SEO 優化建議
1. 為每個作品寫有意義的 title 和 description
2. 定期更新作品內容
3. 新增 Open Graph 元標籤（可在 layout.tsx 中設定）
4. 確保所有圖片有適當的 alt 文字

## 📦 部署

### 部署到 Vercel（推薦）
```bash
npm install -g vercel
vercel
```

按照提示完成部署，自動連接至 Git 倉庫。

### 環境變數
目前無需額外環境變數。如需要郵件功能，請配合：
- Formspree
- SendGrid
- Mailgun

等服務並修改 `app/contact/page.tsx`

## 📱 響應式設計

網站已優化以下裝置：
- 桌面: 1920px+
- 平板: 768px - 1024px
- 手機: 320px - 767px

## ⚡ 效能最佳化

已套用：
- Next.js Image 最佳化
- Tailwind CSS 壓縮
- 懶加載（Lazy Loading）
- 動態分割（Code Splitting）

## 🐛 常見問題

### Q: 影片不播放？
A: 確保影片格式是 MP4，檔案路徑正確，且檔案存在於 `public/portfolio/videos/`

### Q: 圖片沒有顯示？
A: 檢查圖片路徑是否正確，建議使用絕對路徑 `/portfolio/images/...`

### Q: 如何修改顏色？
A: 編輯 `app/globals.css` 或在組件中修改 Tailwind classes（目前使用黑白配色）

### Q: 如何新增更多頁面？
A: 在 `app/` 目錄下創建新資料夾，新增 `page.tsx` 即可

## 📞 支援

如需技術支援，請查閱：
- [Next.js 文檔](https://nextjs.org/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [React 文檔](https://react.dev)

---

**祝你的作品集網站成功！** 🎉
