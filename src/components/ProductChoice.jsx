import RatingStars from "./RatingStars"
const ProductChoice = ({product,name,price,rating,img}) =>{
    return (
        <>
    <div className="flex">
        <div className="flex flex-col justify-between bg-[#A3A30F77] m-4 h-full">
            <div>
                <img src={img} alt=""/>
                <p>{name}</p>
                <RatingStars rating={rating}/>
                <p>{price}</p>
            </div>
            <div>
                <button className="bg-black text-white ml-auto">Add to cart</button>
            </div>
        </div>
        <div className="flex flex-col justify-between bg-[#A3A30F77] m-4 h-full">
            <div>
                <img src={img} alt=""/>
                <p>{name}</p>
                <RatingStars rating={rating}/>
                <p>{price}</p>
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