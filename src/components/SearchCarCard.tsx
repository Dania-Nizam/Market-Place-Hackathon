import { Car } from "../types/car";
import Image from "next/image";
import Link from "next/link";

import { FaRegHeart } from "react-icons/fa";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Image Section */}
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          width={400}
          height={200}
          className="object-cover rounded-lg"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-all">
          <FaRegHeart  className="w-5 h-5 text-red-500" />
        </button>
      </div>

      {/* Car Details */}
      <div className="mt-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{car.name}</h2>
        <p className="text-sm text-gray-500">
          {car.type} | {car.capacity} persons
        </p>
        <p className="text-xl font-bold text-green-600">${car.price} per day</p>
      </div>

      {/* Book Now Button */}
      <div className="mt-4">
        <Link href="/cart">
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
