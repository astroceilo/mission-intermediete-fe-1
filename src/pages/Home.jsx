import hero from "../assets/images/hero_section.jpg";
import news from "../assets/images/news-letter.jpg";
import { useEffect, useState } from "react";
import CardCourse from "../components/CardCourse";
import { Link } from "react-router-dom";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("semua-kelas");

  // Fetch data
  useEffect(() => {
    const loadData = async () => {
      try {
        const [coursesRes, usersRes] = await Promise.all([
          fetch("/data/courses.json"),
          fetch("/data/users.json"),
        ]);
        const [coursesData, usersData] = await Promise.all([
          coursesRes.json(),
          usersRes.json(),
        ]);

        // Gabungin instructor ke course berdasarkan instructor_id
        const mergedData = coursesData.map((course) => {
          const instructor = usersData.find(
            (u) => u.id === course.instructor_id
          );
          return { ...course, instructor };
        });

        setCourses(mergedData);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };

    loadData();
  }, []);

  // Filter by category
  const filteredCourses =
    activeCategory === "semua-kelas"
      ? courses
      : courses.filter(
          (course) => course.category.toLowerCase() === activeCategory
        );

  const category = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] rounded-[10px] overflow-hidden">
        <img src={hero} alt="Belajar" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 w-full flex flex-col justify-center items-center gap-2.5 md:gap-6 text-white text-center px-5 md:px-20! xl:px-[140px]!">
          <h1 className="text-2xl! md:text-3xl! lg:text-[48px]! font-bold leading-tight">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="text-sm md:text-base! font-medium leading-relaxed">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <Link
            to="#"
            className="inline-block bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-normal md:font-bold! rounded-lg text-sm md:text-base! px-3.5 py-2 md:px-[26px]! md:py-2.5! transition-colors duration-300"
          >
            Temukan Video Course untuk Dipelajari!
          </Link>
        </div>
        {/* End Content */}
      </section>
      {/* End Hero Section */}

      {/* Section Card */}
      <section className="mx-auto max-w-7xl my-8">
        <div className="max-w-full relative flex flex-col gap-4">
          <h3 className="text-2xl! md:text-[32px]! font-semibold leading-tight">
            Koleksi Video Pembelajaran Unggulan
          </h3>
          <p className="text-sm md:text-base font-medium text-text-dark-secondary leading-tight tracking-[0.2px]">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        {/* Choise Card Section */}
        <div className="w-full mt-6">
          <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar text-base md:text-lg font-medium">
            {/* <button
              data-filter="all"
              className="relative w-fit pb-2 text-orange-600 whitespace-nowrap active-category cursor-pointer"
            >
              Semua Kelas
              <span className="absolute left-0 bottom-0 h-1 w-1/2 rounded-full bg-orange-600"></span>
            </button> */}

            {category.map((item) => {
              const value = item.toLowerCase().replace(" ", "-");
              const isActive = activeCategory === value;

              return (
                <button
                  key={item}
                  onClick={() => setActiveCategory(value)}
                  className={`relative w-fit whitespace-nowrap pb-2 transition cursor-pointer
                  ${
                    isActive
                      ? "text-sm md:text-base! font-medium text-tertiary after:absolute after:left-0 after:bottom-0 after:h-1 after:w-1/2 after:rounded-full after:bg-tertiary"
                      : "text-sm md:text-base! font-medium text-text-dark-secondary hover:text-tertiary"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        {/* End Choise Card Section */}

        {/* Menu Card */}
        {filteredCourses.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {filteredCourses.map((course) => (
              <CardCourse key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading data...</p>
        )}
        {/* End Menu Card */}
      </section>
      {/* End Section Card */}

      {/* News Letter Section */}
      <section className="relative w-full h-[400px] rounded-[10px] overflow-hidden">
        {/* Background */}
        <img src={news} alt="Belajar" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 w-full flex flex-col items-center justify-center gap-10 text-white text-center px-5 sm:px-20! md:px-40! lg:px-64! xl:px-96!">
          <div className="flex flex-col items-center gap-1">
            <span className="text-base md:text-lg font-medium tracking-wider">
              NEWSLETTER
            </span>
            <h3 className="text-2xl! md:text-[32px]! font-semibold">
              Mau Belajar Lebih Banyak?
            </h3>
            <span className="text-sm md:text-base! font-normal leading-relaxed">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </span>
          </div>

          {/* Form */}
          <form
            action="#"
            method="post"
            className="w-full relative flex flex-col md:flex-row items-center bg-transparent md:bg-white rounded-[10px] p-0 md:p-2.5! md:pl-8! gap-4"
          >
            {/* Input */}
            <input
              type="email"
              placeholder="Masukkan Emailmu"
              className="w-full bg-white md:bg-transparent text-text-dark-secondary text-sm md:text-base font-normal text-center md:text-left! rounded-[10px] p-2.5 md:p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-none"
            />

            {/* Tombol (Desktop & Mobile) */}
            <button
              type="submit"
              className="w-full md:w-auto bg-secondary hover:bg-transparent text-white hover:text-secondary border hover:border border-secondary hover:border-secondary text-sm md:text-base font-bold rounded-[10px] py-2.5 px-[26px] focus:outline-none focus:ring-2 focus:ring-secondary transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* End Content */}
      </section>
      {/* End News Letter Section */}
    </>
  );
}
