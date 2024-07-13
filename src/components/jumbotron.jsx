import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Welcome to Web Checkin",
    subtitle: "Frans Kaisepo Airport",
    image: "/src/assets/kaisepo.jpg",
    description: "Experience the convenience of our streamlined online check-in process. Select your seat, enter your details, and get ready to fly."
  },
  {
    title: "Explore the World",
    subtitle: "With Our Flights",
    image: "/src/assets/jumbotron.jpg",
    description: "Discover new destinations with our extensive network of flights. Book now and start your adventure."
  },
  {
    title: "Comfort and Safety",
    subtitle: "On Every Flight",
    image: "/src/assets/biak1.jpg",
    description: "Enjoy the highest standards of comfort and safety on all our flights. Your satisfaction is our priority."
  },
  {
    title: "Discover Wapsdori",
    subtitle: "A Hidden Paradise in Biak",
    image: "/src/assets/Jumbotron/wapsdori.png",
    description: "Immerse yourself in the serene beauty of Wapsdori, a captivating village on Biak Island. Enjoy its pristine beaches and vibrant local culture."
  },
  {
    title: "Explore Negeri Dongeng",
    subtitle: "A Fantasy Land in Biak",
    image: "/src/assets/Jumbotron/dongeng.png",
    description: "Step into Negeri Dongeng, a whimsical and enchanting tourist spot on Biak Island. Experience its lush landscapes and unique attractions that seem straight out of a fairy tale."
  },
  
  {
    title: "Explore Warsa Waterfall",
    subtitle: "A Captivating Natural Wonder",
    image: "/src/assets/Jumbotron/warsa.png",
    description: "Discover the breathtaking Warsa Waterfall in Biak. Surrounded by lush tropical forests, the waterfall offers a refreshing retreat and a picturesque landscape perfect for nature lovers and adventurers alike."
  }
  
];


export default function Jumbotron() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("scroll-to-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section
        className="bg-center bg-no-repeat bg-gray-600 bg-blend-multiply"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          height: "800px"
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl flex flex-col justify-center items-center h-full">
          <h1 className="mb-4 text-3xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
            {slides[currentSlide].title}
          </h1>
          <h2 className="mb-4 text-3xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="mb-8 text-lg lg:text-xl font-normal text-gray-300 px-8 sm:px-16 lg:px-48 text-center">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              onClick={handleScroll}
              className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section id="scroll-to-section" className="bg-gray-100 ">
        {/* Isi dari bagian yang di-scroll */}
      </section>
    </div>
  );
}
