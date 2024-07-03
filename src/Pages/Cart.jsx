import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
const Cart = ({
  cartData,
  handleQuantityInc,
  handleQuantityDec,
  handleRemove,
  totalAmount,
  handlePromoCode,
  handleSubmit,
  promoCorrect,
  promoInput,
}) => {
  return (
    <div>
      <div className="container mx-auto sm:mt-20 mt-14">
        <div className="flex sm:flex-row flex-col shadow-md my-10">
          <div className="sm:w-3/4 w-full bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold sm:text-2xl text-lg">
                Shopping Cart
              </h1>
              <h2 className="font-semibold sm:text-2xl text-lg">
                {cartData.length} Items
              </h2>
            </div>
            <div className="flex sm:gap-0 gap-7 mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>
            {cartData.map((item) => {
              return (
                <div
                  className="flex sm:gap-2 gap-5 items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  key={item.id}
                >
                  <div className="flex sm:flex-row flex-col sm:w-2/5 w-1/3">
                    <div className="sm:w-20 w-full">
                      <img
                        className="sm:h-24 h-14"
                        src={item.thumbnail}
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col justify-between sm:ml-4 ml-0 flex-grow">
                      <span className="sm:font-bold font-medium sm:text-sm text-xs">{item.title}</span>
                      <span className=" text-blue-700 text-xs font-semibold">
                        {item.brand}
                      </span>
                      <p
                        className="font-semibold hover:text-red-500 text-red-600 text-xs cursor-pointer"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center sm:2/5 w-1/5">
                    <FiPlus className="sm:size-4 size-3" onClick={() => handleQuantityDec(item.id)} />
                    <input
                      className="sm:mx-4 mx-1 border text-center sm:w-8 w-5"
                      type="text"
                      value={item.quantity}
                    />
                    <FiMinus className=" sm:size-4 size-3" onClick={() => handleQuantityInc(item.id)} />
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.price * item.quantity}
                  </span>
                </div>
              );
            })}
            <Link to="/">
              <p className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </p>
            </Link>
          </div>
          <div id="summary" className="sm:w-1/4 w-full px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartData.length}
              </span>
              <span className="font-semibold text-sm">{totalAmount()}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - 25.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                value={promoInput}
                placeholder="Enter your code"
                className="p-2 text-sm border-2 w-full"
                onChange={handlePromoCode}
              />
              {promoCorrect === true ? (
                <span className=" text-green-700 font-bold">
                  successfully promo work
                </span>
              ) : (
                <span className="text-[#bebbbb] font-semibold text-sm ml-2">
                  USE SUNDAY50 (Get 50% Off)
                </span>
              )}
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
              onClick={handleSubmit}
            >
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  {cartData.length > 0 ? totalAmount() + 25 : "00.00"}
                </span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
