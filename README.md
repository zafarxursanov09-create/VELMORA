# VELMORA — IELTS va CEFR platformasi

## 1. Kompyuteringizda ishga tushirish (localhost)
`localhost` — bu "sizning kompyuteringizning o‘zi". `npm run dev` ishlayotgan paytdagina
`http://localhost:3000` ochiladi va uni faqat siz ko‘rasiz.

```bash
npm install        # bir marta
npm run dev        # terminalni YOPMANG
```
Brauzerda `http://localhost:3000` ni oching. "refused to connect" chiqsa — server ishlamayapti,
`npm run dev` ni qayta yozing.

## 2. Hammaga ochiq havola (Firebase Hosting)
```bash
npm i -g firebase-tools
firebase login
firebase deploy          # sayt + Firestore qoidalari
```
Havola: `https://velmora-6449d.web.app`

## 3. Firebase sozlamalari (bir martalik)
1. `.env.local` da NEXT_PUBLIC_FIREBASE_* qiymatlari to‘ldirilgan (`.env.example` ga qarang).
2. Console → Authentication → Sign-in method: **Email/Password** va **Google** ni yoqing.
3. Authentication → Settings → Authorized domains: `localhost` va `velmora-6449d.web.app` bo‘lsin.
4. Firestore Database yarating, so‘ng `firebase deploy --only firestore` (qoidalar `firestore.rules`).

## 4. Haqiqiy ma’lumot qo‘shish (soxta ma’lumot yo‘q)
Bosh sahifada ustozlar, Jonli darslar sahifasida darslar **faqat Firestore’dan** o‘qiladi.
Bo‘sh bo‘lsa chiroyli "tez orada" holati chiqadi.
- `teachers` kolleksiyasi: `name`, `ielts_band` (9), `experience_years`, `bio`, `photo_url`, `is_published: true`
- Jonli darslar: ustoz hisobi orqali `/classes` sahifasidan qo‘shiladi.

## 5. Yangiliklar
- Ko‘p rangli 3D shisha dizayn, jonli IELTS shari va CEFR ustunlari (`app/glass.css`)
- Fon tanlagich (pastki chapda "Fon"): Aurora, Quyosh botishi, Okean, O‘rmon, Tun — brauzerda saqlanadi
- Yangi `/profile` sahifasi (Firestore `profiles` hujjatidan o‘qiydi)
- Soxta raqamlar, ustozlar va darslar olib tashlandi
