import { FaStar } from 'react-icons/fa';
const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = totalStars - fullStars;
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} color='yellow' />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar key={`empty-${index}`} color='white' />
      ))}
      
    </div>
  );
};

export default RatingStars;