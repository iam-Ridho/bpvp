"use client";

import { KATEGORI } from "@/lib/data-barang";
import { validasiBarang, isError } from "@/lib/validasi";
import { useState } from "react";
import Tombol from "./Tombol";

const KOSONG = { kode: "", nama: "", kategori: "", harga: "", stok: "", satuan: "pcs" }

function Kolom({ id, label, error, children }) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-sm font-medium">{label}</label>
            {children}
            {error && <p id={`${id}-error`} className="text-sm text-red-700">{error}</p> }
        </div>
    )
}

export default function FormBarang({ nilaiAwal, daftar, onSave, onCancel }) {

    const [isian, setIsian] = useState(nilaiAwal ? {...nilaiAwal, harga: String(nilaiAwal.harga), stok: String(nilaiAwal.stok)} : KOSONG);
    const [error, setError] = useState({});
    const modeEdit = Boolean(nilaiAwal);

    function ubah(e) {
        const { name, value } = e.target;
        setIsian((lama) => ({...lama, [name]: name === "kode" ? value.toUpperCase() : value}));
        if (error[name]) setError((lama) => ({...lama, [name]: undefined}));
    }

    function kirim(e) {
        e.preventDefault();
        const hasil = validasiBarang(isian, daftar, nilaiAwal?.id ?? null)
        setError(hasil);
        if (isError(hasil)) return;
        onSave(isian);
        if (!modeEdit) setIsian(KOSONG);
    }

    const classInput = (nama) => `rounded-lg border px-3 py-2 ${error[nama] ? "border-red-500" : "border-slate-300"}`
    const aria = (nama) => ({ "aria-invalid": Boolean(error[nama]), "aria-describedby": error[nama] ? `${nama}-error` : undefined});

    return (
        <form onSubmit={kirim} noValidate className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-2">
            <h2 className="text-lg font-bold sm:col-span-2">{modeEdit ? `Edit ${nilaiAwal.nama}` : "Tambah Barang"}</h2>

            <Kolom id="kode" label="Kode" error={error.kode}>
                <input id="kode" name="kode" value={isian.kode} onChange={ubah} placeholder="ATK-004" className={classInput("kode")} {...aria("kode")} />
            </Kolom>
            <Kolom id="nama" label="Nama barang" error={error.nama}>
                <input id="nama" name="nama" value={isian.nama} onChange={ubah} className={classInput("nama")} {...aria("nama")}/>
            </Kolom>
            <Kolom id="kategori" label="Kategori" error={error.kategori}>
                <select name="kategori" id="kategori" value={isian.kategori} onChange={ubah} className={classInput("kategori")} {...aria("kategori")}>
                    <option value="">Pilih kategori</option>
                    {KATEGORI.map((k) => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
            </Kolom>
            <Kolom id="satuan" label="Satuan" error={error.satuan}>
                <input id="satuan" name="satuan" value={isian.satuan} onChange={ubah} className={classInput("satuan")} {...aria("satuan")}/>
            </Kolom>
            <Kolom id="harga" label="Harga (Rp)" error={error.harga}>
                <input type="number" inputMode="numeric" id="harga" name="harga" value={isian.harga} onChange={ubah} className={classInput("harga")} {...aria("harga")}/>
            </Kolom>
            <Kolom id="stok" label="Stok" error={error.stok}>
                <input type="number" inputMode="numeric" id="stok" name="stok" value={isian.stok} onChange={ubah} className={classInput("stok")} {...aria("stok")}/>
            </Kolom>

            <div className="flex gap-2 sm:col-span-2">
                <Tombol type="submit">{modeEdit ? "Simpan Perubahan" : "Tambah Barang"}</Tombol>
                {modeEdit && <Tombol type="button" varian="garis" onClick={onCancel}>Batal</Tombol>}
            </div>
        </form>
    )
}