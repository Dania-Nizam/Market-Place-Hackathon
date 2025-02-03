import { Car, FilterState } from '../types/car';
import CarCard from '../components/CarCard';

interface CarListProps {
  cars: Car[];
  filters: FilterState;
}

const CarList: React.FC<CarListProps> = ({ cars, filters }) => {
  const filteredCars = cars.filter(car => {
    return (
      (filters.type ? car.type === filters.type : true) &&
      (filters.capacity ? car.capacity >= Number(filters.capacity) : true) &&
      (filters.price ? car.price <= Number(filters.price) : true)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredCars.map(car => (
        <div
          key={car.id}
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarList;
