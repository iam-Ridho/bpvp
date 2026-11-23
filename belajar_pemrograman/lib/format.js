export const formatRupiah = (n) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(n)

export const formatTanggal = (tgl) =>
    new Date(tgl).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

export const singkat = (teks, maks = 20) =>
    teks.length <= maks ? teks : `${teks.slice(0, maks)}...`