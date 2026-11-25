"use client";

import { useState } from "react";

export default function DemoMutasi() {
    const [daftar, setDaftar] = useState(["Buku", "Pencil"])
    const [lain, setLain] = useState(0)

    return (
        <div className="space-y-3">
            <ul className="list-disc pl-6">{daftar.map((x, i) => <li key={i}>{x}</li>)}</ul>
            <div className="flex flex-wrap gap-2">
                <button onClick={() => { daftar.push("Spidol"); setDaftar(daftar); console.log("isi state: ", daftar); }} className="rounded bg-red-600 px-3 py-2 text-white">
                    push lalu setDaftar(daftar)
                </button>
                <button onClick={() => { setDaftar([...daftar, "Spidol"]) }} className="rounded bg-teal-600 px-3 py-2 text-white">
                    setDaftar([...daftar, "Spidol"])
                </button>
                <button onClick={() => setLain(lain + 1)} className="rounded border px-3 py-2">
                    Ubah State Lain ({lain})
                </button>
            </div>
        </div>
    )

}