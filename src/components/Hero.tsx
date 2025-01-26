import React from "react";
import PickupDropoffSection from "../components/PickDrop";
import Image from "next/image";

const HeroSection = () => {
  const heroData = [
    {
      title: "The Best Platform for Car Rental",
      description:
        "Ease of doing a car rental safely and reliably. Of course at a low price.",
      buttonText: "Rental Car",
      image: "/hero1.png",
    },
    {
      title: "Easy way to rent a car at a low price",
      description:
        "Providing cheap car rental services and safe and comfortable facilities.",
      buttonText: "Rental Car",
      image: "/hero2.png",
    },
  ];

  return (
    <div className="lg:w-[1360px] mx-auto px-4">
      {/* Parent container to align both sections side by side */}
      <div className="flex flex-wrap gap-6 p-6">
        {/* First Section */}
        <div className="flex-1 min-w-[280px] lg:w-[500px] sm:w-[640px] bg-[#54A6FF] rounded-[10px] p-6 shadow-lg">
          {heroData.slice(0, 1).map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center text-white"
            >
              {/* Text Content */}
              <div className="lg:w-1/2">
                <h2 className="font-semibold text-[28px] sm:text-[32px] leading-[36px] sm:leading-[48px] tracking-[-3%] mb-4">
                  {item.title}
                </h2>
                <p className="mb-6 text-sm sm:text-base leading-[20px] sm:leading-[24px] tracking-[-2%] font-medium">
                  {item.description}
                </p>
                <button className="text-white w-[120px] h-[44px] bg-[#3563E9] font-semibold py-2 px-4 rounded hover:bg-blue-700">
                  {item.buttonText}
                </button>
              </div>
              {/* Image Content */}
              <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={406}
                  height={116}
                  className="w-[300px] sm:w-[406px] h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Section */}
        <div className="flex-1 min-w-[280px] lg:w-[500px] bg-[#3563E9] rounded-lg p-6 shadow-lg">
          {heroData.slice(1, 2).map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center text-white"
            >
              {/* Text Content */}
              <div className="lg:w-1/2">
                <h2 className="font-semibold text-[28px] sm:text-[32px] leading-[36px] sm:leading-[48px] tracking-[-3%] mb-4">
                  {item.title}
                </h2>
                <p className="mb-6 text-sm sm:text-base leading-[20px] sm:leading-[24px] tracking-[-2%] font-medium">
                  {item.description}
                </p>
                <button className="text-white bg-[#54A6FF] font-semibold py-2 px-4 rounded hover:bg-blue-700">
                  {item.buttonText}
                </button>
              </div>
              {/* Image Content */}
              <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={340}
                  height={108}
                  className="w-[240px] sm:w-[340px] h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <PickupDropoffSection />
    </div>
  );
};

export default HeroSection;
