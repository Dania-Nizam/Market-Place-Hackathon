import { Car } from '../types/car';
import Image from 'next/image';
import Link from 'next/link';
interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Image src={car.image} alt={car.name} width={400} height={100} className=" object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mt-4">{car.name}</h2>
      <p>{car.type} | {car.capacity} persons</p>
      <p className="text-xl font-bold text-green-600 mt-2">${car.price} per day</p>
      <Link href="/cart"><button className='w-[116px] h-[44px] bg-[#3563E9] text-white rounded-[4px] hover:bg-blue-600'>
        Book Now
      </button></Link>
    </div>
  );
};

export default CarCard;
