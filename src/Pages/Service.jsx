import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
  return (
    <div className="sm:flex grid grid-cols-2 gap-6 p-2 mr-3 sm:justify-around mb-5">
      <div className="bg-red-600 sm:p-10 p-7 rounded text-sm shadow-lg shadow-slate-400 font-bold items-center flex flex-col sm:w-[200px] w-[150px] gap-2 transition delay-300 hover:bg-red-500">
        <FaShippingFast size={25}/>
        <p>FREE SHIPPING</p>
      </div>
      <div className="bg-red-600 sm:p-10 p-7 rounded  text-sm items-center flex flex-col shadow-lg shadow-slate-400 font-bold sm:w-[200px] w-[150px] gap-2 transition delay-300 hover:bg-red-500">
        <MdOutlineProductionQuantityLimits size={25}/>
        <p>AUTHENTIC PRODUCTS</p>
      </div>
      <div className="bg-red-600 sm:p-10 p-7 rounded shadow-lg shadow-slate-400 text-sm font-bold items-center flex flex-col sm:w-[200px] w-[150px] gap-2 transition delay-300 hover:bg-red-500">
        <GiReturnArrow size={25}/>
        <p>EASY RETURN</p>
      </div>
      <div className="bg-red-600 sm:p-10 p-7 shadow-lg shadow-slate-400 rounded text-sm font-bold items-center flex flex-col sm:w-[200px] w-[150px] gap-2 transition delay-300 hover:bg-red-500">
        <RiSecurePaymentLine size={25}/>
        <p>SECURE PAYMENT</p>
      </div>
    </div>
  );
};

export default Service;
