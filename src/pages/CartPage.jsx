const CartPage = () => {
    return (
        <>
        <div className="flex flex-col items-center my-8">
        <div className="w-[80%]">
            <div className="text-4xl">Carts</div>
            <div className="text-2xl my-4">Note:</div>
            <ul className="list-disc list-inside">
                <li>Kindly send a DM on instagram for international shipping rates.</li>
                <li>Delivery within Lagos take 2-3 working days after dispatch.</li>
                <li>Delivery outside Lagos take 2-5 working days after dispatch.</li>
                <li>Additionally, prices are subject to change at any time.</li>
            </ul>
        </div>
        </div>
        <div>
            <div className="flex flex-col items-center my-8">
                <div className="flex justify-between w-[80%] shadow-[#A3A30F77] shadow-md ">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Subtotal</p>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="flex justify-between w-[80%]">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Subtotal</p>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="flex justify-between w-[80%]">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Subtotal</p>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <div className="border p-4 max-w-sm">
                <div className="bg-[#A3A30F77]">
                    Cart Tools
                </div>
                <div>
                    <p>Subtotal - N40,000</p>
                    <p>Shipping - N5,000</p>
                    <p>Total - N45,000</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartPage