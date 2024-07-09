import paymentCards from '../assets/CheckOutPage/PaymentCards.png'
import { FaStar } from 'react-icons/fa'
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
                    <p className='py-4 px-2'>Returning customer?<span className='text-[#A3A30F77]'>Click here to login</span></p>
                </div>
            </div>
            <div className="flex flex-col items-center my-8 md:w-full">
              <div className="items-center w-[80%] flex flex-col md:flex-row justify-between">
                {/* Form Section */}
                <div className="w-full md:w-[70%]">
                  <form className="space-y-4">
                    {/* Form content */}
                    <div className="flex justify-between gap-4">
                      <div className="flex-1">
                        <label htmlFor="firstName" className="inline-flex items-center">First name <FaStar color='red' /></label>
                        <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="lastName" className="inline-flex items-center">Last name <FaStar color='red' /></label>
                        <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="countryRegion" className="inline-flex items-center">Country/region<FaStar color='red' /></label>
                      <select id="countryRegion" name="countryRegion" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent">
                        {/* Add <option> tags for each country/region */}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="streetAddress" className="inline-flex items-center">Street address<FaStar color='red' /></label>
                      <input type="text" id="streetAddress" name="streetAddress" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                      <label htmlFor="townCity" className="inline-flex items-center">Town/city<FaStar color='red' /></label>
                      <input type="text" id="townCity" name="townCity" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                      <label htmlFor="state" className="inline-flex items-center">State<FaStar color='red' /></label>
                      <input type="text" id="state" name="state" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="inline-flex items-center">Postcode (optional)<FaStar color='red' /></label>
                      <input type="text" id="postcode" name="postcode" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="inline-flex items-center">Phone<FaStar color='red' /></label>
                      <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                    <div>
                      <label htmlFor="emailAddress" className="inline-flex items-center">Email address<FaStar color='red' /></label>
                      <input type="email" id="emailAddress" name="emailAddress" className="mt-1 block w-full border border-[#A3A30F77] bg-transparent" required />
                    </div>
                  </form>
                </div>
                {/* Order Summary and Placement */}
                <div className="mt-8 md:mt-0 md:w-[28%] border border-[#A3A30F77]">
                  {/* Order summary content */}
                  <p className='text-xl mx-4'>Your Order</p>
                  <div className="flex flex-row">
                    <div className='m-2'>
                      <p className='text-xl my-2'>Product</p>
                      <p>Black body hug gown x2</p>
                      <p>Female Denim Trousers x1</p>
                      <p>Subtotal</p>
                      <p>Shipping</p>
                      <p>Total</p>
                    </div>
                    <div className='m-2'>
                      <p className='text-xl my-2'>Subtotal</p>
                      <p>N 20,000</p>
                      <p>N 20,000</p>
                      <p>N 40,000</p>
                      <p>N 5,000</p>
                      <p>N 85,000</p>
                    </div>
                  </div>
                  <p className='mt-6'>Debit/Credit Cards</p>
                  <div className='flex items-center flex-col m-4'>
                    <img src={paymentCards} alt="" />
                    <p className='text-[#A3A30F77]'>make payment with your debit card</p>
                    <button className='bg-[#A3A30F77] m-6 px-4 py-2'>Place Order</button>
                  </div>
                </div>
              </div>
              {/* Order Note Section */}
              <div className="w-full md:w-[80%] mt-8">
                <label htmlFor="orderNote" className="block mb-2">Order note</label>
                <textarea id="orderNote" name="orderNote" className="w-full md:w-[40%] h-32 p-2 border border-gray-300" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
              </div>
              {/* Additional Options */}
              <div className="w-full md:w-[80%] mt-8">
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
            </>
    )
}

export default CheckoutPage