import ArtikelCard from './ArtikelCard'

const ArtikelSection = () => {
  return (
    <section className="py-16 bg-artikel text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-medium text-center mb-12">Artikel & Berita</h2>
        <div className="mt-0">
          <ArtikelCard />
        </div>

        <div className="text-center mt-12">
          <a href="/artikel">
            <button className="bg-white text-teal-600 px-6 py-3 rounded-2xl hover:bg-gray-100 font-medium transition-transform duration-300 hover:scale-110 cursor-pointer">
              Lihat Selengkapnya
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ArtikelSection
