import hero from "../assets/images/hero_section.jpg";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-[400px] relative rounded-[10px] overflow-hidden">
        <img src={hero} alt="Belajar" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 sm:px-10 md:px-[140px] pt-[82px] pb-16">
            <h1 className="text-2xl! sm:text-3xl! md:text-4xl! lg:text-[40px]! font-bold leading-tight mb-4">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="text-base md:text-lg! font-medium leading-relaxed mb-4 md:mb-8 px-0 md:px-20 mx-auto">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <a
              href="#"
              className="inline-block bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-3.5 py-2 md:px-[26px]! md:py-2.5! rounded-lg text-sm md:text-base! lg:text-lg! transition-colors duration-300"
            >
              Temukan Video Course untuk Dipelajari!
            </a>
          </div>
        </div>
        {/* End Content */}
      </section>
      {/* End Hero Section */}

      {/* Section Card */}
      <section className="mx-auto max-w-7xl my-8">
        <div className="relative">
          <h1 className="text-xl md:text-3xl font-semibold leading-tight">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="mt-4 max-w-md text-sm md:text-lg font-medium text-gray-500/75 leading-tight tracking-[0.2px]">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        {/* Choise Card Section */}
        <div className="w-full mt-6">
          <div className="flex gap-6 overflow-x-auto no-scrollbar text-lg font-medium">
            <button
              data-filter="all"
              className="relative w-fit pb-2 text-orange-600 whitespace-nowrap active-category cursor-pointer"
            >
              Semua Kelas
              <span className="absolute left-0 bottom-0 h-1 w-1/2 rounded-full bg-orange-600"></span>
            </button>

            <button
              data-filter="pemasaran"
              className="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
            >
              Pemasaran
            </button>

            <button
              data-filter="desain"
              className="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
            >
              Desain
            </button>

            <button
              data-filter="pengembangan-diri"
              className="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
            >
              Pengembangan Diri
            </button>

            <button
              data-filter="bisnis"
              className="relative w-fit whitespace-nowrap pb-2 text-gray-600 hover:text-orange-600 transition cursor-pointer"
            >
              Bisnis
            </button>
          </div>
        </div>
        {/* End Choise Card Section */}

        {/* Menu Card */}
        <div className="card mt-6">
          <div
            id="courses-container"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6"
          ></div>
        </div>
        {/* End Menu Card */}
      </section>
      {/* End Section Card */}
      {/* News Letter */}
      <section className="relative rounded-2xl overflow-hidden">
        {/* Background */}
        <img
          src="../../assets/images/news-letter.jpg"
          alt="Belajar"
          className="w-full h-112 md:h-96 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-xl w-full">
            <p className="text-sm md:text-base tracking-wider font-medium">
              NEWSLETTER
            </p>
            <h3 className="mt-2 text-xl md:text-2xl font-bold">
              Mau Belajar Lebih Banyak?
            </h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>

            {/* Form */}
            <form
              action="#"
              method="post"
              className="mt-5 w-full flex flex-col items-center"
            >
              <div className="relative w-full max-w-md">
                {/* Input */}
                <input
                  type="email"
                  placeholder="Masukkan Emailmu"
                  className="w-full rounded-lg border border-gray-200 bg-white p-3 pe-28 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                {/* Tombol (Desktop) */}
                <button
                  type="submit"
                  className="hidden md:block absolute top-1/2 -translate-y-1/2 right-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm px-5 py-2 rounded-lg transition cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              {/* Tombol (Mobile) */}
              <button
                type="submit"
                className="mt-3 w-full md:hidden bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm px-5 py-3 rounded-lg transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* End News Letter */}
    </>
  );
}
