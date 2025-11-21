import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ bgClass }: { bgClass?: string }) {
  return (
    <>
      <Header />

      <div className={`min-h-screen w-full ${bgClass}`}>
        <main className="mx-auto max-w-[1440px] w-full px-5 md:px-10! lg:px-[120px]! py-7 md:py-12! lg:py-16!">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
