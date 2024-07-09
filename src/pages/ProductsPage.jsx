import ProductChoice from "../components/ProductChoice"
import DENIMS from "../assets/HomePage/DENIMS.png"
import sneakers from "../assets/HomePage/SNEAKERS.png"
import gowns from '../assets/HomePage/GOWNS.png'
import gowns2 from '../assets/HomePage/WendyFrontModel.png'
import { MdOutlineShoppingCart, MdOutlinePayments, MdLocalShipping } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import jeans from '../assets/ProductPage/JEANS.png'

const ProductsPage = ()=>{
    const data = [
        {
            product: "DENIMS",
            name1: "Female Denim Trousers",
            price1: "N 20,000",
            ratings1: "4",
            img1: DENIMS,
            name2: "Male Denim Trousers",
            price2: "N 30,000",
            ratings2: "3",
            img2: jeans,
        },
        {
            product: "GOWNS",
            name1: "Black body hug gown",
            price1: "N 10,000",
            ratings1: "2",
            img1: gowns,
            name2: "Corporate gowns",
            price2: "N 25,000",
            ratings2: "4",
            img2: gowns2,
        },
        {
            product: "SNEAKERS",
            name1: "Nike, size 32-43",
            price1: "N 35,000",
            ratings1: "2",
            img1: sneakers,
            name2: "Nike",
            price2: "N 25,000",
            ratings2: "4",
            img2: sneakers,
        }
    ]
    return (
        <>
        <div className="flex flex-col items-center my-8">
            <div className="flex w-[80%]">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 flex flex-col items-center p-4 border-black border rounded-lg m-2 order-last md:order-none">
                        <p className="text-2xl mb-6">Categories</p>
                        <p className="text-xl mb-4">DENIMS</p>
                        <p className="text-xl mb-4">GOWNS</p>
                        <p className="text-xl mb-4">JEWELRIES</p>
                        <p className="text-xl mb-4">SNEAKERS</p>
                        <p className="text-xl mb-4">CARGO PANTS</p>
                        <p className="text-xl mb-4">T-SHIRTS</p>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col order-first md:order-none">
                        <p className="text-2xl font-bold">Products</p>
                        <div>
                            {
                                data.map((detail,index) => (
                                    <div key={index}>
                                        <ProductChoice product={detail.product} name1={detail.name1} price1={detail.price1} rating1={detail.ratings1} img1={detail.img1} name2={detail.name2} price2={detail.price2} rating2={detail.ratings2} img2={detail.img2}/>

                                    </div>
                                )

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                    <MdOutlineShoppingCart size={24}/>
                    <p>Easy Shopping</p>
                </div>
                <div className="flex flex-col items-center">
                    <MdOutlinePayments size={24}/>
                    <p>Secure Payment</p>
                </div>
                <div className="flex flex-col items-center">
                    <MdLocalShipping size={24}/>
                    <p>Swift Delivery</p>
                </div>
                <div className="flex flex-col items-center">
                    <IoPerson size={24}/>
                    <p>24/7 Support</p>
                </div>
            </div>
        </>
    )
}

export default ProductsPage