import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Google
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Google Products
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About the Keyword
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">Google</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Help
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              English
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
