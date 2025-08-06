const HomePageSection = () => {
    return(
        <section className="bg-header py-16 pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card-belajar rounded-2xl shadow-xl px-16 py-10 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-5xl font-semibold mb-6 text-black leading-tight">
                Mulai <span className="text-belajar">Belajar</span>
                <br />
                dengan
                <br />
                <span className="text-green-500">Menyenangkan</span>
              </h2>
              <p className="text-black mb-8 leading-tight font-medium my-5 max-w-lg text-2xl">
                PAUD Cahya Indria menyediakan pembelajaran yang interaktif dan
                menyenangkan dengan program Islami seperti praktek sholat,
                hafalan doa harian, surat-surat pendek dan hadist.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <a href="/profil">
                    <span className="font-medium text-black bg-gray-300 rounded-xl inline-flex px-6 py-1.5 transition-transform duration-300 hover:scale-110 cursor-pointer">
                      Selengkapnya
                    </span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/images/siswa.png" alt="" />
                  <span className="text-gray-600">300+ Siswa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src="/images/guru.png" alt="" />
                  <span className="text-gray-600">30+ Guru</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full sm:3/4">
              <img
                src={
                  "https://yvixnhiybrgmxfywqjzu.supabase.co/storage/v1/object/public/homepage//homepage.jpg"
                }
                className="bg-gray-200 rounded-xl h-9 object-cover lg:h-[28rem] flex items-center justify-center relative overflow-hidden"
              ></img>
            </div>
            <div className="absolute bottom-4 right-4"></div>
          </div>
        </div>
      </section>
    )
}

export default HomePageSection