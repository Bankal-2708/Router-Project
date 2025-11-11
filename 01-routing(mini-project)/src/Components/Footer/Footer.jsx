import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Facebook, Instagram, Github,Twitter } from "lucide-react";

function Footer() {
  const links = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  const followus = [
    { id: 1, name: "Github", link: "/github" },
    { id: 2, name: "Discord", link: "/discord" },
  ];

  const legal = [
    { id: 1, name: "Privacy Policy", link: "/privacy" },
    { id: 2, name: "Terms & Conditions", link: "/terms" },
  ];

  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 md:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
            <Link to="/" className="flex items-center">
              <img
                className="h-30 w-30 lg:h-25 lg:w-25 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1617566347924-ad5ebdaa014e?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60"
                alt="Your Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium space-y-2">
                {links.map((link) => (
                  <li className="hover:underline" key={link.id}>
                    <NavLink to={link.link}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow Us
              </h2>
              <ul className="text-gray-500 font-medium space-y-2">
                {followus.map((link) => (
                  <li className="hover:underline" key={link.id}>
                    <NavLink to={link.link}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium space-y-2">
                {legal.map((legal) => (
                  <li className="hover:underline" key={legal.id}>
                    <NavLink to={legal.link}>{legal.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className=" flex justify-between px-6 items-center  w-full h-full pb-6   ">
        <span className="text-sm text-gray-500 sm:text-center hover:underline">
          © 2708<a href="bankalmavi@gmail.com">bankalmavi</a>. All Rights
          Reserved.
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer" />
            <Github className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-500 hover:text-red-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
