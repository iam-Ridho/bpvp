export default function KartuStatistik({ label, nilai, icon: Icon, peringatan = false, bahaya = false }) {
    return (
        <div className={`flex items-center gap-3 rounded-xl border bg-white p-4 ${bahaya ? "text-red-700" : peringatan ? "border-amber-400" : "border-slate-200"}`}>
            {Icon && <Icon className={bahaya ? "text-red-700" : peringatan ? "text-amber-600" : "text-teal-700"} aria-hidden="true" />}
            <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="text-xl font-bold">{nilai}</p>
            </div>
        </div>
    )
}