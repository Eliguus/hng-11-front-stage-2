import { FiSearch } from "react-icons/fi";
import WendyFrontModel from "../assets/HomePage/WendyFrontModel.png";
import DENIMS from "../assets/HomePage/DENIMS.png"
import GOWNS from "../assets/HomePage/GOWNS.png"
import CARGOPANTS from "../assets/HomePage/CARGO PANTS.png"
import JEWELRIES from "../assets/HomePage/JEWELRIES.png"
import SNEAKERS from "../assets/HomePage/SNEAKERS.png"
import TSHIRTS from "../assets/HomePage/T-SHIRTS.png"

import Product from "../components/Product";
import Comments from "../components/Comments";
const HomePage = () => {
    const data = [DENIMS,GOWNS,CARGOPANTS,JEWELRIES,SNEAKERS,TSHIRTS]
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
                <div className="border-[3px] rounded-full flex items-center justify-between border-[#A3A30F77] w-[30%] h-[2rem] px-2">
                    <FiSearch className="mr-2"/>
                    <p className="flex-1 text-center">Search for Products</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center my-8">
                <div className="relative bg-[#A3A30F77] w-[80%] flex items-center justify-between">
                    <div className="flex-1 pl-10 flex flex-col justify-center items-center">
                        <p className="text-4xl">WELCOME TO</p>
                        <p className="text-6xl">WENDY LUXURY</p>
                        <p className="text-2xl">(A Style for Every Story)</p>
                    </div>
                    <img src={WendyFrontModel} alt="Wendy Front Model" className="pr-10" />
                    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black w-[15%] text-2xl rounded-md">Explore Now</button>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
            <div className="flex flex-row justify-between w-[80%] shadow-[#A3A30F77] shadow-md ">
                <p className="text-2xl p-4">Featured Categories</p>
                <button className="bg-[#A3A30F77] text-2xl h-[3rem] p-4 rounded-md">New Products</button>
            </div>
            </div>
            <div className="flex items-center flex-col">
                <div className="flex flex-wrap -mx-2 w-[80%]">
                    {
                        data.map((img, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2">
                                <Product img={img} productName={decodeURIComponent(img.split('/').pop().split('.')[0])}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="flex justify-center w-[20%] shadow-[#A3A30F77] shadow-md ">
                    <p className="text-2xl p-4">Customers&apos; Review</p>
                </div>
            </div>
            <div className="flex flex-wrap w-[80%]">
                {
                    comments.map((comment, index) => (
                        <div key={index} className="flex-1 m-2 p-4 md:w-1/2">
                            <Comments name={comment.name} place={comment.place} comments={comment.comment}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default HomePage;