import ProductChoice from "../components/ProductChoice"
import RatingStars from "../components/RatingStars"

const ProductsPage = ()=>{
    return (
        <>
        <div className="flex flex-col items-center my-8">
        <div className="flex w-[80%]">
        <div className="flex">
            <div className="W-1/3 flex flex-col">
                <p>Categories</p>
                <p>DENIMS</p>
                <p>GOWNS</p>
                <p>JEWELRIES</p>
                <p>SNEAKERS</p>
                <p>CARGO PANTS</p>
                <p>T-SHIRTS</p>
            </div>
            <div className="W-2/3 flex flex-col">
                <p>Products</p>
                <div>
                    <ProductChoice product={'DENIMS'} name={'NAME'}  price={'3456'} rating={'5'}/>
                    <ProductChoice product={'DENIMS'} name={'NAME'}  price={'3456'} rating={'5'}/>
                    <ProductChoice product={'DENIMS'} name={'NAME'}  price={'3456'} rating={'5'}/>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default ProductsPage