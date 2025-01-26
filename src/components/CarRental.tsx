"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CarRental = () => {
  const cars = [
    {
      id: "9",
      name: "Koenigsegg",
      type: "Sport",
      price: 99,
      originalPrice: null,
      fuel: "90L",
      transmission: "Manual",
      people: 2,
      image: "/pC1.png",
    },
    {
      id: "10",
      name: "Nissan GT-R",
      type: "Sport",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/pC3.png",
    },
    {
      id: "11",
      name: "Rolls-Royce",
      type: "Sedan",
      price: 96,
      originalPrice: null,
      fuel: "70L",
      transmission: "Manual",
      people: 4,
      image: "/pC4.png",
    },
    {
      id: "12",
      name: "Nissan GT-R",
      type: "Sport",
      price: 80,
      originalPrice: 100,
      fuel: "80L",
      transmission: "Manual",
      people: 2,
      image: "/pC3.png",
    },
  ];

  return (
    <div className="p-6 lg:w-[1350px] text-center bg-[#F6F7F9] mx-auto">
      <h2 className="text-base leading-[20.16px] font-semibold mb-6 text-[#90A3BF]">
        Popular Cars
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div
            className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden"
            key={car.id}
          >
            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-left">{car.name}</h3>
                <div className="w-[24px] h-[24px]">
                  <Image src="/heart.png" alt="heart icon" width={24} height={20} />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{car.type}</p>
            </div>
            <div className="object-center mx-auto mb-4">
              <Image
                src={car.image}
                alt={car.name}
                className="w-[232px] h-[72px] object-center"
                width={232}
                height={72}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <p>
                  {car.fuel}
                  <Image src="/gas.png" alt="gas icon" width={24} height={24} />
                </p>
                <p>
                  {car.transmission}
                  <Image src="/c.png" alt="transmission icon" width={24} height={24} />
                </p>
                <p>
                  {car.people} People
                  <Image src="/pro.png" alt="people icon" width={24} height={24} />
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold">
                  ${car.price.toFixed(2)} / day
                  {car.originalPrice && (
                    <span className="text-sm line-through text-gray-400 ml-2">
                      ${car.originalPrice.toFixed(2)}
                    </span>
                  )}
                </p>
                <Link href={`/car/${car.id}`}>
                  <button className="bg-[#3563E9] text-white py-2 px-4 rounded-[4px] hover:bg-blue-600">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRental;
