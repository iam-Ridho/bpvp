export default function Footer({ namaToko, tahun = 2026 }) {
    return (
        <footer id="tentang" className="mt-12 border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-600 text-center">
                &copy; {tahun} {namaToko}. Proyek Pelatihan Junior Programmer
            </div>
        </footer>
    )
}