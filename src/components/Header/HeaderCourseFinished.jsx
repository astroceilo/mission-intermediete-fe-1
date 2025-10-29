import { Link } from "react-router-dom";
import { Trophy, ArrowRight } from "lucide-react";
import HeaderWrapper from "./HeaderWrapper";
import HeaderLeft from "./Parts/HeaderLeft";

export default function HeaderCourseFinished() {
  const left = (
    <HeaderLeft back title="UI/UX Design: Selesai 🎉" backTo="/courses" />
  );

  const right = (
    <div className="flex items-center gap-4">
      {/* tombol sertifikat */}
      <Link
        to="/certificate"
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-100 transition"
      >
        <Trophy className="w-5 h-5" />
        Lihat Sertifikat
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );

  return <HeaderWrapper left={left} right={right} />;
}
