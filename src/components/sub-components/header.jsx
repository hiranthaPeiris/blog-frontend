import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <React.Fragment>
      <header className="text-gray-700 body-font bg-blue-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-4xl font-black font-serif">BLOGS</span>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="./login">
              <p className="mr-5  hover:text-gray-900 font-black">SIGN IN</p>
            </Link>
            <Link to="./register">
              <p className="mr-5 hover:text-gray-900 font-black ">SIGN UP</p>
            </Link>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
