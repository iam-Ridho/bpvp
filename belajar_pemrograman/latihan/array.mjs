import { daftarBarang } from '../lib/barang.js';

// Nama semua barang
// const nama = daftarBarang.map((b) => b.nama)
// console.log(nama);

// // Barang yang stoknya habis
// const habis = daftarBarang.filter((b) => b.stok === 0)
// console.log(habis.map((b) => b.nama));

// // Barang dengan id 4
// console.log(daftarBarang.find((b) => b.id === 4));

// // apakah ada Barang dengan harga diatas dari yang ditentukan
// console.log(daftarBarang.some((b) => b.harga < 1000));

// // Total nilai persediaan barang
// const nilaiPersediaan = daftarBarang.reduce((t, b) => t + b.harga * b.stok, 0)
// console.log(nilaiPersediaan);

// // Tiga barang termurah, tanpa mengubah daftar barang
// const termurah = [...daftarBarang].sort((a, b) => a.harga - b.harga).slice(0, 3)
// console.log(termurah.map((b) => `${b.nama} - ${b.harga}`));

// // Jumlah barang per kategori
// const perKategori = daftarBarang.reduce((hasil, b) => {
//     hasil[b.kategori] = (hasil[b.kategori] ?? 0) + 1
//     return hasil
// }, {})
// console.log(perKategori);

//mencari harga paling mahal dari semua kategori
const termahal = [...daftarBarang].sort((a, b) => b.harga - a.harga)
console.log(`${termahal[0].nama} - ${termahal[0].harga}`);

//mencari barang yang paling murah di kategori alat tulis
const KategoriAlatTulis = daftarBarang.filter((b) => b.kategori == "Alat Tulis")

const termurahAlatTulis = KategoriAlatTulis.sort((a, b) => a.harga - b.harga)
console.log(termurahAlatTulis.map((b) => `${b.nama} - ${b.kategori} - ${b.harga}`));

//mencari jumlah barang per kategori yang harganya diatas 3500
const perKategori = daftarBarang
.filter((b) => b.harga >= 3500)
.reduce((hasil, b) => {
    hasil[b.kategori] = (hasil[b.kategori] ?? 0) + 1
    return hasil
}, {})
console.log(perKategori);