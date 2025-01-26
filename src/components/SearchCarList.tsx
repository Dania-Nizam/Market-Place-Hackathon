 //components/CarList.tsx
import { Car } from '../types/car';
import CarCard from '../components/SearchCarCard';

interface CarListProps {
  cars: Car[];
  searchTerm: any;
}

const SearchCarList: React.FC<CarListProps> = ({ cars, searchTerm }) => {
  // Check if cars array is valid and not undefined
  if (!cars || cars.length === 0) {
    return <div>No cars available.</div>;
  }

  // Filter cars based on searchTerm and other filters if needed
  const filteredCars = cars.filter(car => {
    if (!car) return false;  // Prevent filtering undefined cars
    return car.type.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredCars.length > 0 ? (
        filteredCars.map(car => <CarCard key={car.id} car={car} />)
      ) : (
        <div className="col-span-full text-center text-lg text-gray-500">No cars available for this type</div>
      )}
    </div>
  );
};

export default SearchCarList;

