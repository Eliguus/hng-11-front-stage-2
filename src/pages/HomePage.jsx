import { FiSearch } from "react-icons/fi";
import WendyFrontModel from "../assets/HomePage/WendyFrontModel.png";
import DENIMS from "../assets/HomePage/DENIMS.png"
import GOWNS from "../assets/HomePage/GOWNS.png"
import CARGOPANTS from "../assets/HomePage/CARGO PANTS.png"
import JEWELRIES from "../assets/HomePage/JEWELRIES.png"
import SNEAKERS from "../assets/HomePage/SNEAKERS.png"
import TSHIRTS from "../assets/HomePage/T-SHIRTS.png"
import { MdOutlineShoppingCart,MdOutlinePayments } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import Product from "../components/Product";
import Comments from "../components/Comments";
const HomePage = () => {
    const data = [{img:DENIMS,name:'DENIMS'},{img:GOWNS,name:'GOWNS'},{img:CARGOPANTS,name:'CARGOPANTS'},{img:JEWELRIES,name:'JEWELRIES'},{img:SNEAKERS,name:'SNEAKERS'},{img:TSHIRTS,name:"TSHIRTS"}]
    const comments = [
        {
            name: "Ijeoma Juliet",
            place: "Lagos, Nigeria",
            comment: "I love these clothes!! I love the fit!!! I love the price!! I am on my 4th order from..."
        },
        {
            name: "Miracle Blessing",
            place: "Abuja, Nigeria",
            comment: "I just got my first order and I have one word WOW!!! Love, Love, Love these..."
        },
        {
            name: "Kaima Favour",
            place: "Imo, Nigeria",
            comment: "I can’t even express how excited I was when your delivery arrived. Such well..."
        },
        {
            name: "Muna Johns",
            place: "Accra, Ghana",
            comment: "I love the jewelries from the website!! I am so glad I found them......everything...."
        },
    ]

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="border-[3px] rounded-full flex items-center justify-between border-[#A3A30F77] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-10 px-2">
                    <FiSearch className="mr-2"/>
                    <p className="flex-1 text-center">Search for Products</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center my-8">
                <div className="relative bg-[#A3A30F77] w-full sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[80%] flex items-center justify-between px-2 sm:px-4">
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">WELCOME TO</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">WENDY LUXURY</p>
                        <p className="text-sm sm:text-md md:text-lg lg:text-xl">(A Style for Every Story)</p>
                    </div>
                    <img src={WendyFrontModel} alt="Wendy Front Model" className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3" />
                    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 text-sm sm:text-md md:text-lg lg:text-xl rounded-md">Explore Now</button>
                </div>
            </div>

            <div className="flex flex-col items-center my-8">
                <div className="flex flex-row justify-between items-center w-full sm:w-3/4 md:w-[80%] shadow-[#A3A30F77] shadow-md">
                    <p className="text-xl sm:text-2xl p-2 sm:p-4">Featured Categories</p>
                    <button className="bg-[#A3A30F77] text-xl sm:text-2xl sm:p-4 rounded-md">New Products</button>
                </div>
            </div>
            <div className="flex items-center flex-col">
                <div className="flex flex-wrap -mx-2 w-[80%]">
                    {
                        data.map((img, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2">
                                <Product img={img.img} productName={img.name}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="flex justify-center w-full sm:w-3/4 md:w-1/2 lg:w-[30%] xl:w-[20%] shadow-[#A3A30F77] shadow-md">
                    <p className="text-xl sm:text-2xl p-4">Customers&apos; Review</p>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
            <div className="flex flex-wrap w-[80%]">
                {
                    comments.map((comment, index) => (
                        <div key={index} className="w-full sm:w-1/2 p-4 flex-none">
                            <Comments name={comment.name} place={comment.place} comments={comment.comment}/>
                        </div>
                    ))
                }
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
                    <CiDeliveryTruck size={24}/>
                    <p>Swift Delivery</p>
                </div>
                <div className="flex flex-col items-center">
                    <IoPerson size={24}/>
                    <p>24/7 Support</p>
                </div>
            </div>
        </>
    );
}

export default HomePage;