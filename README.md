# Sertifikat sahifasi

Havolalar:
- `https://<domen>/`
- `https://<domen>/Softs/Certificate?B210_APPL_NUMBER=20226173&TRACKING_CODE=c8d9450ad0f783748512ced1c72c5da3&Certificate=True`
- `https://<domen>/Softs/Certificate=True`

Barcha fayllar asosiy papkada joylashgan:
- `index.html`, `style.css`, `script.js` — sahifa
- `rasmm.png` — sertifikat rasmi (almashtirish uchun shu nom bilan yangi rasm qo'ying)
- `vercel.json` (Vercel) va `_redirects` (Netlify) — `/Softs/Certificate` va `/Softs/Certificate=True` havolalarini `index.html` ga yo'naltiradi

Sahifa rasmni chap yuqori burchakda katta o'lchamda ko'rsatadi, rasm ustidagi
"Yuklab olish" tugmasi rasmni yuklab beradi.
