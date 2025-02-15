import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import cafungLogo from "../assets/logo.png";

function Navbar() {
  const [isHidden, setIsHidden] = useState("hidden");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavbar = () => {
    setIsHidden((prev) => (prev === "hidden" ? "flex" : "hidden"));
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.startsWith("#")) {
      // Reset hash dulu agar React Router memproses perubahan hash
      window.location.hash = "";
      setTimeout(() => {
        window.location.hash = value;
      }, 10);
    } else {
      navigate(value);
    }
  };

  return (
    <nav className="fixed top-0 w-full">
      <div className="wrapper flex flex-col justify-between w-[100%] h-auto bg-base-color border-b font-semibold text-white md:text-lg md:flex-row md:justify-evenly">
        <div id="nav-btn" onClick={handleNavbar} className={`nav-btn absolute right-2 top-2 p-2 items-center mx-4 md:hidden`}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="nav-brand flex py-2 items-center">
          <Link to="/#home">
            <img className="w-auto h-10 mb-2 mx-4 mr-1 md:h-14" src={cafungLogo} alt="brand-img" />
          </Link>
        </div>
        <div id="nav-list" className={`nav-list border-2 m-2 ${isHidden} h-auto bg-base-color md:flex md:border-none md:items-center`}>
          <ul className="flex flex-col mb-2 py-2 justify-between text-sm gap-3 md:flex-row lg:text-lg">
            <li className="px-2 hover:border-b-2 mx-2 w-fit">
              <Link to="/#home" className="mb-4">HOME</Link>
            </li>
            <li className="px-2 hover:border-b-2 mx-2 w-fit">
              <select onChange={handleChange} className="bg-base-color peer-data-[bg-red-500] peer-focus:bg-base-color  focus:bg-base-color">
                <option value="/Products">PRODUCTS</option> 
                <option value="/#popular-products">POPULAR PRODUCTS</option> 
                <option value="/#facility">FACILITY</option> 
                <option value="/#stalls">STALLS</option>
              </select>
            </li>
             <li className="px-2 hover:border-b-2 mx-2 w-fit">
              <Link to="/#feedback" className="mb-4">FEEDBACK</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
