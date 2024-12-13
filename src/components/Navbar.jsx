import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Importing icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isActive = (currentPath) => location.pathname === currentPath;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative z-50">
      {/* Top Section */}
      <div className="hidden md:flex bg-darkblue text-gray-300 justify-between md:justify-around items-center py-2">
        <div className="flex items-center gap-4">
          <FacebookOutlinedIcon className="hover:text-white cursor-pointer" />
          <InstagramIcon className="hover:text-white cursor-pointer" />
          <LinkedInIcon className="hover:text-white cursor-pointer" />
        </div>
        <div className="flex items-center gap-6">
          <a
            href="tel:+917874510328"
            className="flex items-center gap-2 hover:text-white"
          >
            <LocalPhoneIcon />
            <span>+91-7874510328</span>
          </a>
          <a
            href="mailto:techsbuilds@gmail.com"
            className="flex items-center gap-2 hover:text-white"
          >
            <EmailIcon />
            <span>techsbuilds@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="flex items-center md:justify-around px-4 justify-between py-4 bg-white shadow-md">
        <div onClick={()=>{
          navigate('/')
          setIsMenuOpen(false)
        }} className="text-2xl font-bold text-darkblue cursor-pointer">
          TechsBuilds
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className={`${
            isMenuOpen ? "absolute z-50 text-white top-3 right-2" : "text-2xl"
          } md:hidden`}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex h-12 items-center gap-10">
          <div
            onClick={() => navigate("/")}
            className={`cursor-pointer font-medium ${
              isActive("/") && "text-bluelight border-b-2 border-bluelight"
            } hover:text-bluelight`}
          >
            Home
          </div>
          <div
            onClick={() => navigate("/services")}
            className={`cursor-pointer font-medium ${
              isActive("/services") &&
              "text-bluelight border-b-2 border-bluelight"
            } hover:text-bluelight`}
          >
            Services
          </div>
          <div
            onClick={() => navigate("/about-us")}
            className={`cursor-pointer font-medium ${
              isActive("/about-us") &&
              "text-bluelight border-b-2 border-bluelight"
            } hover:text-bluelight`}
          >
            About Us
          </div>
          <div
            onClick={() => navigate("/contacts")}
            className={`cursor-pointer font-medium ${
              isActive("/contacts") &&
              "text-bluelight border-b-2 border-bluelight"
            } hover:text-bluelight`}
          >
            Contacts
          </div>
          <button onClick={()=> navigate("/contacts")} className="px-6 py-2 text-white bg-bluelight rounded-md shadow hover:bg-purple transition">
            Get In Touch
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed pt-2 top-0 right-0 h-screen w-2/3 bg-darkblue text-white z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="py-2 px-4">
          <div
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
            className={`${
              isActive("/") ? "text-bluelight" : ""
            } hover:text-bluelight cursor-pointer`}
          >
            Home
          </div>
        </div>
        <div className="py-2 px-4">
          <div
            onClick={() => {
              navigate("/services");
              setIsMenuOpen(false);
            }}
            className={`${
              isActive("/services") ? "text-bluelight" : ""
            } hover:text-bluelight cursor-pointer`}
          >
            Services
          </div>
        </div>
        <div className="py-2 px-4">
          <div
            onClick={() => {
              navigate("/about-us");
              setIsMenuOpen(false);
            }}
            className={`${
              isActive("/about-us") ? "text-bluelight" : ""
            } hover:text-bluelight cursor-pointer`}
          >
            About Us
          </div>
        </div>
        <div className="py-2 px-4">
          <div
            onClick={() => {
              navigate("/contacts");
              setIsMenuOpen(false);
            }}
            className={`${
              isActive("/contacts") ? "text-bluelight" : ""
            } hover:text-bluelight cursor-pointer`}
          >
            Contacts
          </div>
        </div>
        <div onClick={()=>{
          navigate("/contacts")
          setIsMenuOpen(false)
        }} className="py-2 px-4">
          <button className="p-2 w-full text-center transition-all bg-bluelight font-semibold hover:bg-purple text-white rounded-md">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
}
