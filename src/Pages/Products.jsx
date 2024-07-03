import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";

const Products = ({ getCartData }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesProduct, setCategoriesProduct] = useState([]);
  const [selectCategories, setSelectCategories] = useState("laptops");

  async function getCategories() {
    try {
      let response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response?.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getCategoriesProduct() {
    try {
      let response = await axios.get(
        `https://dummyjson.com/products/category/${selectCategories}`
      );
      setCategoriesProduct(response?.data?.products);
    } catch (error) {
      console.log("you get error");
    }
  }
  const handleCategories = (items) => {
    setSelectCategories(items);
  };
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    getCategoriesProduct();
  }, [selectCategories]);

  return (
    <div>
      {/* Top Banner */}
      <div className="w-full relative sm:mt-16">
        <h1 className="absolute sm:top-24 bottom-10 sm:right-20 right-3 text-[orange] font-bold sm:text-5xl text-2xl font-sans">
          ALL PRODUCTS
        </h1>
        <img
          src="https://images.unsplash.com/photo-1522682078546-47888fe04e81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-64 sm:object-cover object-contain hover:object-bottom object-center transition-object-bottom ease-in-out duration-1000 "
          alt=""
        />
      </div>

      {/* Categories list display */}
      <div className="flex sm:m-5 m-3 sm:gap-4 gap-2 overflow-x-scroll relative no-scrollbar text-white whitespace-nowrap">
        {categories
          .filter(
            (items) =>
              !["skincare", "groceries", "automotive", "motorcycle"].includes(
                items
              )
          )
          .map((items, id) => {
            return (
              <div className="bg-black sm:py-3 py-2 sm:px-3 px-2 rounded-md" key={id}>
                <button onClick={() => handleCategories(items.slug)}>{items.name}</button>
              </div>
            );
          })}
      </div>
      <div>
        <FaAngleRight
          size={20}
          className="absolute sm:right-0 right-[-5px] sm:top-[56%] top-[51%] cursor-pointer"
        />
      </div>

      {/* Display categories products */}
      <div className="sm:flex grid grid-cols-2 sm:justify-around sm:my-10 mt-9 sm:h-70 sm:gap-5">
        {categoriesProduct?.map((items) => (
          <div key={items?.id} className="">
            <div className="bg-gray-200 sm:h-[400px] h-[250px] sm:w-60 w-36 m-auto bg-opacity-75 mb-10 px-8 sm:pt-12 pt-6 pb-16 rounded-lg overflow-hidden text-center relative">
              <div className="">
                <img
                  src={items?.images[0]}
                  alt=""
                  className=" sm:h-48 h-16 sm:w-[90%] w-[96%] object-cover object-top rounded"
                />
              </div>
              <div className="mt-4 font-serif sm:text-lg text-sm relative">
                <p>{items?.title}</p>
                <div className="flex absolute sm:top-14 top-16 justify-around">
                  <p className="text-yellow-600  font-semibold">
                    ₹{items?.price}
                  </p>
                  <p className="pl-24 font-semibold">{items?.rating}</p>
                  <button
                    class="absolute top-10 sm:mr-1 mr-20 bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-black font-medium sm:px-4 px-3 sm:py-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-600"
                    onClick={() => getCartData(items)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated product details */}
      <section class="text-gray-600  body-font">
        <div class="container px-5 sm:py-16 py-3 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Trendy women’s clothing
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p class="leading-relaxed">
                    The finest of material, superior design and unbeatable style
                    go into the making of our men’s shopping collection.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1481238613160-f39d2bd78dea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Smart men’s clothing
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed">
                  The finest of material, superior design and unbeatable style
                    go into the making of our men’s shopping collection.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Smart men’s clothing
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p class="leading-relaxed">
                  The finest of material, superior design and unbeatable style
                    go into the making of our men’s shopping collection.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1522684462852-01b24e76b77d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Fun and frolic
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p class="leading-relaxed">
                  The finest of material, superior design and unbeatable style
                    go into the making of our men’s shopping collection.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p class="leading-relaxed">
                  The finest of material, superior design and unbeatable style
                    go into the making of our men’s shopping collection.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1509472290917-08d8d47c5fca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Fashionable footwear
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-relaxed">
                  The finest of material, superior design and unbeatable style
                    go into the making of our men’s shopping collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

// useEffect(() => {
//   getCategories();
//   getCategoriesProduct();
// }, [selectCategories]);
// console.log("rendering");

// line 57 use first filter if you want particular item and use ! if you want but except this !
// use first slice bcz first slice then map right (0,5) give first five items and if (-5) then last 5
