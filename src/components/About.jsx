import React from "react";
import { FaPlane, FaSearch ,FaYoutube ,FaInstagram , FaTwitter , FaFacebook ,FaGooglePlusG  } from 'react-icons/fa';

import { MdOutlineEmail } from "react-icons/md";
const About = () => {
  return (
    <footer className="footer bg-blue-800 text-white p-10">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <nav className="mb-4 md:mb-0">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover block text-white">Branding</a>
          <a className="link link-hover block text-white">Design</a>
          <a className="link link-hover block text-white">Marketing</a>
          <a className="link link-hover block text-white">Advertisement</a>
        </nav>
        <nav className="mb-4 md:mb-0">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover block text-white">About us</a>
          <a className="link link-hover block text-white">Contact</a>
          <a className="link link-hover block text-white">Jobs</a>
          <a className="link link-hover block text-white">Press kit</a>
        </nav>
        <nav className="mb-4 md:mb-0">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover block text-white">Terms of use</a>
          <a className="link link-hover block text-white">Privacy policy</a>
          <a className="link link-hover block text-white">Cookie policy</a>
        </nav>
        <nav className="mb-4 md:mb-0">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover block text-white">Twitter</a>
          <a className="link link-hover block text-white">Instagram</a>
          <a className="link link-hover block text-white">Facebook</a>
          <a className="link link-hover block text-white">Github</a>
        </nav>
        <nav className="mb-4 md:mb-0">
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover block text-white">Features</a>
          <a className="link link-hover block text-white">Enterprise</a>
          <a className="link link-hover block text-white">Security</a>
          <a className="link link-hover block text-white">Pricing</a>
        </nav>
        <div className="w-80 hidden md:block">
          <h3>Maju Dengan Berita Terbaru Kam & Update</h3>
          <div className="relative flex-grow w-full rounded-2xl mt-2">
                            <input
                                type="text"
                                id="flight-input"
                                className="block w-full pl-5 pr-14 py-4 text-lg text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Alamat Email"
                            />
                            <MdOutlineEmail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-3xl" />
                        </div>
                        <div className="flex flex-row justify-end  space-x-2 text-2xl mt-2">
                          <FaFacebook></FaFacebook>
                          <FaInstagram></FaInstagram>
                          <FaTwitter></FaTwitter>
                          <FaYoutube></FaYoutube>
                          <FaGooglePlusG></FaGooglePlusG>

                        </div>
        </div>
       
      </div>
    </footer>
  );
};

export default About;
