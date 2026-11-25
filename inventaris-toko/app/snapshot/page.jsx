"use client";

import { useState } from "react";

const NAMA_SKALA = [
    "satuan", "ribu", "juta", "miliar", "triliun", "kuadriliun",
    "kuintiliun", "sekstiliun", "septiliun", "oktiliun", "noniliun",
    "desiliun", "undesiliun", "duodesiliun", "tredesiliun",
    "kuattuordesiliun", "kuindesiliun", "seksdesiliun",
    "septemdesiliun", "oktodesiliun", "novemdesiliun", "vigintiliun",
    "unvigintiliun", "duovigintiliun", "trevigintiliun",
    "kuattuorvigintiliun", "kuinvigintiliun", "sesvigintiliun",
    "septemvigintiliun", "oktovigintiliun", "novemvigintiliun",
    "trigintiliun", "centilion",

];

function sebutanSkala(nilai) {
    if (nilai === 0n) return "satuan";

    const indeks = Math.floor((nilai.toString().length - 1) / 3);
    const pangkat = indeks * 3;
    return `${NAMA_SKALA[indeks] ?? `10 pangkat ${pangkat}`} (10^${pangkat})`;
}

export default function Snapshot() {
    const [n, setN] = useState(0n);

    function salah() {
        setN(n + 1n);
        setN(n + 1n);
        setN(n + 1n);
        console.log("Didalam handler, n masih: ", n);
    }

    function benar() {
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x + 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n);
        setN((x) => x * 3n);
    }

    return (
        <div className="space-y-4">
            <p className="text-5xl font-bold tabular-nums">{n.toString()}</p>
            <p className="wrap-break-word text-slate-700">Skala: {sebutanSkala(n)}</p>
            <div className="flex gap-2">
                <button onClick={salah} className="rounded-lg bg-red-600 px-4 py-2 text-white">+1 </button>
                <button onClick={benar} className="rounded-lg bg-emerald-600 px-4 py-2 text-white">+5</button>
                <button onClick={() => setN(0n)} className="rounded-lg px-4 py-2 bg-gray-200">Reset</button>
            </div>
        </div>
    )
}