import React from "react";

const Content = () => {
  return (
    <div className="flexBetween max-container padding-container flex flex-wrap flex-col flex-wrap lg:flex-row">
      {/* CENTER */}
      <div className="flex flex-col lg:w-[60%] bg-green-500 p-20 sm:w-full"></div>
      {/* SIDE */}
      <div className="flex flex-col lg:w-[30%] bg-blue-500 p-20 sm:w-full"></div>
    </div>
  );
};

export default Content;
