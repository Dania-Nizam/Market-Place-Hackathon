import { Car } from '../types/car';
import Image from 'next/image';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <Image
          src={car.image}
          alt={car.name}
          width={400}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{car.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{car.type} | {car.capacity} persons</p>
        <p className="text-xl font-bold text-green-600 mt-2">${car.price} per day</p>
      </div>
    </div>
  );
};

export default CarCard;
