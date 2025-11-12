import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex justify-center items-center gap-6 m-10">
      <div>
        <Link>
          <img
            src="https://plus.unsplash.com/premium_vector-1725937278377-f46cf5a648ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1151"
            className="h-60 w-60 md:h-90 md:w-90 object-cover pt-2  rounded-3xl m-4"
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-[37%] h-[70%] text-center gap-3">
        <h1 className=" font-bold text-3xl">
          React development is carried out by passionate developers
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
          voluptatem accusantium nemo perspiciatis delectus atque autem!
          Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
          Officiis id consequatur atque doloremque!<br/><br/> Nobis minus voluptatibus
          pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo
          possimus nesciunt dicta veniam aspernatur quam mollitia.
        </p>
      </div>
    </div>
  );
};

export default About;
