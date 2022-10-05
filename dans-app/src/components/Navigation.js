import React from "react";
import { FiHome } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="bg-purple text-white">
        <ul className="flex justify-between p-4 bg-white text-black">
          {/* link home icon to Activities page */}

          <Link to="/activities">
            <li className="rounded-full border boreder-2 border-black p-4">
              <FiHome className="text-3xl" />
            </li>
          </Link>
          <Link to="/search">
            <li className="rounded-full border boreder-2 border-black p-4">
              <BiSearch className="text-3xl" />
            </li>
          </Link>
          <Link to="/calander">
            <li className="rounded-full border boreder-2 border-black p-4">
              <AiFillCalendar className="text-3xl" />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
