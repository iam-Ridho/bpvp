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
import ManajemenBarang from "@/components/ManajemenBarang";

const NAMA_TOKO = "Toko Makmur Indah"

export default function Home() {
  const ringkas = ringkasanStok(daftarBarang)
  const perKategori = kelompokkanPerKategori(daftarBarang)

  return (
    <>
      <Navbar namaToko={NAMA_TOKO} />
      <main className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="mb-6 text-2xl font-bold">Manajemen Barang</h1>
        <ManajemenBarang barangAwal={daftarBarang}/>
      </main>
      <Footer namaToko={NAMA_TOKO}/>
    </>
  );
}
