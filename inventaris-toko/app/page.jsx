import KartuBarang from "@/components/KartuBarang";
// import Tombol from "@/components/Tombol";
import { daftarBarang, KATEGORI } from "@/lib/data-barang";
import { Boxes, PackageX, Plus, Trash2, TriangleAlert, Wallet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TabelData from "@/components/TabelData";
import { formatRupiah } from "@/lib/format";
import LabelStok from "@/components/LabelStok";
import KartuStatistik from "@/components/KartuStatistik";
import { kelompokkanPerKategori, ringkasanStok } from "@/lib/barang";
import Bagian from "@/components/Bagian";

const NAMA_TOKO = "Toko Makmur Indah"

const KOLOM = [
  { kunci: "kode", judul: "Kode" },
  { kunci: "nama", judul: "Nama Barang" },
  { kunci: "kategori", judul: "Kategori" },
  { kunci: "harga", judul: "Harga", rataKanan: true, tampil: (b) => formatRupiah(b.harga) },
  { kunci: "stok", judul: "Stok", tampil: (b) => <LabelStok stok={b.stok} /> },
]

export default function Home() {
  const ringkas = ringkasanStok(daftarBarang)
  const perKategori = kelompokkanPerKategori(daftarBarang)

  return (
    <>
      <Navbar namaToko={NAMA_TOKO} />
      <main className="mx-auto grid max-w-6xl px-6 py-8">
        <h1 className="text-2xl font-bold">Katalog Inventaris</h1>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <KartuStatistik label="Jenis Barang" nilai={ringkas.jumlahJenis} icon={Boxes}/>
          <KartuStatistik label="Nilai Persediaan" nilai={formatRupiah(ringkas.nilaiPersediaan)} icon={Wallet}/>
          <KartuStatistik label="Stok Menipis" nilai={ringkas.menipis} icon={TriangleAlert} peringatan={ringkas.menipis > 0}/>
          <KartuStatistik label="Stok Habis" nilai={ringkas.habis} icon={PackageX} bahaya={ringkas.habis > 0}/>
        </div>

        <Bagian id="katalog" judul="Katalog per kategori" keterangan={`${KATEGORI.length} kategori, ${daftarBarang.length} barang`}>
          {KATEGORI.map((kat) => (
            <div key={kat} className="mb-8">

              <h3 className="mb-3 font-semibold text-slate-700">
                {kat} <span className="text-sm font-normal text-slate-500">({perKategori[kat]?.length ?? 0})</span>
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(perKategori[kat] ?? []).map((b) => (
                  <KartuBarang key={b.id} barang={b}/>
                ))}
              </div>

            </div>
          ))}
        </Bagian>
        
        <Bagian id="tabel" judul="Tabel Barang">
          <TabelData kolom={KOLOM} data={daftarBarang} />
        </Bagian>

      </main>
      <Footer namaToko={NAMA_TOKO}/>
    </>
  );
}
