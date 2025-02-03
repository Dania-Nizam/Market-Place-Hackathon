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
    <div className="p-5 space-y-4 bg-white shadow-md rounded-md">
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Car Type</label>
        <select
          id="type"
          name="type"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3563E9] focus:border-transparent hover:border-blue-500 transition duration-300"
          onChange={handleFilterChange}
        >
          <option value="">Select Type</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Capacity</label>
        <select
          id="capacity"
          name="capacity"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3563E9] focus:border-transparent hover:border-blue-500 transition duration-300"
          onChange={handleFilterChange}
        >
          <option value="">Select Capacity</option>
          {capacities.map(capacity => (
            <option key={capacity} value={capacity}>{capacity} Persons</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Max Price</label>
        <input
          type="number"
          id="price"
          name="price"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3563E9] focus:border-transparent hover:border-blue-500 transition duration-300"
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default CarFilter;
