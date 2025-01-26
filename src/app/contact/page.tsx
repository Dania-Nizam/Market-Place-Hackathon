import React from "react";
import Image from "next/image";

import Sidebar1 from "../../components/Sidebar1";

const RentalDashboard = () => {
  return (
    <div className="lg:w-[1340px] lg:h-[900px] flex flex-col lg:flex-row  bg-[#F6F7F9] w-full h-full">
      {/* Sidebar */}
      <Sidebar1/>
      {/* Main Content */}
      <div className="flex-1 p-6 w-[500px] lg:p-8">
        <div className="flex flex-col lg:flex-row gap-x-6">
          {/* Details Rental */}
          <div className="flex-1 w-full h-[836px] lg:w-[334px]   bg-white p-6 shadow-md rounded-lg">
            <h2 className="mb-4 text-xl font-bold text-[#1A202C]">
              Details Rental
            </h2>
            <div>
              <Image
                src="/Maps.png"
                alt="Map"
                width={386}
                height={272}
                className="mb-6  md:w-[486px]"
              />
              <div className="flex mb-4">
                <div className="flex items-center mr-4">
                  <Image
                    src="/Look.png"
                    alt="Nissan GT-R"
                    className="w-[132px] h-[72px] rounded-[8px] object-cover"
                    width={132}
                    height={72}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-[#1A202C] mt-12">
                    Nissan GT-R
                  </h3>
                  <p className="text-sm text-[#3D5278]">Sport Car</p>
                </div>
              </div>

              {/* Pick-Up and Drop-Off Section */}
              <div className="space-y-6 lg:w-[100px] mt-20">
                <div className="font-semibold text-base leading-[24px] tracking-[-2%] text-[#1A202C] w-[68px] h-[20px] ">
                  Pick-Up
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <select className="flex-1 border border-gray-300 rounded px-4 py-2">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="time"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="font-semibold text-base leading-[24px] tracking-[-2%] text-[#1A202C] w-[80px] h-[20px] ">
                  Drop-Off
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <select className="flex-1 border border-gray-300 rounded px-4 py-2">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="time"
                    className="flex-1 border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>

              {/* Rental Price */}
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between font-semibold mb-4">
                  <span className="w-[200px] h-[24px] font-bold text-xl leading-[30px] tracking-[-3%]">
                    Total Rental Price
                  </span>
                  <span className="text-[32px] font-bold leading-[40.32px] text-[#1A202C] w-[128px] h-[48px]  ">
                    $80.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Car Rental */}
          <div className="lg:w-[424px] lg:h-[324px] mt-4 h-[500px] w-full bg-white p-6 shadow-md rounded-lg">
            <h2 className="leading-[30px] font-bold text-xl tracking-[-3%] mb-4">
              Top 5 Car Rental
            </h2>
            <div className="flex">
              <div className="sm:relative absolute mt-52 md:ml-28  md:mt-16 sm:mt-0 w-[220px] h-[220px] lg:absolute lg:mt-0 lg:ml-0">
                <Image
                  src="/Chart.png"
                  alt=""
                  width={180}
                  height={220}
                  className="absolute inset-0  "
                />
                <div className="absolute leading-[36px] tracking-[-3%] inset-0 font-bold sm:text-2xl text-lg sm:mt-20 sm:ml-14 ml-16 mt-20 text-[#1A202C] ">
                  72,030
                </div>
              </div>
              <ul className="text-sm text-gray-500 space-y-2 mt-7 md:mt-16 md:ml-36 ml-6 lg:ml-52">
                <div className="flex gap-[39px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    Sport Car
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    17,439
                  </li>
                </div>
                <div className="flex gap-[73px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    SUV
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    9,478
                  </li>
                </div>
                <div className="flex gap-[63px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    Coupe
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    18,197
                  </li>
                </div>
                <div className="flex gap-[39px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    Hatchback
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    12,106
                  </li>
                </div>
                <div className="flex gap-[73px] w-[232px] h-[24px]">
                  <li className="text-sm font-semibold text-[#90A3BF] leading-[21px] tracking-[-2%]">
                    MPV
                  </li>
                  <li className="font-semibold text-sm leading-[21px] tracking-[-2%] text-[#1A202C] ml-9">
                    14,405
                  </li>
                </div>
              </ul>
            </div>
            {/* Recent Transactions */}
            <div className="mr-0 ml-0 lg:w-[400px] lg:h-[480px] rounded-[10px] mt-14 bg-[#FFFFFF] p-4 shadow-inner hidden lg:block">
              <div className="w-full h-full">
                <h2 className="mt-4 font-bold text-xl leading-[30px] tracking-[-3%] text-[#1A202C]">
                  Recent Transactions
                </h2>
                <div className="mt-10 space-y-6">
                  {/* Transaction Item */}
                  <div className="flex items-center justify-between border-b pb-4">
                    <Image
                      src="/car8.png"
                      alt="Nissan GT-R"
                      width={80}
                      height={40}
                    />
                    <div className="flex-1 mx-4">
                      <span className="block text-base font-bold text-[#1A202C]">
                        Nissan GT-R
                      </span>
                      <p className="text-sm text-[#3D5278]">Sport Car</p>
                    </div>
                    <span className="text-base font-bold text-[#1A202C]">
                      $80.00
                    </span>
                  </div>

                  {/* Transaction Item */}
                  <div className="flex items-center justify-between border-b pb-4">
                    <Image
                      src="/hero1.png"
                      alt="Koenigsegg"
                      width={80}
                      height={40}
                    />
                    <div className="flex-1 mx-4">
                      <span className="block text-base font-bold text-[#1A202C]">
                        Koenigsegg
                      </span>
                      <p className="text-sm text-[#3D5278]">Sport Car</p>
                    </div>
                    <span className="text-base font-bold text-[#1A202C]">
                      $99.00
                    </span>
                  </div>

                  {/* Transaction Item */}
                  <div className="flex items-center justify-between border-b pb-4">
                    <Image
                      src="/pC3.png"
                      alt="Rolls-Royce"
                      width={80}
                      height={40}
                    />
                    <div className="flex-1 mx-4">
                      <span className="block text-base font-bold text-[#1A202C]">
                        Rolls-Royce
                      </span>
                      <p className="text-sm text-[#3D5278]">Sport Car</p>
                    </div>
                    <span className="text-base font-bold text-[#1A202C]">
                      $96.00
                    </span>
                  </div>

                  {/* Transaction Item */}
                  <div className="flex items-center justify-between">
                    <Image src="/car1.png" alt="CR-V" width={80} height={40} />
                    <div className="flex-1 mx-4">
                      <span className="block text-base font-bold text-[#1A202C]">
                        CR-V
                      </span>
                      <p className="text-sm text-[#3D5278]">Sport Car</p>
                    </div>
                    <span className="text-base font-bold text-[#1A202C]">
                      $80.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDashboard;
