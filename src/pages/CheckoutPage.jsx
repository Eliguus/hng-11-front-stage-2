import paymentCards from '../assets/CheckOutPage/PaymentCards.png'
const CheckoutPage = () => {
    return (
        <>
            <div className="flex flex-col items-center my-8">
                <div className="w-[80%]">
                    <div className="text-4xl">Check Out</div>
                    <div className="text-2xl my-4">Note:</div>
                    <ul className="list-disc list-inside">
                        <li>Kindly send a DM on instagram for international shipping rates.</li>
                        <li>Delivery within Lagos take 2-3 working days after dispatch.</li>
                        <li>Delivery outside Lagos take 2-5 working days after dispatch.</li>
                        <li>Additionally, prices are subject to change at any time.</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="flex justify-between w-[80%] shadow-[#A3A30F77] shadow-md ">
                    <p>Returning customer?Click here to login</p>
                </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="w-[80%]">
                <div className="flex flex-row justify-between">
                    <div className="w-[70%]">
                <form className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="flex-1">
                        <label htmlFor="firstName" className="block">First name</label>
                        <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                        </div>
                        <div className="flex-1">
                        <label htmlFor="lastName" className="block">Last name</label>
                        <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="countryRegion" className="block">Country/region</label>
                        <select id="countryRegion" name="countryRegion" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent">
                        {/* Add <option> tags for each country/region */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="streetAddress" className="block">Street address</label>
                        <input type="text" id="streetAddress" name="streetAddress" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                        <label htmlFor="townCity" className="block">Town/city</label>
                        <input type="text" id="townCity" name="townCity" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                        <label htmlFor="state" className="block">State</label>
                        <input type="text" id="state" name="state" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                        <label htmlFor="postcode" className="block">Postcode (optional)</label>
                        <input type="text" id="postcode" name="postcode" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block">Phone</label>
                        <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                        <label htmlFor="emailAddress" className="block">Email address</label>
                        <input type="email" id="emailAddress" name="emailAddress" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    </form>
                    </div>
                    <div className="border border-[#A3A30F77] w-[28%]">
                        <p>Your Order</p>
                        <div className="flex flex-row">
                            <div>
                                <p>Product</p>
                                <p>Black body hug gown</p>
                                <p>Female Denim Trousers</p>
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p>Total</p>
                            </div>
                            <div>
                                <p>Subtotal</p>
                                <p>N 20,000</p>
                                <p>N 20,000</p>
                                <p>N 40,000</p>
                                <p>N 5,000</p>
                                <p>N 85,000</p>

                            </div>
                        </div>
                        <p>Debit/Credit Cards</p>
                        <div>
                            <img src={paymentCards} alt=""/>
                            <p>make payment with your debit card</p>
                            <button>Place Order</button>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                
            </div>
            </div>
            <div className="flex flex-col items-center my-8">
                <div className="w-[80%]">
                    <div className="flex mb-2">
                        <input type="checkbox" id="createAccount" name="createAccount" className="mr-2" />
                        <label htmlFor="createAccount">Create an account?</label>
                    </div>
                    <div className="flex mb-2">
                        <input type="checkbox" id="shipDifferentAddress" name="shipDifferentAddress" className="mr-2" />
                        <label htmlFor="shipDifferentAddress">Ship to a different address?</label>
                    </div>
                    </div>
                    </div>
                
                    <div className="flex flex-col items-center my-8">
                        <div className="w-[80%]">
                        <label htmlFor="orderNote" className="block mb-2">Order note</label>
                        <textarea id="orderNote" name="orderNote" className="w-[40%] h-32 p-2 border border-gray-300" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        </div>
                    </div>
            </>
    )
}

export default CheckoutPage