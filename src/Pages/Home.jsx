import React, { useEffect, useState } from "react";
import Service from "./Service";
import Gallery from "./Gallery";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  const [slides, setSlides] = useState(0);
  let images = [
    [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1550344071-13ecada2a91d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  ];
  const handlePlus = () => {
    setSlides(slides === images.length - 1 ? 0 : slides + 1);
  };
  const handleMinus = () => {
    setSlides(slides === 0 ? images.length - 1 : slides - 1);
  };
  useEffect(() => {
    let sliders = setInterval(() => {
      handlePlus();
    }, 2000);
    return () => clearInterval(sliders);
  }, [slides]);
  return (
    <div className="">
      <div className="w-full object-left-top bg-center relative sm:mt-16 mt-14 mb-6">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
        />
      </div>
      <div className="absolute sm:top-40 top-20 sm:left-10 left-5">
        <h1 className="text-[red] sm:font-extrabold font-semibold sm:text-5xl text-lg">
          Discover Your Next Adventure
        </h1>
        <p className="sm:font-semibold font-medium sm:text-3xl text-lg sm:mt-7 mt-10">
          Shop Our Latest Arriaval And Unleash Style
        </p>
      </div>
      <Service />
      <div className="w-full flex justify-center relative resize-none bg-center rounded-xl">
        <img
          src={images[slides]}
          alt="sliding image"
          className=" sm:h-[600px] w-11/12 bg-center rounded-xl"
        />
        <BsArrowLeftCircleFill
          size={40}
          className="absolute sm:top-[46%] top-[40%] sm:right-[48%] right-1 sm:rotate-0 rotate-180 sm:w-full w-7"
          onClick={handleMinus}
        />
        <BsArrowRightCircleFill
          size={40}
          className="absolute sm:top-[46%] top-[40%] sm:left-[48%] left-1 sm:rotate-0 rotate-180 sm:w-full w-7"
          onClick={handlePlus}
        />
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 sm:py-24 py-14 mx-auto flex flex-wrap">
          <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            MEDAL WORTHY BRANDS TO BAG
          </h2>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base">
              At E-Commerce you will find myriad options in smart formal shirts and
              trousers, cool T-shirts and jeans, or kurta and pyjama
              combinations for men. Wear your attitude with printed T-shirts.
              Create the back-to-campus vibe with varsity T-shirts and
              distressed jeans.
            </p>
            <div class="flex md:mt-4 mt-6">
              <button class="inline-flex text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded">
                Button
              </button>
              <a class="text-red-500 inline-flex items-center ml-4">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
    </div>
  );
};

export default Home;
