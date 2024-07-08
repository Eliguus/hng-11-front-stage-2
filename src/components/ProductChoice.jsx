import RatingStars from "./RatingStars"
const ProductChoice = ({product,name,price,rating}) =>{
    return (
        <>
        <div className="flex flex-col my-8">
                    <div className="flex w-[20%] shadow-[#A3A30F77] shadow-md ">
                        <button className="text-xl bg-[#A3A30F77] p-4">{product}</button>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#A3A30F77] m-4">
                        <img src="" alt=""/>
                        <p>{name}</p>
                        <RatingStars rating={rating}/>
                        <p>{price}</p>
                        <button>add to cart</button>
                    </div>
                    <div className="bg-[#A3A30F77] m-4">
                        <img src="" alt=""/>
                        <p>{name}</p>
                        <RatingStars rating={rating}/>
                        <p>{price}</p>
                        <button>add to cart</button>
                    </div>
                </div>
        </>
    )
}

export default ProductChoice