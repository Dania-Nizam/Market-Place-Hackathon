import { HiOutlineArrowsUpDown } from "react-icons/hi2";

const PickupDropoffSection = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center bg-white p-4 rounded-md shadow-md mt-4 lg:w-[1200px] mx-auto space-y-4 xl:space-y-0">
      {/* Pickup Section */}
      <div className="flex-1 flex flex-col space-y-2">
        <h3 className="text-md font-semibold text-center xl:text-left">Pick-Up</h3>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
          <div className="w-full lg:w-1/3">
            <select className="border border-gray-300 rounded px-3 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select your city</option>
            </select>
          </div>
          <div className="w-full lg:w-1/3">
            <input
              type="date"
              className="border border-gray-300 rounded px-3 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <input
              type="time"
              className="border border-gray-300 rounded px-3 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Button to Swap Pick-Up and Drop-Off */}
      <div className="flex justify-center my-2 lg:my-0">
        <button className="bg-[#3563E9] text-white rounded-md p-2 hover:bg-blue-600 transition duration-300 ease-in-out">
          <HiOutlineArrowsUpDown className="text-base" />
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="flex-1 flex flex-col space-y-2">
        <h3 className="text-md font-semibold text-center xl:text-left">Drop-Off</h3>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
          <div className="w-full lg:w-1/3">
            <select className="border border-gray-300 rounded px-3 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select your city</option>
            </select>
          </div>
          <div className="w-full lg:w-1/3">
            <input
              type="date"
              className="border border-gray-300 rounded px-3 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <input
              type="time"
              className="border border-gray-300 rounded px-3 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropoffSection;
