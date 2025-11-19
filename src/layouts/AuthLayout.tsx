import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";


export default function AuthLayout({ bgClass }: { bgClass?: string }) {
  return (
    <>
      <Header />

      <main
        className={`min-h-screen mx-auto max-w-7xl ${bgClass} px-5 md:px-10 lg:px-[120px] py-7 md:py-12 lg:py-16`}
      >
        <Outlet />
      </main>
    </>
  );
}
