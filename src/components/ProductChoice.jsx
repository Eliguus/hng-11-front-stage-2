import RatingStars from "./RatingStars"
const ProductChoice = ({product,name1,price1,rating1,img1,name2,price2,rating2,img2}) =>{
    return (
        <>
        <div className="flex flex-col items-center my-8">
                <div className="flex flex-row justify-between items-center w-full sm:w-3/4 md:w-[100%] shadow-[#A3A30F77] shadow-md">
                    <p className="text-xl sm:text-2xl p-2 sm:p-4 bg-[#A3A30F77]">{product}</p>
                </div>
            </div>
    <div className="flex">
        <div className="flex flex-col justify-between bg-[#A3A30F77] m-4 min-h-[300px] md:min-h-[500px] w-full md:w-[80%]">
            <div>
                <img src={img1} alt=""/>
                <p className="font-bold p-4 text-lg">{name1}</p>
                <RatingStars rating={rating1}/>
                <p className="font-bold p-4">{price1}</p>
            </div>
            <div className="flex justify-end">
                <button className="bg-black p-2 text-white ml-auto rounded-md m-2">Add to cart</button>
            </div>
        </div>
        <div className="flex flex-col justify-between bg-[#A3A30F77] m-4 min-h-[300px] md:min-h-[500px] w-full md:w-[80%]">
            <div>
                <img src={img2} alt=""/>
                <p className="font-bold p-4 text-lg">{name2}</p>
                <RatingStars rating={rating2}/>
                <p className="font-bold p-4">{price2}</p>
            </div>
            <div className="flex justify-end">
                <button className="bg-black p-2 text-white ml-auto rounded-md m-2">Add to cart</button>
            </div>
        </div>
    </div>
</>
    )
}

export default ProductChoice