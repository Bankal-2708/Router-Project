import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col md:flex-row  md:gap-5 justify-center items-center">
        <Link to="/">
          <img
            src="https://plus.unsplash.com/premium_vector-1682304405241-e68829b2aa50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1023"
            className="h-60 w-80 md:h-90 md:w-90 object-cover pt-2"
            alt=""
          />
        </Link>
        <div>
          <div className="flex flex-col items-center  justify-center md:items-end md:justify-end h-full space-y-4">
            <div className="flex flex-col justify-center items-center md:items-end md:justify-end h-full text-right">
              <h1 className="font-bold text-4xl">Download Now</h1>
              <p className="font-bold text-2xl text-gray-700">Lorem ipsum</p>
            </div>

            <div>
              <button className="flex items-center gap-2 bg-red-700 text-white font-semibold px-4 py-3 rounded-xl hover:bg-white hover:text-black hover:border-2 transition">
                <Play className="w-6 h-6" />
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <img
            src="https://plus.unsplash.com/premium_vector-1759579152814-77ed7cf00ac3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
            className="h-60 w-80 md:h-90 md:w-90 object-cover "
            alt=""
          />
        </Link>
        <h1 className="font-bold text-4xl pb-4">Lorem ipsum dolor</h1>
      </div>
    </div>
  );
}

export default Home;
