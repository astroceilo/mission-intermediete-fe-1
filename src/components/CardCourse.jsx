import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CardCourse({ course }) {
  const {
    title,
    category,
    thumbnail,
    description,
    instructor: {
      name = "",
      profile_image = "",
      position = "",
      company = "",
    } = {},
    price: { original, discounted } = {},
    rating: { stars, reviews } = {},
    link,
  } = course;

  // Generate bintang rating (React version)
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  // Format harga (biar ada Rp dan titik ribuan)
  const formatPrice = (price) => {
    if (!price) return "-";
    if (price >= 1000000) {
      return `Rp ${(price / 1000000).toFixed(1).replace(/\.0$/, "")}JT`;
    } else if (price >= 1000) {
      return `Rp ${(price / 1000).toFixed(0)}K`;
    } else {
      return `Rp ${price}`;
    }
  };

  return (
    <div
      className="group h-auto md:h-[426px] rounded-[10px] bg-other-primarybg border border-other-border p-2.5 md:p-5 flex flex-col gap-2 md:gap-4 transition duration-300 ease-in-out transform hover:shadow-lg"
      data-category={category}
    >
      {/* Content */}
      <div className="flex flex-col gap-2.5">
        <div className="flex md:flex-col gap-2.5">
          {/* Thumbnail */}
          <img
            src={thumbnail}
            alt={title}
            className="w-[82px] h-[82px] md:w-auto md:h-[193px] rounded-[10px] object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
          <div className="flex flex-col justify-between flex-1 gap-2">
            {/* Title & Description */}
            <div className="flex flex-col gap-2">
              <h6 className="text-text-dark-primary font-semibold text-base! md:text-lg! line-clamp-2">
                <Link to={link}>{title}</Link>
              </h6>

              <p className="hidden md:block text-text-dark-secondary text-sm md:text-base! lg:text-lg line-clamp-2">
                {description}
              </p>
            </div>

            {/* Instructor */}
            <div className="flex items-start gap-2.5">
              <Link to="#" className="block shrink-0">
                <img
                  alt={name}
                  src={profile_image}
                  className="size-10 rounded-[10px] object-cover"
                />
              </Link>

              <div className="flex flex-col">
                <p className="text-sm md:text-base font-medium">
                  <Link to="#">{name}</Link>
                </p>

                <p className="text-xs md:text-sm font-normal text-text-dark-secondary line-clamp-2">
                  {position}{" "}
                  {company && (
                    <>
                      di <span className="font-bold!">{company}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center">{generateStars(stars)}</span>
            <span className="text-xs md:text-sm font-normal text-text-dark-secondary underline">
              {stars} ({reviews})
            </span>
          </div>

          <div className="flex items-center gap-2">
            {discounted ? (
              <>
                <span className="text-xs md:text-sm font-normal text-tertiary line-through">
                  {formatPrice(discounted)}
                </span>
                <h4 className="text-base! md:text-2xl! font-semibold text-primary">
                  {formatPrice(original)}
                </h4>
              </>
            ) : (
              <span className="text-base! md:text-2xl! font-semibold text-primary">
                {formatPrice(original)}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Content */}
    </div>
  );
}
