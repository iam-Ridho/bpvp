const kelasLabel = "block text-sm font-semibold text-slate-700";
const kelasInput = "w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200"

export default function HalamanDaftar() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10">
            <form className="mx-auto max-w-2xl space-y-5 rounded-2xl bg-white p-8 shadow-md">

                <h1 className="text-2xl font-bold text-slate-900">Formulir Pendaftaran</h1>

                <div className="space-y-1">
                    <label htmlFor="nama" className={kelasLabel}>Nama Lengkap</label> <br />
                    <input type="text" id="nama" name="nama" placeholder="contoh: Arya Sifa" required className={kelasInput} />
                </div>

                <div className="space-y-1">
                    <label htmlFor="email" className={kelasLabel}>Email</label> <br />
                    <input type="email" id="email" name="email" className={kelasInput} required />
                </div>

                <div className="space-y-1">
                    <label htmlFor="tanggal_lahir" className={kelasLabel}>Tanggal Lahir</label> <br />
                    <input type="date" id="tanggal_lahir" name="tanggal_lahir" className={kelasInput} />
                </div>

                <div>
                    <label htmlFor="program" className={kelasLabel}>Program</label> <br />
                    <select name="program" id="program" required className={kelasInput}>
                        <option value="">--Pilih--</option>
                        <option value="jp" selected>Junior Programmer</option>
                        <option value="sp">Senior Programmer</option>
                        <option value="ep">Expert Programmer</option>
                    </select>
                </div>

                <fieldset className="space-y-2">
                    <legend className={kelasLabel}>Jenis Kelamin</legend>
                    <div className="flex gap-6">
                        <label htmlFor="lk" className="flex items-center gap-2"> 
                            <input type="radio" id="lk" name="jk" value="L" /> Laki-laki 
                        </label>
                        <label htmlFor="pr" className="flex items-center gap-2"> 
                            <input type="radio" id="pr" name="jk" value="P" /> Perempuan
                        </label>
                    </div>
                </fieldset>

                <div className="space-y-1">
                    <label htmlFor="motivasi" className={kelasLabel}>Motivasi mengikuti pelatihan</label> <br />
                    <textarea className={kelasInput} type="textArea" id="motivasi" name="motivasi" rows={4} maxLength={300} />
                </div>

                <button type="submit" className="w-full rounded-lg bg-teal-700 px-4 py-2.5 font-semibold text-white hover:bg-teal-800">Daftar</button>
            </form>
        </main>
    )
}