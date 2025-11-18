import React, { useState } from "react";

function Login() {

  const [isSignup, setIsSignup] = useState(false); 

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <div className="bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-80">

        
        <div className="flex flex-row gap-3 justify-center">

          <button
            className={`font-bold text-xl rounded-md p-1 px-5 
              ${!isSignup ? "bg-green-500 text-white" : "bg-white"}
            `}
            onClick={() => setIsSignup(false)}
          >
            Log In
          </button>

          <button
            className={`font-bold text-xl rounded-md p-1 px-5 
              ${isSignup ? "bg-green-500 text-white" : "bg-white"}
            `}
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>

        </div>


     
        {!isSignup && (
          <>
            <input
              type="text"
              placeholder="Enter your Email..."
              className="bg-white border-2 rounded-md px-2 p-1"
            />

            <input
              type="password"
              placeholder="Enter your Password..."
              className="bg-white border-2 rounded-md px-2 p-1"
            />

            <button className="bg-gray-600 text-white py-1 rounded-md font-bold">
              Log In
            </button>
          </>
        )}

       
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white border-2 rounded-md px-2 p-1"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-white border-2 rounded-md px-2 p-1"
            />

            <input
              type="password"
              placeholder="Create Password"
              className="bg-white border-2 rounded-md px-2 p-1"
            />

            <button className="bg-green-600 text-white py-1 rounded-md font-bold">
              Register
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Login;
