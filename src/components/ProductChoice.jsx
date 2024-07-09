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
        <div className="flex flex-col justify-between bg-[#A3A30F77] m-4 h-full">
            <div>
                <img src={img1} alt=""/>
                <p>{name1}</p>
                <RatingStars rating={rating1}/>
                <p>{price1}</p>
            </div>
            <div>
                <button className="bg-black text-white ml-auto">Add to cart</button>
            </div>
        </div>
        <div className="flex flex-col justify-between bg-[#A3A30F77] m-4 h-full">
            <div>
                <img src={img2} alt=""/>
                <p>{name2}</p>
                <RatingStars rating={rating2}/>
                <p>{price2}</p>
            </div>
            <div>
                <button className="bg-black text-white ml-auto">Add to cart</button>
            </div>
        </div>
    </div>
</>
    )
}

export default ProductChoice