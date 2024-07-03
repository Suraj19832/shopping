import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Navbar = ({ cartData, name, setName }) => {
  const [hamburger, setHamburger] = useState(false);
  const toggleham = () =>{
    setHamburger(!hamburger)
  }
  return (
    <>
      <div className="py-4 sm:px-4 px-2 sm:fixed fixed sm:top-0 top-0 sm:left-0 left-0 w-full z-50 bg-white border-b-2 border-[#dadada] ">
        <div className="flex justify-between items-center font-semibold px-4 ">
          <div>
            <Link to="/">
              <h1 className="font-extrabold sm:text-xl text-base cursor-pointer">
                E-<span className="text-[orange] ">COMMERCE</span>
              </h1>
            </Link>
          </div>

          {
            hamburger ? (
              <div className="flex flex-col z-10 top-0 right-0 bg-[#EE4266] w-[80%] h-screen items-center pt-14 list-none gap-16 text-xl absolute">
          <RxCross1 className="absolute top-6 right-5" onClick={()=>setHamburger(!hamburger)}/>
            <Link to="/" onClick={toggleham}>
              <li>Home</li>
            </Link>
            <Link to="/products" onClick={toggleham}>
              <li>All Products</li>
            </Link>
            <Link  to="/mens" onClick={toggleham}>
              <li>Mens</li>
            </Link>
            <Link to="/womens" onClick={toggleham}>
              <li>About</li>
            </Link>
            <div>
            {name ? (
                <Link to="/signup" onClick={toggleham}>
                  <h1 onClick={() => setName(!name)}>Sign Up</h1>
                </Link>
              ) : (
                <Link to="/signin" onClick={toggleham}>
                  <h1 onClick={() => setName(!name)}>Sign In</h1>
                </Link>
              )}
            </div>
          </div>
            ) : (
              <div className="sm:flex hidden list-none gap-7 text-xl">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/products">
              <li>All Products</li>
            </Link>
            <Link to="/mens">
              <li>Mens</li>
            </Link>
            <Link to="/womens">
              <li>About</li>
            </Link>
          </div>
            )
          }

          <div className="flex text-xl gap-5 items-center cursor-pointer">
            <GiHamburgerMenu size={25} className="sm:hidden block" onClick={()=>setHamburger(!hamburger)}/>
            <div className="sm:block hidden">
              {name ? (
                <Link to="/signup">
                  <h1 onClick={() => setName(!name)}>Sign Up</h1>
                </Link>
              ) : (
                <Link to="/signin">
                  <h1 onClick={() => setName(!name)}>Sign In</h1>
                </Link>
              )}
            </div>
            <Link to="/cartItems">
              <GrCart size={25} className="relative " />
              <p className="absolute bottom-8 sm:right-9 right-7 text-lg text-[orange]">
                {cartData.length}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

