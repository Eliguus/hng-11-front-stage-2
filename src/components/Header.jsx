import wendyLogo from '../assets/wendyLogo.png';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div className='flex-row items-center justify-between hidden md:flex'>
                <img src={wendyLogo} alt="Wendy Logo" className='w-32 h-auto'/>
                <Link to="/">Home</Link> 
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/checkout">Check Out</Link>
                
                <div>My Account</div>
                <div className='border-4 rounded-[2rem] border-[#D1D184] px-6'>Contact Us</div>
            </div>
            <div className='flex flex-row justify-between items-center md:hidden'>
                <img src={wendyLogo} alt="Wendy Logo" className='w-32 h-auto'/>
                
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 text-2xl cursor-pointer ${isMenuOpen&&'border-4 border-[#D1D184]'}`}><FiMenu/></div>
                
            </div>
            <div className='flex flex-col items-end'>
            {isMenuOpen && (
                <div>
                    <div className='bg-white flex flex-col items-center '>
                        <div className='m-2'><Link to="/">Home</Link></div>
                        <div className='m-2'><Link to="/products">Products</Link></div>
                        <div className='m-2'><Link to="/cart">Cart</Link></div>
                        <div className='m-2'><Link to="/checkout">Check Out</Link></div>
                        <div className='m-2'>My Account</div>
                        <div className='m-2'>Contact Us</div>
                    </div>
                </div>
                )}
            </div>
        
        </>
    );
    }

export default Header;