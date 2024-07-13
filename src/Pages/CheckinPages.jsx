import React, { useState } from "react";
import Jumbotron from '../components/jumbotron';
import About from "../components/About";
import About2 from "../components/About2";
import {  Form, Link } from "react-router-dom";
import Flight from "../components/flight";
import AngkasaPura from '/src/assets/AngkasaPura.png';
import AngkasaBiak from '/src/assets/angkasabiak.png';
import Info1 from "../components/info1";
import NormfalForm from "../components/normalform";
import Info2 from "../components/info2";

import Lokasi from "../components/lokasi";
import News from "../components/news";
import Footer from "../components/footer";
import Airline from "../components/airline";
import Denah from '/src/assets/denah.jpg';
function CheckinPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggledropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };

  return (
    <div className="relative min-h-screen">
      <div className="navbar bg-neutral fixed top-0 left-0 w-full p-1 z-10">
      <div className="navbar-start">
          
         
          <Link to={`/`} >
          <img className="w-28" src={AngkasaPura} alt="Angkasa Pura Logo" />
              </Link>
          
        </div>

        <div className="navbar-center hidden lg:flex">
        
          <Link to={`/`} >
          <img className="w-30" src={AngkasaBiak} alt="Angkasa Pura Logo" />
              </Link>
        </div>
        

        <div className="navbar-end ">
        <div onClick={toggledropdown} className="hidden md:flex text-white text-2xl ml-4 items-center h-20">
  <a className="btn btn-ghost btn-sm rounded-btn">
    <h2 className="my-auto text-xs md:text-2xl">PILIH BANDARA</h2>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4 md:w-7 md:h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </a>
</div>

        <div  className={`rounded-xl fixed top-24 right-20 h-auto pb-5 manual-w bg-base-100 bg-opacity-70 shadow-lg  transform transition-transform duration-300 ease-in-out ${isDropdownOpen ? "opacity-100 translate-y" : "opacity-0 -translate-y-96"}`}>
        <div className="flex justify-end p-4">
          
         
        </div>
        <ul className="menu p-4 text-2xl  space-y-2  ">
          <li >
          <div
  className="relative flex border-2 border-gray-400"
  data-twe-input-wrapper-init
  data-twe-input-group-ref>
  <input
    type="search"
    className="peer block min-h-[auto] w-full rounded  bg-transparent  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Search"
    aria-label="Search"
    id="search-focus"
    aria-describedby="basic-addon4" />
  <label
    for="search-focus"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
    >Search
  </label>
  <button
    class="relative z-[2] -ms-0.5 flex items-center rounded-xl border- bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    id="button-addon4"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    <span class="[&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </span>
  </button>
</div>
          </li>
          
          <li><a className=" cursor-pointer text-neutral font-bold ">BANDARA SULTAN HASSANUDIN</a></li>
          <li><a className=" cursor-pointer text-neutral font-bold ">BANDARA DOMINE EDUARD OSOK</a></li>
          <li><a className=" cursor-pointer text-neutral font-bold ">BANDARA SENTANI</a></li>
        </ul>

      </div>
          <div className="hidden md:flex  text-white text-2xl ml-4 mr-4 items-center h-20" >
            <a className="btn btn-ghost btn-sm rounded-btn">
              <h2 className="text-2xl">PERUSAHAAN</h2>
            </a>
          </div>
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 cursor-pointer mr-8 text-white " onClick={toggleSidebar}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>

      <div className={`fixed top-14 right-0 h-full  overflow-auto bg-white bg-opacity-90 shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
         
        </div>
        <ul className="menu p-4 text-xs md:text-2xl  space-y-2 ">
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">KEBIJAKAN DAN DOKUMEN PELAYANAN</a></li>
  <li>
              <Link to={`/Penerbangan`} className="hover:text-green-500 cursor-pointer text-neutral font-bold">
                INFORMASI PENERBANGAN
              </Link>
            </li>
  <li>
              <Link to={`/CheckinPage`} className="hover:text-green-500 cursor-pointer text-neutral font-bold">
                WEB CHECKIN
              </Link>
            </li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">PANDUAN PENERBANGAN</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">PANDUAN TRANSPORTASI & PARKIR</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">BELANJA DAN MAKAN</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">DIREKTORI BELANJA & MAKANAN</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">PROMO & REKOMENDASI</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">PETA TERMINAL BANDARA</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">TERMINAL DOMESTIK</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">TERMINAL INTERNASIONAL</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">PANDUAN WISATA</a></li>
  <li><a className="hover:text-green-500 cursor-pointer text-neutral font-bold ">INFORMASI</a></li>
</ul>

      </div>

      {/* Main Content Area */}
      <div className="pt">
        
        <Jumbotron />
    
        <Airline></Airline>
        <div className="container mx-auto pb-10" style={{ width: '100%' }}>
   <div className="flex flex-col md:flex-row justify-between" style={{ width: '100%' }}>
     
     <div className="w-full md:w-3/4 h-auto">
       <NormfalForm />
     </div>
     
     <div className=" -rotate-90 md:rotate-0 md:flex w-36 md:w-1/3 h-auto mt ml-36 md:ml-0 justify-center items-center">
       <img src={Denah} alt="Denah" className="max-w-full h-auto" />
     </div>

   </div>
 </div>
       
        
     

   
     
        <About></About>
        <About2></About2>
        <Footer/>
      </div>
    </div>
  );
}

export default CheckinPage;
