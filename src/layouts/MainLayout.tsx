import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function MainLayout({ bgClass }: { bgClass?: string }) {
  return (
    <>
      <Header />

      <main
        className={`min-h-screen mx-auto max-w-[1440px] ${bgClass} px-5 md:px-10 lg:px-[120px] py-7 md:py-12 lg:py-16`}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
