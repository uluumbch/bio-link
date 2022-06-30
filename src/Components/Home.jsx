import React from "react";
import profile from "../profile.jpg";
import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-md bg-black mx-auto shadow-xl shadow-slate-500 h-screen">
      <img src={profile} className="w-64 mx-auto shadow-2xl" />
      <h2
        className="text-3xl text-center
       text-slate-400"
      >
        Bachrul Uluum
      </h2>
      <div className=" text-slate-400 flex pt-8 px-14 text-5xl justify-between">
        <FaInstagram />
        <FaGithub />
        <FaTelegramPlane />
      </div>
      <div className="pt-12 flex flex-col text-center">
        <span className="w-5/6 mx-auto text-slate-300 px-2 py-4 bg-slate-700 rounded-3xl mb-5 shadow-inner shadow-slate-400">
          <a
            href="https://portfolio-uluumbch.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </span>
        <span className="w-5/6 mx-auto text-slate-300 px-2 py-4 bg-slate-700 rounded-3xl mb-5 shadow-inner shadow-slate-400">
          Resume
        </span>
        <span className="w-5/6 mx-auto text-slate-300 px-2 py-4 bg-slate-700 rounded-3xl mb-5 shadow-inner shadow-slate-400">
          <a
            href="https://www.fiverr.com/uluumbch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelance
          </a>
        </span>
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
