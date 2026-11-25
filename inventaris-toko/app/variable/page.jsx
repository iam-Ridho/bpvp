"use client";

import { useState } from "react";

function PenghitungSalah() {
    let jumlah = 0;
    return (
        <button className="rounded-lg bg-red-600 px-4 py-2 text-white"
        onClick={() => {jumlah++; console.log("Variabel jumlah :", jumlah);} }>
            Variabel biasa: {jumlah}
        </button>
    )
}

function Penghitung() {
    const [jumlah, setJumlah] = useState(0);
    return (
        <button className="rounded-lg bg-emerald-500 px-4 py-2 text-white" 
        onClick={() => {setJumlah(jumlah + 1); console.log("Variabel jumlah:", jumlah);}}>
            Variabel react: {jumlah}
        </button>
    )
}

export default function HalamanVariabel() {
    return (
        <div className="flex flex-col  items-start gap-4">
            <PenghitungSalah />
            <Penghitung />
            <Penghitung />
        </div>
    )
}