import wendyLogo from '../assets/wendyLogo.png';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div className='flex-row items-center justify-between hidden md:flex'>
                <img src={wendyLogo} alt="Wendy Logo" className='w-32 h-auto'/>
                <div>Home</div>
                <div>Products</div>
                <div>Cart</div>
                <div>Check Out</div>
                <div>My Account</div>
                <div className='border-4 rounded-[2rem] border-[#D1D184] px-6'>Contact Us</div>
            </div>
            <div className='flex flex-row justify-between items-center md:hidden'>
                <img src={wendyLogo} alt="Wendy Logo" className='w-32 h-auto'/>
                
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 text-2xl cursor-pointer ${isMenuOpen&&'border-4 border-[#D1D184]'}`}><FiMenu/></div>
                
            </div>
            <div className='flex flex-col items-end'>
            {isMenuOpen && (
                    <div className='bg-white '>
                        <div className='m-2'>Home</div>
                        <div className='m-2'>Products</div>
                        <div className='m-2'>Cart</div>
                        <div className='m-2'>Check Out</div>
                        <div className='m-2'>My Account</div>
                        <div className='m-2'>Contact Us</div>
                    </div>
                )}
            </div>
        
        </>
    );
    }

export default Header;