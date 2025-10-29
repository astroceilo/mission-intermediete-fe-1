import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function HeaderWrapper({ left, right, menu }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-20 top-0 start-0 border-b border-other-border">
      <div className="max-w-7xl flex items-center justify-between mx-auto py-3 px-4 gap-4 md:px-10 md:gap-6 xl:px-[120px] xl:gap-9">
        {/* LEFT */}
        <div className="flex items-center gap-3">{left}</div>

        {/* RIGHT (Desktop) */}
        <div className="hidden md:flex items-center gap-4">{right}</div>

        {/* HAMBURGER (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-md rounded-b-lg shadow-md z-30">
          {menu}
        </div>
      )}
    </header>
  );
}
