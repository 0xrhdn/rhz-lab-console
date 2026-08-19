# RHZ LAB

RHZ LAB adalah command center pembelajaran cybersecurity dan CTF dengan UI dark skeuomorphic bergaya instrument console. Versi ini adalah **local-first application**: dashboard, registry challenge, learning paths, lab lifecycle, notes, terminal journal, leaderboard, settings, dan Creator Studio dapat dipakai tanpa database eksternal.

## Menjalankan di komputer sendiri

Persyaratan minimum adalah Node.js 20 atau lebih baru dan pnpm 10 atau lebih baru. Setelah repository di-clone, jalankan perintah berikut dari root project:

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`. Untuk menguji build produksi secara lokal:

```bash
pnpm check
pnpm build
pnpm start
```

Aplikasi menyimpan draft challenge, progress path, notes, dan identitas operator di **localStorage** browser. Tombol reset tersedia di halaman Settings untuk menghapus data lokal tersebut.

## Route yang tersedia

| Route | Fungsi |
| --- | --- |
| `/` | Dashboard operator dan telemetry pribadi |
| `/challenges` | Registry challenge dengan pencarian, create draft, dan delete |
| `/paths` | Learning path dengan progress module interaktif |
| `/labs` | Lifecycle lab: start, stop, extend, timer, dan metadata target |
| `/notes` | Notebook private dengan create, edit, dan delete |
| `/terminal` | Terminal journal lokal dengan `help`, `status`, `whoami`, `notes`, dan `clear` |
| `/leaderboard` | Leaderboard progress lokal |
| `/creator` | Creator Studio untuk challenges, paths, labs, dan scoring rules |
| `/settings` | Operator identity, storage status, dan reset workspace |

## Arsitektur saat ini

Frontend menggunakan React, TypeScript, Vite, Wouter, Tailwind CSS, Lucide icons, dan komponen UI lokal. Data demo tidak merepresentasikan customer reviews, ratings, atau testimonials; seluruh data operator/challenge adalah seed framework lokal yang dapat dihapus atau diganti.

Versi ini sengaja tidak menjalankan shell command di mesin target dan tidak membuat target lab berbahaya. `Lab control` adalah lifecycle adapter yang siap dihubungkan ke Docker, VM, atau service isolated runtime pada tahap backend berikutnya. Flag production wajib divalidasi server-side dan answer key tidak boleh diekspos ke frontend.

## Jalur menuju production

Untuk penggunaan multi-user, tambahkan backend dengan database, autentikasi, server-side flag validation, object storage untuk attachment, job scheduler untuk lab expiration, dan isolated runtime adapter. UI dan route contract sudah dipisahkan agar Creator Studio dapat dipindahkan dari localStorage ke API tanpa mengubah vocabulary produk.
