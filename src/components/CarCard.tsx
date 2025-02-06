import { Car } from '../types/car';
import Image from 'next/image';
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className="relative w-full h-28">
        <Image
          src={car.image}
          alt={car.name}
          width={400}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">{car.name}</h2>
        <p className="text-sm text-gray-600">{car.type} | {car.capacity} persons</p>
        <p className="text-lg font-bold text-green-600 mt-2">${car.price} <span className="text-sm text-gray-500">per day</span></p>
      </div>
      <div className="mt-4">
        <Link href="/cart">
          <button className="w-full h-12 bg-[#3563E9] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
