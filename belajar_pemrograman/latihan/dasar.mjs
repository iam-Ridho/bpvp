const nama = "Arya"
let nilai = 50
nilai += 25

const status = nilai >= 75 ? "Lulus" : "Remedial"
console.log(`${nama}: ${nilai} (${status})`)

function hurufMutu(n) {
    if (n >= 85) return "A"
    if (n >= 75) return "B"
    if (n >= 65) return "C"
    if (n >= 50) return "D"
    return "E"
}

for (const n of [90, 77, 64, 49]) {
    console.log(n, hurufMutu(n))
}

const stok = 0
console.log(stok || "Kosong", stok ?? "kosong" )