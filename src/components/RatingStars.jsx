import { FiStar } from 'react-icons/fi';

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStars;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <FiStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      {halfStars > 0 && (
        <FiStar key="half" className="text-yellow-500" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FiStar key={`empty-${index}`} className="text-gray-300" />
      ))}
    </div>
  );
};

export default RatingStars;