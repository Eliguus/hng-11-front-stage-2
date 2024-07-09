import gowns from '../assets/HomePage/GOWNS.png'
import denim from '../assets/HomePage/DENIMS.png'
const CartPage = () => {
    return (
        <>
        <div className="flex flex-col items-center my-8">
        <div className="w-[80%]">
            <div className="text-4xl">Carts</div>
            <div className="text-2xl my-4">Note:</div>
            <ul className="list-disc list-inside">
                <li>Kindly send a DM on instagram for international shipping rates.</li>
                <li>Delivery within Lagos take 2-3 working days after dispatch.</li>
                <li>Delivery outside Lagos take 2-5 working days after dispatch.</li>
                <li>Additionally, prices are subject to change at any time.</li>
            </ul>
        </div>
        </div>
        <div>
            <div className="flex flex-col items-center my-8">
                <div className="flex justify-between w-[80%] shadow-[#A3A30F77] shadow-md ">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Subtotal</p>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="w-[80%] grid grid-cols-4 gap-4 items-center">
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <img src={gowns} alt='gowns' className="w-[6rem] h-[6rem] object-cover mb-2 sm:mb-0"/>
                        <div>Black body hug gown</div>
                    </div>
                    <div className="flex justify-center"><p>x2</p></div>
                    <div className="flex justify-center"><p>N 20,000</p></div>
                    <div className="flex justify-center"><p></p></div>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="w-[80%] grid grid-cols-4 gap-4 items-center">
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <img src={denim} alt='denim' className="w-24 h-24 object-cover"/>
                        <div>Female Denim Trousers</div>
                    </div>
                    <div className="flex justify-center"><p>x2</p></div>
                    <div className="flex justify-center"><p>N 20,000</p></div>
                    <div className="flex justify-center"><p></p></div>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="w-[80%] grid grid-cols-4 gap-4 items-center">
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        {/* <img src={denim} alt='denim' className="w-24 h-24 object-cover"/> */}
                        <div></div>
                    </div>
                    <div className="flex justify-center"><p></p></div>
                    <div className="flex justify-center"><p></p></div>
                    <div className="flex justify-center"><p>N 40,000</p></div>
                </div>
            </div>
        </div>
        <div className="flex justify-end text-lg"> 
    <div className="flex flex-col border"> 
        <div className="bg-[#A3A30F77] p-4"> 
            Cart Tools
        </div>
        <div className=" p-6 max-w-sm"> 
            <div>
                <p>Subtotal - N40,000</p>
                <p>Shipping - N5,000</p>
                <p>Total - N45,000</p>
            </div>
        </div>
        <div className='flex justify-end'> 
            <p className='bg-[#A3A30F77] p-4'>
            Proceed to Checkout
            </p>
        </div>
    </div>
</div>
        </>
    )
}

export default CartPage