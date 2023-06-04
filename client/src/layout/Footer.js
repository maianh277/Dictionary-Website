import React from "react";

const Footer = () => {
  return (
    <footer className="bg-baseDarkMint">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold  dark:text-white">
                Dictionary
              </span>
            </a>
          </div>
          <div className="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                Overview
              </h2>
              <ul className="text-baseBlue font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-baseBlue font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Word
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Translation
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Grammar
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-baseBlue font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <i className="fa-brands fa-facebook fa-2xl mr-5 text-white"></i>
                  <i className="fa-brands fa-instagram fa-2xl mr-5 text-white"></i>
                  <i className="fa-brands fa-github fa-2xl mr-5 text-white"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;