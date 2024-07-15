import React, { useState } from "react";
import "./Style/Style.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMobileMenuOpen(false);
  };

  const handleCloseClick = () => {
    setActiveMenu("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-500">The Keyword</h1>
          <ul className="hidden md:flex space-x-4 ml-6">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 text-lg"
                onClick={() => handleMenuClick("Latest stories")}
              >
                Latest stories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 text-lg"
                onClick={() => handleMenuClick("Product updates")}
              >
                Product updates
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 text-lg"
                onClick={() => handleMenuClick("Company news")}
              >
                Company news
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block subscribe-button">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}
      <div
        className={`fixed inset-0 bg-white shadow p-4 z-20 transition-all duration-300 ${
          isMobileMenuOpen
            ? "mobile-menu-enter-active"
            : "mobile-menu-exit-active"
        } mobile-menu`}
      >
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-blue-500">The Keyword</h1>
        </div>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 text-lg"
              onClick={() => handleMenuClick("Latest stories")}
            >
              Latest stories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 text-lg"
              onClick={() => handleMenuClick("Product updates")}
            >
              Product updates
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 text-lg"
              onClick={() => handleMenuClick("Company news")}
            >
              Company news
            </a>
          </li>
        </ul>
      </div>
      {activeMenu === "Product updates" && (
        <div className="bg-white shadow p-4 mt-2 relative">
          <button
            className="absolute top-2 right-2 text-gray-700 hover:text-blue-500"
            onClick={handleCloseClick}
          >
            &times;
          </button>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <h3 className="font-bold">Android, Chrome & Play</h3>
              <ul>
                <li>Android</li>
                <li>Chrome</li>
                <li>Chromebooks</li>
                <li>Google Play</li>
                <li>Wear OS by Google</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Devices & Services</h3>
              <ul>
                <li>Chromecast</li>
                <li>Fitbit</li>
                <li>Google Nest</li>
                <li>Pixel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Explore & Get Answers</h3>
              <ul>
                <li>Gemini</li>
                <li>Google Assistant</li>
                <li>Maps</li>
                <li>News</li>
                <li>Search</li>
                <li>Shopping</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Connect & Communicate</h3>
              <ul>
                <li>Photos</li>
                <li>Translate</li>
                <li>Registry</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">In the Cloud</h3>
              <ul>
                <li>Docs, Sheets and Slides</li>
                <li>Gmail</li>
                <li>Google Cloud</li>
                <li>Meet</li>
                <li>More on the Cloud Blog</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {activeMenu === "Company news" && (
        <div className="bg-white shadow p-4 mt-2 relative">
          <button
            className="absolute top-2 right-2 text-gray-700 hover:text-blue-500"
            onClick={handleCloseClick}
          >
            &times;
          </button>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
            <div>
              <h3 className="font-bold">Outreach & Initiatives</h3>
              <ul>
                <li>Diversity and inclusion</li>
                <li>Education</li>
                <li>Google.org</li>
                <li>Grow with Google</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Technology</h3>
              <ul>
                <li>AI</li>
                <li>Developers</li>
                <li>Families</li>
                <li>Next billion users</li>
                <li>Safety and security</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Inside Google</h3>
              <ul>
                <li>Data centers and infrastructure</li>
                <li>Doodles</li>
                <li>Googlers</li>
                <li>Life at Google</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Around the Globe</h3>
              <ul>
                <li>Google in Asia</li>
                <li>Google in Europe</li>
                <li>Google in Latin America</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Authors</h3>
              <ul>
                <li>Sundar Pichai, CEO</li>
                <li>Ruth Porat, SVP and CFO</li>
                <li>Kent Walker, SVP</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
