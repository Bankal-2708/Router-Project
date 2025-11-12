import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <div className="h-screen flex justify-center items-center ">
      {/* right card */}

      <div className=" md:flex justify-center items-center gap-2">
        <div className="bg-gray-200 bg-cover  h-cover w-auto text-center flex flex-col p-4 rounded-2xl ">
          <h1 className="font-bold text-2xl">Get in touch:</h1>
          <p className="text-sm text-gray-900 ">
            Fill in the form to start a conversation
          </p>

          <div className="m-2">
            <div className="text-gray-900 flex  items-center text-center">
              <MapPin className="w-6 h-6" />
              <p className="w-cover text-sm p-2">
                ATS Banquet, B-3,
                <br /> Sec-132, Noida
              </p>
            </div>
            <div className="text-gray-900 flex  items-center text-center">
              <Phone className="w-5 h-5" />
              <p className="w-30 text-sm p-2">+91 xxxxxxxxxx</p>
            </div>
            <div className="text-gray-900 flex items-center text-center">
              <Mail className="w-5 h-5" />
              <p className="w-cover text-sm p-2">Remotestate@gmail.com</p>
            </div>
          </div>
        </div>

        {/* left form */}

        <div className="m-2 p-3 flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 border text-sm border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />           
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border text-sm border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Telephone Number"
              className="w-full px-4 py-2 border text-sm border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button className="bg-red-700 font-bold text-white px-6 py-2 rounded-md border-2 hover:bg-white hover:text-red-700 hover:border-black">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
