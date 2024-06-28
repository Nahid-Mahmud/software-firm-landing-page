import { Link } from "react-router-dom";
import { FaFacebook, FaRegLightbulb, FaYoutube } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    path: "/",
    id: crypto.randomUUID(),
  },
  {
    name: "About",
    path: "/about",
    id: crypto.randomUUID(),
  },
  {
    name: "Blog",
    path: "/blog",
    id: crypto.randomUUID(),
  },
  {
    name: "Blog",
    path: "/blog",
    id: crypto.randomUUID(),
  },
];

const Navbar = () => {
  // sate for dropdown

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex justify-between max-w-[90rem] mx-auto p-10">
      <div className="text-4xl">Logo</div>
      <ul className=" flex space-x-8 items-center justify-center text-lg font-medium">
        <li>
          <FaRegLightbulb className="text-xl" />
        </li>
        {navItems?.map((navItem) => {
          return (
            <Link key={navItem?.id} to={navItem?.path}>
              {navItem.name}
            </Link>
          );
        })}
        {/* services */}
        <li className="relative">
          <button onClick={() => setShowDropdown((prev) => !prev)} className="flex items-center justify-center">
            Services
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {
            // dropdown
            showDropdown && (
              <div className="absolute  left-0 bg-white shadow-lg p-4   ">
                <ul className="w-28">
                  <li className="p-2 hover:bg-slate-100 cursor-pointer">Service 1</li>
                  <li className="p-2 hover:bg-slate-100 cursor-pointer">Service 2</li>
                  <li className="p-2 hover:bg-slate-100 cursor-pointer">Service 3</li>
                </ul>
              </div>
            )
          }
        </li>

        <li>
          <FaFacebook className="text-2xl" />
        </li>
        <li>
          <FaYoutube className="text-2xl" />
        </li>

        {/* login */}
        <li className="flex items-center justify-center bg-blue-500 text-white py-2 px-3 rounded gap-1">
          <span>
            <CiLogin />
          </span>
          <Link to="/login">Login</Link>
        </li>
        <li className="flex items-center justify-center bg-blue-500 text-white py-2 px-3 rounded gap-1">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
