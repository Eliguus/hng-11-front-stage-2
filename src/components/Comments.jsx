// import PropTypes from 'prop-types';
import quote from '../assets/HomePage/quote.png'

const Comments = ({name,place,comments}) => {
    return (
        <>
            <div className='bg-[#A3A30F77] rounded-lg p-4'>
                <div className="flex items-center"> 
                    <div className="flex flex-col"> 
                        <p className='text-4xl'>{name}</p>
                        <p className='text-2xl'>{place}</p>
                    </div>
                    <img src={quote} alt='quote'/>
                </div>
                <p className='xl'>{comments}</p>
            </div>
        </>
    )
}

export default Comments