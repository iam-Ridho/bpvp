"use client";

import { hapusBarang, ringkasanStok, tambahBarang, ubahBarang } from "@/lib/barang";
import { useState } from "react";
import FormBarang from "./FormBarang";
import TabelData from "./TabelData";
import { Pencil, Trash2, Boxes, Wallet, TriangleAlert, PackageX } from "lucide-react";
import KartuStatistik from "./KartuStatistik";
import { formatRupiah } from "@/lib/format";
import LabelStok from "./LabelStok";
import DialogKonfirmasi from "./DialogKonfirmasi";

export default function ManajemenBarang({ barangAwal }) {

    const [daftar, setDaftar] = useState(barangAwal);
    const [diedit, setDiedit] = useState(null);
    const [akanDihapus, setAkanDihapus] = useState(null);
    const [pesan, setPesan] = useState("");
    const ringkas = ringkasanStok(daftar);

    function simpan(isian) {
        if (diedit) {
            setDaftar((lama) => ubahBarang(lama, diedit.id, isian));
            setPesan(`${isian.nama} berhasil diperbarui`);
            setDiedit(null);
        } else {
            setDaftar((lama) => tambahBarang(lama, isian));
            setPesan(`${isian.nama} berhasil ditambahkan`);
        }
    }

    function konfirmasiHapus() {
        setDaftar((lama) => hapusBarang(lama, akanDihapus.id));
        setPesan(`${akanDihapus.nama} dihapus`);
        if (diedit?.id === akanDihapus.id) setDiedit(null);
        setAkanDihapus(null);
    }

    const kolom = [
      { kunci: "kode", judul: "Kode" },
      { kunci: "nama", judul: "Nama Barang" },
      { kunci: "kategori", judul: "Kategori" },
      { kunci: "harga", judul: "Harga", rataKanan: true, tampil: (b) => formatRupiah(b.harga) },
      { kunci: "stok", judul: "Stok", tampil: (b) => <LabelStok stok={b.stok} /> },
      {
        kunci: "aksi",
        judul: "Aksi",
        tampil: (b) => (
            <div className="flex gap-1">
                <button onClick={() => setDiedit(b)} className="rounded p-2 text-teal-700 hover:bg-teal-50" aria-label={`Edit ${b.nama}`}>
                    <Pencil size={16} aria-hidden="true" />
                </button>
                <button onClick={() => setAkanDihapus(b)} className="rounded p-2 text-red-600 hover:bg-red-50" aria-label={`Hapus ${b.nama}`}>
                    <Trash2 size={16} aria-hidden="true" />
                </button>
            </div>
        )
      }
    ]

    return (
        <div className="space-y-6">
            
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <KartuStatistik label="Jenis Barang" nilai={ringkas.jumlahJenis} icon={Boxes}/>
                <KartuStatistik label="Nilai Persediaan" nilai={formatRupiah(ringkas.nilaiPersediaan)} icon={Wallet}/>
                <KartuStatistik label="Stok Menipis" nilai={ringkas.menipis} icon={TriangleAlert} peringatan={ringkas.menipis > 0}/>
                <KartuStatistik label="Stok Habis" nilai={ringkas.habis} icon={PackageX} bahaya={ringkas.habis > 0}/>
            </div>

            <FormBarang 
                key={diedit?.id ?? "baru"}
                nilaiAwal={diedit}
                daftar={daftar}
                onSave={simpan}
                onCancel={() => setDiedit(null)}
            />

            {pesan && (
                <p role="status" className="rounded-lg bg-emerald-50 px-4 py-2 text-emerald-800">{pesan}</p>
            )}

            <TabelData kolom={kolom} data={daftar} pesanKosong="Belum ada barang. Tambahkan lewat form" />

            {akanDihapus && (
                <DialogKonfirmasi 
                    judul="Hapus Barang?"
                    pesan={`${akanDihapus.nama} (${akanDihapus.kode}) akan dihapus dari daftar`}
                    onYes={konfirmasiHapus}
                    onCancel={() => setAkanDihapus(null)}
                />
            )}
        </div>
    )
}