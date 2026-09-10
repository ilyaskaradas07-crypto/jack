# 🌴 TRIPORA ALANYA — Web Platform

> **Experience More. Discover Alanya.**
> Premium travel, excursions, private yacht charters, VIP airport transfers (Gazipaşa €50 / Antalya €80), and free shopping experiences in Alanya, Antalya, Turkey.

---

## 🚀 Hızlı Başlangıç (Quick Start)

### Gereksinimler (Requirements)
- **Node.js** 18+ (Önerilen: v20 LTS)
- **npm**, **pnpm** veya **bun**

### 1. Kurulum (Install Dependencies)
```bash
npm install
```

### 2. Ortam Değişkenleri (Environment Setup)
`.env.example` dosyasını `.env` olarak kopyalayın ve gerekli bilgileri doldurun:
```bash
cp .env.example .env
```

| Değişken | Açıklama |
|---|---|
| `GEMINI_API_KEY` | Gemini AI destekli seyahat asistanı için API anahtarı (Google AI Studio) |
| `TELEGRAM_BOT_TOKEN` | Ziyaretçi bildirimleri ve rezervasyon uyarıları için Telegram Bot Token |
| `TELEGRAM_CHAT_ID` | Telegram bildirimlerinin iletileceği Chat / Kanal ID |
| `RESERVATION_TARGET_EMAIL` | Yeni rezervasyonların gönderileceği e-posta (Varsayılan: `ilyaskaradas07@hotmail.com`) |
| `SMTP_*` | Otomatik e-posta bildirimleri için SMTP sunucu bilgileri (Opsiyonel) |

### 3. Geliştirme Sunucusu (Development Server)
```bash
npm run dev
```
Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

### 4. Üretim Derlemesi (Production Build & Run)
```bash
npm run build
npm start
```

---

## 🐙 GitHub ile Senkronizasyon (GitHub Sync Guide)

Bu projeyi GitHub hesabınıza bağlamak ve senkronize etmek için 2 yöntem kullanabilirsiniz:

### Yöntem 1: Doğrudan Git Komut Satırı ile (Git CLI)

1. GitHub'da yeni bir repository (depo) oluşturun (örneğin `tripora-alanya`).
2. Terminalinizde şu komutları çalıştırın:

```bash
# Git deposunu başlatın (eğer henüz başlatılmadıysa)
git init

# Tüm dosyaları hazırlık alanına ekleyin
git add .

# İlk commit'i oluşturun
git commit -m "feat: Initial commit for Tripora Alanya web platform"

# GitHub reponuzu origin olarak ekleyin (KULLANICI_ADI ve REPO_ADI kısmını güncelleyin)
git remote add origin https://github.com/KULLANICI_ADI/tripora-alanya.git

# Ana dalı main olarak belirleyin ve yükleyin
git branch -M main
git push -u origin main
```

Sonraki güncellemeleri göndermek için:
```bash
git add .
git commit -m "update: açıklama"
git push
```

### Yöntem 2: Google AI Studio Arayüzünden 1 Tıkla Aktarım (1-Click Export)
1. Ekranın sağ üst köşesindeki **Ayarlar (Settings / Menu)** simgesine tıklayın.
2. **Export to GitHub** seçeneğini seçin.
3. GitHub hesabınızı yetkilendirip hedef repository'yi seçerek projeyi doğrudan GitHub'a aktarın.

---

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Motion (Animations), Lucide React (Icons)
- **Backend:** Node.js Express Server, tsx, esbuild
- **AI & Bildirim:** Google Gemini AI API, Telegram Bot API, Nodemailer
- **Derleyici & Araçlar:** Vite 6, TypeScript Compiler

---

## 🚢 Dağıtım (Deployment)

### Vercel
Proje kök dizininde hazır `vercel.json` bulunmaktadır. GitHub reponuzu Vercel'e bağladığınızda otomatik olarak algılanır ve yayına alınır.

### Docker / Cloud Run / VPS
```bash
# Build
npm run build

# Start Node.js Production Server (Port 3000)
NODE_ENV=production node dist/server.cjs
```

---

## 📞 İletişim & Destek

- **Yetkili:** İlyas Karadaş
- **E-posta:** ilyaskaradas07@hotmail.com
- **WhatsApp Destek:** +90 505 142 21 16
- **Lokasyon:** Alanya, Antalya, Türkiye
