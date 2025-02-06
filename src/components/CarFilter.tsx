import { Dispatch, SetStateAction } from 'react';

interface CarFilterProps {
  types: string[];
  capacities: number[];
  setFilters: Dispatch<SetStateAction<FilterState>>;
}

interface FilterState {
  type: string;
  capacity: string | number;
  price: string | number;
}

const CarFilter: React.FC<CarFilterProps> = ({ types, capacities, setFilters }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Convert capacity and price to number if appropriate
    const newValue = name === 'capacity' || name === 'price' ? Number(value) : value;
    
    setFilters(prevState => ({ ...prevState, [name]: newValue }));
  };

  return (
    <div className="p-6 space-y-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Car Type Filter */}
      <div className="space-y-2">
        <label htmlFor="type" className="text-sm font-medium text-gray-800">Car Type</label>
        <select
          id="type"
          name="type"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          onChange={handleFilterChange}
        >
          <option value="">Select Type</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Capacity Filter */}
      <div className="space-y-2">
        <label htmlFor="capacity" className="text-sm font-medium text-gray-800">Capacity</label>
        <select
          id="capacity"
          name="capacity"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          onChange={handleFilterChange}
        >
          <option value="">Select Capacity</option>
          {capacities.map(capacity => (
            <option key={capacity} value={capacity}>{capacity} Persons</option>
          ))}
        </select>
      </div>

      {/* Max Price Filter */}
      <div className="space-y-2">
        <label htmlFor="price" className="text-sm font-medium text-gray-800">Max Price</label>
        <input
          type="number"
          id="price"
          name="price"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default CarFilter;
