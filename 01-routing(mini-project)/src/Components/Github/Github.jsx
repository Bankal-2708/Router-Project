import React, { useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useState(() => {
    fetch("https://api.github.com/users/Bankal-2708")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className=" text-center m-4  bg-cover text-black text-3xl p-4 flex flex-col flex-wrap justify-center items-center md:flex-row md:bg-gray-300 gap-5">
        <img src={data.avatar_url} alt="Git Picture" width={200 }
        className="rounded-xl text-center "
        />
        Github Followers:{data.followers}
        
      </div>

      <div className="flex justify-center items-center m-2">
        <button
        onClick={() => window.open("https://github.com/Bankal-2708", "_blank")}
        className="  bg-red-700 text-white font-bold border-2 px-7 py-2 rounded-md hover:bg-white hover:text-black hover:border-black "
      >
        GitHub
      </button>
      </div>
    </div>
  );
}

export default Github;
