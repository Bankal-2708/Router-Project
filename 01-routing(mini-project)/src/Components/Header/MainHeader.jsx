import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0
   ${
     isActive
       ? "text-orange-700 font-semibold"
       : "text-gray-700 hover:text-orange-700"
   }`;

const items = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 4, name: "Github", link: "/github" },
];

function MainHeader() {
  return (
    <header className="shadow  top-0">
      <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          <Link to="/" className=" flex  items-center">
            <img
              className="  h-30 w-30 lg:h-25 lg:w-25 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1617566347924-ad5ebdaa014e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QiUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Your Logo"
            />
          </Link>

          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-0"
            id="mobile-menu-2"
          >
            <ul className="flex items-center justify-between gap-2 font-medium mt-4 md:mt-0 md:flex-row">
              {items.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.link} className={navLinkClass}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-gray-200 ">
            <button className="bg-white py-1 px-3 rounded-md hover:border-blue-800 hover:text-red-700 ">
              Log in
            </button>
            <button className="bg-red-700 text-white px-3 py-1 rounded-md border hover:border-black hover:bg-white hover:text-red-700 transition">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
