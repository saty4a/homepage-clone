import React from "react";
import dashboardImage from "../assets/dashboardImage.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";

const HomePage = () => {
  return (
    <section className="my-[5rem] px-4 text-center flex flex-col items-center lg:mt-[5rem] lg:px-0">
      <div className="flex justify-center gap-2 items-center border-2 bg-white rounded-lg w-3/4 lg:w-1/2 2xl:w-1/5">
        <span>👋</span>
        <p className="text-blue-600 font-medium text-sm">WELCOME TO MANAGE WISE!</p>
      </div>
      <h1 className="text-4xl font-medium mt-4 2xl:text-7xl 2xl:w-3/4">
        Empower your business with{" "}
        <span className="strategic-text-color">Strategic </span>insights
      </h1>
      <p className="my-5 2xl:w-1/2 subheading-color">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-4">
        <button className="button-shadow getStarted-btn bg-indigo-500 py-2 mb-4 text-white rounded-xl w-[18rem] md:w-[24rem] lg:w-[10rem] lg:mb-0">
          <span className="">Get Started</span>
          <FaRegCirclePlay className="z-50 getStarted-btn__text" size={25} />
        </button>
        <button className="flex justify-center items-center gap-2 bg-white py-2 rounded-xl w-[18rem] border hover:border-black shadow hover:shadow-lg md:w-[24rem] lg:w-[10rem]">
          <span>Whatch Demo</span>
          <FaCirclePlay className="" size={25} />
        </button>
      </div>
      <img
        src={dashboardImage}
        alt="dashboardImage"
        className="image-shadow mt-[5rem] rounded-3xl lg:hover:-translate-y-1 hover:scale-110 hover:ease-in-out duration-300 2xl:w-3/4 2xl:mx-auto"
      ></img>
    </section>
  );
};

export default HomePage;
