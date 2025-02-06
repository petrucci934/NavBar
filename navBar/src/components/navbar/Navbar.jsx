import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  //Navbar Items
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Tickets", link: "/tikets" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="w-full flex justify-between items-center py-4  px-6 "
      >
        <Link className="text-4xl font-bold text-red-500  ml:auto ">Bus</Link>
        {/* Logo section */}
        <div className=" hidden md:block ">
          <ul className=" flex items-end  gap-6 text-gray-500  ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className=" inline-block  py-1 px-3  hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div className="">
              <button
                onClick={() => {
                  alert("Future")
                }}
                className="  bg-red-500 border border-red-500 hover:border-red hover:bg-transparent transition duration-300 text-gray-500 rounded-full px-4 py-2  "
              >
                Sign Up
              </button>
            </div>
          </ul>
        </div>
        {/* Mobile Hamburg Menu section */}
        <div
          className="md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MdMenu className="text-4xl mx-4 " />
        </div>

        {/* Logo section */}
      </motion.div>
      <ResponsiveMenu open={open} />
    </nav>
  );
};

export default Navbar;
