import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="loader mb-5"></div>
      <span className="text-[20px] "> Please wait a minute while server is loading the content</span>
    </div>
  );
};

export default Loader;
