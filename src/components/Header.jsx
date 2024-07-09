import wendyLogo from '../assets/wendyLogo.png';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();

    return (
        <>
            <div className='flex-row items-center justify-between hidden md:flex'>
            <img src={wendyLogo} alt="Wendy Logo" className='w-32 h-auto'/>
            <Link to="/" className={location.pathname === "/" ? "text-[#A3A30F77]" : ""}>Home</Link>
            <Link to="/products" className={location.pathname === "/products" ? "text-[#A3A30F77]" : ""}>Products</Link>
            <Link to="/cart" className={location.pathname === "/cart" ? "text-[#A3A30F77]" : ""}>Cart</Link>
            <Link to="/checkout" className={location.pathname === "/checkout" ? "text-[#A3A30F77]" : ""}>Check Out</Link>
            
            <div>My Account</div>
            <div className='border-4 rounded-[2rem] border-[#D1D184] px-6'>Contact Us</div>
        </div>
            <div className='flex flex-row justify-between items-center md:hidden'>
                <img src={wendyLogo} alt="Wendy Logo" className='w-32 h-auto'/>
                
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 text-2xl cursor-pointer ${isMenuOpen&&'border-4 border-[#D1D184]'}`}><FiMenu/></div>
                
            </div>
            <div className='relative flex flex-col items-end'>
    {isMenuOpen && (
        <div className='absolute top-0 right-0 z-50'>
            <div className='bg-white flex flex-col items-center'>
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