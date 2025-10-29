// src/components/Header/parts/HeaderLeft.jsx
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../../../assets/images/logo.png";

export default function HeaderLeft({
  back = false,
  title = "",
  backTo = null,
  showLogo = true,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3">
      {/* Kondisi logo */}
      {showLogo && (
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Videobelajar Logo"
            className="w-[152px] h-[42px] md:w-[237px] md:h-14 object-contain"
          />
        </Link>
      )}

      {/* Kondisi panah kiri */}
      {back && (
        <button
          onClick={() => (backTo ? navigate(backTo) : navigate(-1))}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* Kondisi text title */}
      {title && (
        <span className="text-base md:text-lg font-semibold text-gray-800">
          {title}
        </span>
      )}
    </div>
  );
}
