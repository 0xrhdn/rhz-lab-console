# RHZ LAB — Arah Desain

## Pendekatan 1 — Instrument Console
**Very Brief Intro:** Antarmuka seperti workstation laboratorium keamanan: graphite, panel berlapis, tombol terasa fisik, dan indikator status yang presisi. Fokusnya adalah membuat data padat tetap terbaca dan terasa profesional.

**Probability:** 0.07

## Pendekatan 2 — Signal Atlas
**Very Brief Intro:** Eksplorasi keamanan siber melalui peta sinyal, jaringan node, dan lapisan informasi editorial. Lebih terang, lebih eksperimental, dan terasa seperti atlas investigasi digital.

**Probability:** 0.04

## Pendekatan 3 — Field Manual
**Very Brief Intro:** Sistem belajar yang terinspirasi manual teknis dan buku catatan analis: kertas gelap, anotasi, tab, dan ritme modul. Humanis, terstruktur, dan cocok untuk perjalanan belajar bertahap.

**Probability:** 0.06

## Pendekatan Terpilih — Instrument Console

### Design Movement
Modern skeuomorphism bertemu estetika industrial control-room: bukan nostalgia antarmuka lama, tetapi material, kedalaman, dan affordance fisik yang membantu pengguna memahami hierarki sistem.

### Core Principles
1. **Read the room:** setiap layar harus langsung menjawab status, progres, dan tindakan berikutnya.
2. **Depth with restraint:** gunakan bevel, inner shadow, dan lapisan metalik untuk affordance; hindari ornamen yang tidak memberi makna.
3. **Signal over spectacle:** teal untuk aksi/aktif, amber untuk perhatian, merah untuk error; aksen adalah sinyal operasional, bukan dekorasi.
4. **Dense but calm:** informasi boleh padat, tetapi selalu dibagi menjadi kelompok visual yang dapat dipindai.

### Color Philosophy
Fondasi near-black dan graphite memberi rasa ruang kerja yang fokus. Signature color **oxidized teal #5AD6C5** menandai sistem hidup dan tindakan utama. Amber kusam **#D8A35D** menandai perhatian; merah bata **#E06B5D** menandai error; hijau pudar **#83C98A** menandai sukses. Warna semantic dibatasi pada indikator dan keputusan agar tidak berubah menjadi rainbow UI.

### Layout Paradigm
Shell tiga zona: sidebar seperti konsol kontrol, top rail seperti strip status instrumen, dan workspace asimetris dengan kolom utama untuk keputusan serta rail kanan untuk telemetry. Tidak memakai hero terpusat; fokus dimulai dari kiri dan bergerak melalui jalur informasi yang jelas.

### Signature Elements
- Garis etched dan tick marks tipis seperti panel alat ukur.
- Kartu raised/recessed dengan sudut kecil dan highlight bevel.
- Status capsule berbentuk instrument readout dengan dot, label teknis, dan angka monospaced.

### Interaction Philosophy
Kontrol utama harus terasa dapat ditekan: active state mengurangi elevasi, hover menyalakan edge highlight, dan navigasi keyboard selalu memiliki indikator fokus. Semua placeholder creator/admin memberi toast informatif, tidak berpura-pura sudah terhubung backend.

### Animation
Gunakan transisi 140–220ms dengan easing snappy. Panel muncul dari titik pemicunya, bukan dari scale 0. Stagger ringan pada statistik dan list. Command palette instan saat dipanggil dengan keyboard. Animasi non-esensial dimatikan untuk `prefers-reduced-motion`.

### Typography System
UI memakai **IBM Plex Sans** untuk keterbacaan dan karakter teknis; metadata, terminal, alamat IP, port, flags, dan angka memakai **IBM Plex Mono**. Heading besar memakai weight 600 dengan tracking rapat; label section uppercase 11px dengan tracking 0.16em; angka dashboard memakai mono 24–32px untuk rasa instrumen.

### Brand Essence
Command center belajar keamanan siber untuk builder, analyst, dan curious operators yang ingin berkembang lewat sistem yang dapat dikonfigurasi—bukan katalog tantangan yang kaku.

**Personality:** precise, tactile, quietly intense.

### Brand Voice
Headline singkat, operasional, dan percaya diri. CTA terdengar seperti tindakan di console, bukan slogan pemasaran. Microcopy menjelaskan status dan konsekuensi.

Contoh:
- **Resume the signal.**
- **Your next safe breach starts here.**

### Wordmark & Logo
Mark geometris berbentuk jalur sinyal angular yang membuka aperture heksagonal dengan indikator teal di pusatnya. Wordmark RHZ LAB menggunakan IBM Plex Sans SemiBold dengan modifikasi potongan kecil pada Z sebagai motif jalur sirkuit.

### Signature Brand Color
**Oxidized Teal — #5AD6C5**

## Style Decisions
- Semua halaman baru harus mempertahankan material graphite, etched separators, dan kombinasi IBM Plex Sans + IBM Plex Mono.
- Hindari layout SaaS generik, purple gradients, glassmorphism berlebihan, dan neon cyberpunk.
- Konten challenge tidak dibuat; UI hanya menampilkan framework/placeholder creator-ready.
