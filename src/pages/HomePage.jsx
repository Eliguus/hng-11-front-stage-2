import { FiSearch } from "react-icons/fi";
import WendyFrontModel from "../assets/HomePage/WendyFrontModel.png";
const HomePage = () => {
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
        </>
    );
}

export default HomePage;