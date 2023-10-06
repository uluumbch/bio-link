import React from "react";
import profileyellow from "../profile-pic_yellow.png";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <div className="max-w-md bg-yellow-500 mx-auto -z-50 h-screen">
      <div className="pt-4">
        <img
          src={profileyellow}
          alt="Bachrul Uluum"
          className="w-64 mx-auto rounded-full border-4 border-slate-50"
        />
        <h2
          className="text-3xl text-center font-semibold
       text-slate-900"
        >
          Bachrul Uluum
        </h2>
        <span className="text-center mx-auto text-lg">
          <h3 >Junior Programmer</h3>
        </span>
      </div>
      <div className=" text-slate-900 flex pt-8 px-14 text-5xl justify-between">
        <a className="my-auto"
          href="https://instagram.com/uluumbch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a className="my-auto"
          href="https://github.com/uluumbch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a className="my-auto"
          href="https://linkedin.com/in/bachrul-uluum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandLinkedin size={"1.15em"} />
        </a>
        <a className="my-auto"
          href="https://t.me/uluumbch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandTelegram />
        </a>
      </div>
      <div className="pt-12 flex flex-col text-center">
        <a
          className="text-xl w-5/6 mx-auto bg-rose-600 text-slate-900 px-2 py-4 mb-5 relative z-[20] border-2 border-gray-50 drop-shadow-[7px_7px_black] ease-in-out duration-400 transition-all duration-700 hover:bg-slate-900 hover:text-white hover:drop-shadow-none"
          href="https://portfolio.uluumbch.my.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>

        <span className="text-xl w-5/6 mx-auto bg-rose-600 text-slate-900 px-2 py-4 mb-5 relative z-[20] border-2 border-gray-50 drop-shadow-[7px_7px_black] ease-in-out duration-400 transition-all duration-700 hover:bg-slate-900 hover:text-white hover:drop-shadow-none">
          Resume
        </span>

        <a
          className="text-xl w-5/6 mx-auto bg-rose-600 text-slate-900 px-2 py-4 mb-5 relative z-[20] border-2 border-gray-50 drop-shadow-[7px_7px_black] ease-in-out duration-400 transition-all duration-700 hover:bg-slate-900 hover:text-white hover:drop-shadow-none"
          href="https://uluumbch.my.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>

        {/* <span className="w-5/6 mx-auto text-slate-300 px-2 py-4 bg-slate-700 rounded-3xl mb-5 shadow-inner shadow-slate-400">
          Website
        </span>
        <span className="w-5/6 mx-auto text-slate-300 px-2 py-4 bg-slate-700 rounded-3xl mb-5 shadow-inner shadow-slate-400">
          Website
        </span> */}
      </div>
    </div>
  );
};

export default Home;
