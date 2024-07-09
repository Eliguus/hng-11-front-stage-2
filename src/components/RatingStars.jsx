import { FaStar } from 'react-icons/fa';
const RatingStars = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = totalStars - fullStars;
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <div key={`full-${index}`} className='p-2'>
        <FaStar color='yellow'  size={24}/>
        </div>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <div key={`full-${index}`} className='p-2 '>
        <FaStar key={`empty-${index}`} color='white' size={24}/>
        </div>
      ))}
      
    </div>
  );
};

export default RatingStars;