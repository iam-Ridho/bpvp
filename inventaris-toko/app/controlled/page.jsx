"use client";

import { useState } from "react";

const KOSONG = { kode: "", nama: "", kategori: "", harga: "", stok: "" }

export default function FormBarang() {
    const [isian, setIsian] = useState(KOSONG);

    function ubah(e) {
        const { name, value } = e.target;
        setIsian((lama) => ({ ...lama, [name]: name === "kode" ? value.toUpperCase() : value }));
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <form className="grid gap-2" onSubmit={(e) => e.preventDefault()} > 
                <input name="kode" value={isian.kode} onChange={ubah} placeholder="Kode" className="rounded border px-2 py-1"/>
                <input name="nama" value={isian.nama} onChange={ubah} placeholder="Nama" className="rounded border px-2 py-1"/>
                <select name="kategori" value={isian.kategori} onChange={ubah} className="rounded border px-2 py-1" >
                    <option value="">Pilih Kategori</option>
                    <option>Alat Tulis</option>
                    <option>Makanan</option>
                    <option>Minuman</option>
                </select>
                <input name="harga" value={isian.harga} onChange={ubah} placeholder="Harga" className="rounedd border px-2 py-1" />
                <input name="stok" value={isian.stok} onChange={ubah} placeholder="Stok" className="rounedd border px-2 py-1" />
                <button type="button" className="rounded border px-2 py-1" onClick={() => setIsian(KOSONG)}>Kosongkan</button>
                <pre className="p-3 bg-slate-900 rounded text-slate-100 text-sm">{JSON.stringify(isian, null, 2)}</pre>
            </form>
        </div>
    )
}