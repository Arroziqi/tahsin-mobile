# 📱 Tahsin App – Mobile

Aplikasi **Tahsin App Mobile** adalah klien resmi berbasis [Expo](https://expo.dev) yang mendukung Android dan iOS.  
Aplikasi ini digunakan oleh peserta dan guru untuk mengakses fitur-fitur pembelajaran *tahsin* secara praktis dari perangkat seluler.

---

## 🚀 Fitur Utama
- **Autentikasi**: Sign in, sign up, dan verifikasi akun.
- **Manajemen Kelas & Jadwal**: Melihat jadwal kelas tahsin yang sedang diikuti.
- **Pendaftaran & Perpanjangan**: Registrasi kelas baru atau perpanjangan tahsin.
- **Monitoring Progres**: Melihat perkembangan bacaan, nilai, dan catatan guru.
- **Pembayaran**: Akses informasi pembayaran dan status tagihan.
- **Profil Pengguna**: Update data pribadi dan foto profil.
- **Pengumuman**: Membaca berita atau informasi terbaru dari lembaga.

---

## 📁 Struktur Folder (Ringkas)

```

app
├── api/                # Endpoint API & autentikasi
├── auth/               # Sign in, sign up, verifikasi
├── (course-management) # Registrasi & perpanjangan
├── (tabs)              # Bottom tab: home, payment, profile, schedule
├── onboarding/         # Tampilan awal (splash / intro)
├── index.tsx           # Entry point
└── \_layout.tsx

assets
├── fonts/              # Font (Plus Jakarta Sans, Poppins, SpaceMono)
└── images/             # Icon, splash screen, dll

components
├── bottom-tabs/
├── button/
├── card/
├── indicator/
├── input/
├── label/
├── modal/
├── text/
├── top-bar/
└── lainnya…

````

---

## 🏁 Getting Started

> Pastikan kamu sudah menginstal [Node.js](https://nodejs.org), [Expo CLI](https://docs.expo.dev/get-started/installation/), dan emulator Android/iOS atau aplikasi **Expo Go**.

1. **Clone repository**
   ```bash
   git clone https://github.com/Arroziqi/tahsin-mobile.git
   cd tahsin-mobile
   ````

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan aplikasi**

   ```bash
   npx expo start
   ```

   * Scan QR code dengan **Expo Go** di ponsel.
   * Atau buka di emulator Android/iOS.

4. (Opsional) **Reset ke proyek kosong**

   ```bash
   npm run reset-project
   ```

---

## 🔗 Repositori Terkait

* [Tahsin App – Server API](https://github.com/Arroziqi/tahsin-app-server-monolith.git)
* [Tahsin App – Web Client](https://github.com/Arroziqi/tahsin-web.git)

---

## 🧱 Teknologi

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [React Navigation](https://reactnavigation.org/)
* [Axios](https://axios-http.com/) – komunikasi dengan API
* [TypeScript](https://www.typescriptlang.org/)

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi **MIT**.
Lihat file [LICENSE](LICENSE) untuk detail.
