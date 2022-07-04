import React from "react";
import profile from "../profile.jpg";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <div className="max-w-md bg-yellow-500 mx-auto -z-50 h-screen">
      <img
        src={profile}
        className="w-64 mx-auto rounded-full border-4 border-slate-50"
      />
      <h2
        className="text-3xl text-center
       text-slate-900"
      >
        Bachrul Uluum
      </h2>
      <span className="text-center mx-auto text-lg">
        <h3>Junior Programmer</h3>
      </span>
      <div className=" text-slate-900 flex pt-8 px-14 text-5xl justify-between">
        <a
          href="https://instagram.com/uluumbch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/uluumbch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
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
          href="https://portfolio-uluumbch.vercel.app/"
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
          href="https://www.fiverr.com/uluumbch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freelance
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
