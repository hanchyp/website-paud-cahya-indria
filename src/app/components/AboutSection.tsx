import { HandHeart, Lightbulb, LocateFixed } from "lucide-react"

const AboutSection = () => {
    return(
        <section className="py-16 bg-tentang-paud">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-medium text-gray-800 mb-6">
            Tentang Cahya Indria
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-2xl mt-8">
            PAUD Cahya Indria berkomitmen untuk menyediakan lingkungan yang
            hangat dan mendukung, tempat anak-anak dapat bereksplorasi,
            menemukan hal baru, dan menumbuhkan cinta belajar melalui pengalaman
            pendidikan berbasis bermain.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb color="#000000" size={50}></Lightbulb>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Visi</h3>
              <p className="text-gray-600 text-md leading-relaxed text-center">
                Menyiapkan calon generasi yang bertaqwa, sehat, cerdas, dan
                berbudi luhur
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LocateFixed color="#000000" size={50}></LocateFixed>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Misi</h3>
              <ul className="list-disc text-gray-600 text-md leading-relaxed text-left ml-4">
                <li>Mempraktekkan dasar-dasar keimanan</li>
                <li>Bermain dengan pengetahuan</li>
                <li>Melatih kebersamaan</li>
                <li>Mencintai budaya lingkungan</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart color="#000000" size={50}></HandHeart>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tujuan</h3>
              <ul className="list-disc text-gray-600 text-md leading-relaxed text-left ml-4">
                <li>Mewujudkan anak yang bertaqwa dan berakhlaqul karimah</li>
                <li>
                  Mendidik anak agar menjadi generasi yang berkualitas berguna
                  bagi agama, nusa, dan bangsa
                </li>
                <li>
                  Mengembangkan kreatifitas ketrampilan anak didik untuk
                  mengekspresikan diri dalam berkarya seni
                </li>
                <li>
                  Mengembangkan bakat minat dan kemampuan sehingga anak
                  berkembang secara optimal dan mampu beraktualisasi diri
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/profil">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-2xl hover:bg-gray-700 transition-transform duration-300 hover:scale-110 cursor-pointer">
                Pelajari Lebih Lanjut
              </button>
            </a>
          </div>
        </div>
      </section>
    )
}

export default AboutSection