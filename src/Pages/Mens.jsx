import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdStar } from "react-icons/io";

const Mens = ({ getCartData }) => {
  const [forSearch, setForSearch] = useState([])
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  
  async function getProducts() {
    try {
      let apiData = await axios.get("https://dummyjson.com/products");
      setProducts(apiData.data.products);
      setForSearch(apiData.data.products);
      // console.log(apiData.data.products);
    } catch (error) {
      console.log("you got error in mens component");
    }
  }
  async function getCategories(){
    try{
      let dataApi = await axios.get('https://dummyjson.com/products/categories');
      setCategories(dataApi.data)
      // console.log(dataApi.data);
    }catch(error){
      console.log("error in finding the categories in mens component")
    }
  }
  const handleCategories = async(e) =>{
    let event = e.target.value;
    try{
      if(event === "Select Category"){
        // let response = await axios.get(`https://dummyjson.com/products/`)
        // setProducts(response.data.products)
        setProducts(forSearch)
      }else{
        let response = await axios.get(`https://dummyjson.com/products/category/${event}`)
        setProducts(response.data.products)
        console.log(response.data.products,"???????????????")
      }
    }catch(error){
      console.log("error white fetching categories")
    }
  }
  const handlePriceFilter = (e) =>{
    let event = e.target.value;
    if(event === "lth"){
      setProducts([...products].sort((a,b)=>a.price-b.price))
    }else if(event === "htl"){
      setProducts([...products].sort((a,b)=>b.price-a.price))
    }else{
      setProducts(forSearch)
    }
  }
  const handleSearch = (e) => {
    let event = e.target.value;
    let filteredProducts = forSearch.filter((item)=>item.title.toLowerCase().includes(event.toLowerCase()))
    setProducts(filteredProducts)
  }
  useEffect(() => {
    getProducts();
    getCategories()
  }, []);
  return (
    <div>
      <div className="flex sm:mt-10 mt-8 relative">
        <div className="absolute top-10 left-4">
          <select className=" border-2 border-blue-200 sm:p-2 p-0 sm:font-semibold font-normal sm:text-base text-sm rounded-xl sm:w-auto w-20"
          onChange={handleCategories}>
            <option className=" text-center font-semibold">Category</option>
            {
              categories?.map((items)=>{
                console.log(categories,">>>>>>>>>>>>>>>>>")
                return(
                  <option className=" font-semibold">{items?.name}</option>
                )
              })
            }
          </select>
        </div>
        <div className="absolute top-10 sm:left-[43%] left-[32%] rounded-lg">
          <input type="text" placeholder="Search Products" className="sm:px-6 px-2 sm:py-2 py-0 border-2 sm:w-auto w-28 border-blue-200 outline-0 sm:text-lg text-sm rounded-lg"
          onChange={handleSearch}/>
        </div>
        <div className="absolute top-10 right-4 rounded-xl">
          <select className=" border-2 border-blue-200 sm:p-2 p-0 sm:font-semibold font-normal sm:text-base text-sm rounded-xl sm:w-auto w-20"
           onChange={handlePriceFilter}>
            <option >Filter By Price</option>
            <option value="lth" className="font-semibold">Low To High</option>
            <option value="htl" className="font-semibold">High To Low</option>
          </select>
        </div>
      </div>
      <div className="sm:flex grid grid-cols-2 justify-around sm:mt-28 mt-24 h-70 gap-1 flex-wrap">
        {products?.map((items) => (
          <div key={items?.id}>
            <div className="bg-gray-200 sm:h-[400px] h-[275px] m-auto sm:w-60 w-36 bg-opacity-75 mb-8 sm:px-8 px-3 sm:py-8 py-4 rounded-xl overflow-hidden text-center relative ">
              <div className="">
                <img
                  src={items?.images[0]}
                  alt="products api"
                  className=" sm:h-48 h-24 sm:w-[90%] w-[80%] m-auto object-cover object-top rounded"
                />
              </div>
              <div className="mt-4 font-serif sm:text-lg text-base relative">
                <p>{items?.title}</p>
                <div className="flex absolute top-14 justify-around">
                  <p className=" text-yellow-600 font-semibold">₹{items?.price}</p>
                  <p className="sm:pl-20 pl-5 font-semibold flex text-sm"><IoMdStar style={{color:'yellow'}} size={20}/>  {items?.rating}</p>
                  <button class="absolute top-10 bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-black font-medium px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-600" onClick={() => getCartData(items)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Mens;
