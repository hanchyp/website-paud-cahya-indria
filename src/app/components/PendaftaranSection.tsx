const PendaftaranSection = () => {
    return(
        <section className="py-16 bg-ready-join">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-medium text-gray-800 mb-6">
            Siap bergabung dengan PAUD Cahya Indria?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Daftarkan anak Anda hari ini dan berikan mereka landasan pendidikan
            yang kuat untuk masa mendatang.
          </p>
          <a href="/daftar-pd">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-2xl hover:bg-pink-600 font-medium transition-transform duration-300 hover:scale-110 cursor-pointer">
              Daftar Sekarang
            </button>
          </a>
        </div>
      </section>
    )
}

export default PendaftaranSection