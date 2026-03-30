import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

export default function ProductRating({ rating, reviewCount, size = "sm" }: ProductRatingProps) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<StarIcon key={i} className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} text-accent`} />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <div key={i} className="relative">
          <StarOutline className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} text-accent`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
            <StarIcon className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} text-accent`} />
          </div>
        </div>
      );
    } else {
      stars.push(<StarOutline key={i} className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} text-gray-300`} />);
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      {reviewCount !== undefined && (
        <span className={`text-muted ${size === "sm" ? "text-xs" : "text-sm"}`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
