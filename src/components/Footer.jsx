import { FiMapPin, FiMessageSquare, FiPhone } from 'react-icons/fi';
import wendyLogo from '../assets/wendyLogo.png';

const Footer = () => {
    return (
        <>
        <div className='bg-black text-white flex flex-col md:flex-row justify-between items-start p-16'>
            <div className=''>
                <img src={wendyLogo} alt="Wendy Logo" className='w-32 h-auto'/>
                <div className='flex flex-row'>
                    <FiPhone className='m-1' />
                    <p className='m-1'>+2349083401491</p>
                </div>
                <div className='flex flex-row'>
                    <FiMessageSquare  className='m-1'/>
                    <p className='m-1'>wendyluxury23@gmail.com</p>
                </div>
                <div className='flex flex-row'>
                    <FiMapPin className='m-1' />
                    <p className='m-1'>Lagos, Nigeria</p>
                </div>
            </div>
            <div>
                <div className='text-lg m-2'>
                    Shop
                </div>
                <div>
                    <div className='m-2'>
                        Products
                    </div>
                    <div className='m-2'>
                        Check Out
                    </div>
                    <div className='m-2'>
                        My Account
                    </div>
                </div>
            </div>
            <div>
                <div className='text-lg m-2'>
                    Information
                </div>
                <div>
                    <div className='m-2'>
                        Contact Us
                    </div>
                    <div className='m-2'>
                        Privacy Policy
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center rounded-tl-[2rem] bg-[#D1D184] border p-6'>
            Copyright © @WENDY LUXURY
        </div>
        </>
    )
}

export default Footer;