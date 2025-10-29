import { Link } from "react-router-dom";
import { PlayCircle, BookOpen } from "lucide-react";
import HeaderWrapper from "./HeaderWrapper";
import HeaderLeft from "./Parts/HeaderLeft";

export default function HeaderCourse() {
  const left = (
    <HeaderLeft back title="UI/UX Design: Modul 3" backTo="/courses" />
  );

  const right = (
    <div className="flex items-center gap-4">
      {/* tombol lihat modul */}
      <Link
        to="/course/modules"
        className="flex items-center gap-2 text-text-dark-secondary hover:text-primary font-medium text-base transition-colors"
      >
        <BookOpen className="w-5 h-5" />
        Modul
      </Link>

      {/* tombol lanjut video */}
      <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-100 transition">
        <PlayCircle className="w-5 h-5" />
        Lanjutkan
      </button>
    </div>
  );

  return <HeaderWrapper left={left} right={right} />;
}
