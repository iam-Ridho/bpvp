import { formatRupiah, formatTanggal, singkat } from '@/lib/format';
import barang from '@/data/barang.json';

export default function HalamanFormat() {
    return (
        <main className='mx-auto max-w-xl space-y-2 p-6'>
            <h1 className='text-2xl font-bold'>Uji lib/format.js</h1>
            <p>{formatRupiah(1000000)}</p>
            <p>{formatTanggal("2026-11-21")}</p>
            <p>{singkat("Buku Tulis Dunia 90 lembar Isis 11", 15)}</p>
            <ul className='list-disc pl-5'>
                {barang.map((b) => (
                    <li key={b.id}>{b.nama}: {formatRupiah(b.harga)}</li>
                ))}
            </ul>
        </main>
    )
}