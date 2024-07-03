import React from "react";

const Gallery = () => {
  return (
    <div className="sm:flex grid grid-cols-1 m-auto">
      <div className="sm:w-1/2 w-full">
        <div className="flex h-1/2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full resize-none object-cover p-5"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full resize-none object-fill p-5"
            />
          </div>
        </div>
        <div className="h-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1664876514393-43d54a364888?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="shoe"
            className=" h-full w-full object-cover p-5"
          />
        </div>
      </div>
      <div className=" sm:w-1/2 w-full ">
        <div className="h-1/2">
          <img
            src="https://images.unsplash.com/photo-1532561685579-890e8f61456a?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="shoe"
            className=" h-full w-full object-cover p-5"
          />
        </div>
        <div className="flex h-1/2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556011299-650a931cbfae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full resize-none p-5"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1535984052160-77931dbfe0d5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full object-cover  p-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
