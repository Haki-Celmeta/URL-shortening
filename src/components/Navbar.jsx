import { useState } from "react";
import logo from "../utils/index";
import { iconMenu } from "../utils/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full py-4 px-2">
      <nav className="screen-max-width flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={logo} alt="logo" />
          <ul className="gap-4 text-gray font-semibold sm:flex hidden">
            <li className="cursor-pointer hover:text-darkBlue transition">
              Features
            </li>
            <li className="cursor-pointer hover:text-darkBlue transition">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-darkBlue transition">
              Resources
            </li>
          </ul>
        </div>
        <div className="items-center gap-6 font-semibold sm:flex hidden">
          <div className="text-gray">Login</div>
          <div className="bg-cyan text-white py-2 px-5 rounded-full hover:opacity-60 transition cursor-pointer">
            Sign up
          </div>
        </div>

        <div className="sm:hidden block cursor-pointer" onClick={handleClick}>
          <img src={iconMenu} alt="hamburger menu" className="w-10 h-10" />
        </div>

        <div className={`absolute sm:hidden ${isOpen ? 'flex' : 'hidden'} top-12 w-full`}>
          <ul className="gap-4 text-white font-semibold flex flex-col items-center w-full bg-violet-default py-4 rounded-2xl">
            <li className="cursor-pointer">
              Features
            </li>
            <li className="cursor-pointer">
              Pricing
            </li>
            <li className="cursor-pointer">
              Resources
            </li>
            <hr className="w-[90%] bg-violet-200 rounded-full"/>
            <li>
              <div>Login</div>
            </li>
            <li>
              <div className="bg-cyan text-white py-2 px-5 rounded-full hover:opacity-60 transition cursor-pointer">
                Sign up
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
