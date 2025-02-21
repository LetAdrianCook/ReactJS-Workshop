import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-[750px] border rounded-lg py-5 shadow-lg flex flex-row justify-between items-center border-[#E6B905] bg-[#E6B905] max-w-7xl mt-5 px-10">
      <h1 className="text-2xl font-bold">My Notes</h1>
      <ul className="flex flex-row gap-x-5">
        <li>
          <Link to={"/"} className="text-2xl hover:text-white">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/add-todo"} className="text-2xl hover:text-white">
            Add to Do's
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
