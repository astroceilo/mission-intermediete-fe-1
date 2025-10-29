export default function MainLayout({ children, bgClass }) {
  return (
    <>
      <main
        className={`min-h-screen mx-auto max-w-3xl sm:max-w-4xl md:max-w-7xl ${bgClass} relative py-6 px-4 sm:px-6 md:px-10 xl:px-[120px] mt-24 md:mt-28 lg:mt-32`}
      >
        {children}
      </main>
    </>
  );
}
