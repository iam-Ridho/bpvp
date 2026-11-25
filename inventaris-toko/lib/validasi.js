/**
* @param
{{kode:string,nama:string,kategori:string,harga:string|number,stok:string|num
ber,satuan:string}} data
* @param {Array} daftar daftar barang yang sudah ada (untuk cek kode ganda)
* @param {number|null} idIsEdit id barang yang sedang diedit (boleh
memakai kodenya sendiri)
*/
export function validasiBarang(data, daftar = [], idIsEdit = null) {
    const error = {};
    const kode = String(data.kode ?? "").trim()
    const nama = String(data.nama ?? "").trim()

    if (!kode) error.kode = "Kode wajib diisi";
    else if (!/^[A-Z]{3}-\d{3}$/.test(kode)) error.kode = "Format kode: 3 huruf besar, tanda hubung, 3 angka. Contoh ATK-004";
    else if (daftar.some((b) => b.kode === kode && b.id !== idIsEdit)) error.kode = "Kode sudah dipakai barang lain";

    if (!nama) error.nama = "Nama wajib diisi";
    else if (nama.length < 3) error.nama= "Nama minimal 3 karakter";

    if (!data.kategori) error.kategori = "Pilih kategori";

    const harga = Number(data.harga);
    if (data.harga === "" || data.harga === null || data.harga === undefined) error.harga = "Harga wajib diisi";
    else if (!Number.isInteger(harga) || harga <= 0) error.harga = "Harga harus bilangan bulat lebih dari 0";

    const stok = Number(data.stok);
    if (data.stok === "" || data.stok === null || data.stok === undefined) error.stok = "Stok wajib diisi";
    else if (!Number.isInteger(stok) || stok < 0) error.stok = "Stok harus bilangan bulat 0 atau lebih";

    if (!String(data.satuan ?? "").trim()) error.satuan = "Satuan wajib diisi";

    return error;
}

export const isError = (error) => Object.keys(error).length > 0;