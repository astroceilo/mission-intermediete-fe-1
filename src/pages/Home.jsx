import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section class="bg-[#FFFDF5] relative py-8 md:py-16">
        <div class="mx-auto max-w-7xl px-4 py-3 md:px-6 lg:px-8">
          <main class="bg-[#FFFDF5] relative py-8 md:py-16">
            <div class="mx-auto max-w-7xl px-4 py-3 md:px-6 lg:px-8">
              {/* CTAs Section */}
              <section class="relative rounded-2xl overflow-hidden">
                <img
                  src="../../assets/images/hero_section.jpg"
                  alt="Belajar"
                  class="w-full h-128 md:h-96 object-cover"
                />

                {/* Overlay */}
                <div class="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white px-2 py-2 md:px-4 md:py-4">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform
                      Video Interaktif!
                    </h1>
                    <p class="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                      Temukan ilmu baru yang menarik dan mendalam melalui
                      koleksi video pembelajaran berkualitas tinggi. Tidak hanya
                      itu, Anda juga dapat berpartisipasi dalam latihan
                      interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                    <a
                      href="#"
                      class="mt-6 inline-block bg-[rgba(62,207,76,1)] text-white hover:bg-green-600 font-semibold px-4 py-3 rounded-lg text-base md:text-lg"
                    >
                      Temukan Video Course untuk Dipelajari!
                    </a>
                  </div>
                </div>
              </section>
              {/* End CTAs Content */}

              {/* Section Card */}
              <section class="mx-auto max-w-7xl my-8">
                <div class="relative">
                  <h1 class="text-xl md:text-3xl font-semibold leading-tight">
                    Koleksi Video Pembelajaran Unggulan
                  </h1>
                  <p class="mt-4 max-w-md text-sm md:text-lg font-medium text-gray-500/75 leading-tight tracking-[0.2px]">
                    Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                  </p>
                </div>

                {/* Choise Card Section */}
                <div class="w-full mt-6">
                  <div class="flex gap-6 overflow-x-auto no-scrollbar text-lg font-medium">
                    <button
                      data-filter="all"
                      class="relative w-fit pb-2 text-orange-600 whitespace-nowrap active-category cursor-pointer"
                    >
                      Semua Kelas
                      <span class="absolute left-0 bottom-0 h-1 w-1/2 rounded-full bg-orange-600"></span>
                    </button>

                    <button
                      data-filter="pemasaran"
                      class="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
                    >
                      Pemasaran
                    </button>

                    <button
                      data-filter="desain"
                      class="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
                    >
                      Desain
                    </button>

                    <button
                      data-filter="pengembangan-diri"
                      class="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
                    >
                      Pengembangan Diri
                    </button>

                    <button
                      data-filter="bisnis"
                      class="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
                    >
                      Bisnis
                    </button>
                  </div>
                </div>
                {/* End Choise Card Section */}

                {/* Menu Card */}
                <div class="card mt-6">
                  <div
                    id="courses-container"
                    class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6"
                  ></div>
                </div>
                {/* End Menu Card */}
              </section>
              {/* End Section Card */}

              {/* News Letter */}
              <section class="relative rounded-2xl overflow-hidden">
                {/* Background */}
                <img
                  src="../../assets/images/news-letter.jpg"
                  alt="Belajar"
                  class="w-full h-112 md:h-96 object-cover"
                />

                {/* Overlay */}
                <div class="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div class="absolute inset-0 flex items-center justify-center px-4">
                  <div class="text-center text-white max-w-xl w-full">
                    <p class="text-sm md:text-base tracking-wider font-medium">
                      NEWSLETTER
                    </p>
                    <h3 class="mt-2 text-xl md:text-2xl font-bold">
                      Mau Belajar Lebih Banyak?
                    </h3>
                    <p class="mt-2 text-sm md:text-base leading-relaxed">
                      Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                      penawaran spesial dari program-program terbaik hariesok.id
                    </p>

                    {/* Form */}
                    <form
                      action="#"
                      method="post"
                      class="mt-5 w-full flex flex-col items-center"
                    >
                      <div class="relative w-full max-w-md">
                        {/* Input */}
                        <input
                          type="email"
                          placeholder="Masukkan Emailmu"
                          class="w-full rounded-lg border border-gray-200 bg-white p-3 pe-28 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />

                        {/* Tombol (Desktop) */}
                        <button
                          type="submit"
                          class="hidden md:block absolute top-1/2 -translate-y-1/2 right-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm px-5 py-2 rounded-lg transition cursor-pointer"
                        >
                          Subscribe
                        </button>
                      </div>

                      {/* Tombol (Mobile) */}
                      <button
                        type="submit"
                        class="mt-3 w-full md:hidden bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm px-5 py-3 rounded-lg transition cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </section>
              {/* End News Letter */}
            </div>
          </main>
        </div>
      </section>
    </MainLayout>
  );
}
