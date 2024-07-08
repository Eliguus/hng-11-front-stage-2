import ProductChoice from "../components/ProductChoice"
import DENIMS from "../assets/HomePage/DENIMS.png"

const ProductsPage = ()=>{
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
                        <p className="text-2xl">Products</p>
                        <div>
                            <ProductChoice product={'DENIMS'} name={'NAME'} price={'3456'} rating={'5'} img={DENIMS}/>
                            <ProductChoice product={'DENIMS'} name={'NAME'} price={'3456'} rating={'5'} img={DENIMS}/>
                            <ProductChoice product={'DENIMS'} name={'NAME'} price={'3456'} rating={'5'} img={DENIMS}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductsPage