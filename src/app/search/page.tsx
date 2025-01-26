"use client"

// /pages/index.tsx
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import CarList from '../../components/SearchCarList';
import { Car } from '../../types/car';

// Sample car data (ensure this is defined properly)
const cars: Car[] = [
    { id: 1, name: 'Rolls-Royce', type: 'Sedan', capacity: 4, price: 96, image: '/car8.png' },
    { id: 2, name: 'Koenigsegg', type: 'Sport', capacity: 2, price: 99, image: '/hero1.png' },
    { id: 3, name: 'Nissan GT-R', type: 'Sport', capacity: 2, price: 80, image: '/pC3.png' },
    { id: 4, name: 'All New Rush', type: 'SUV', capacity: 6, price: 72, image: '/car2.png' },
    { id: 5, name: 'CR-V', type: 'SUV', capacity: 2, price: 80, image: '/car1.png' },
    { id: 6, name: 'All New Terios', type: 'SUV', capacity: 4, price: 74, image: '/Car.png' },
    { id: 7, name: 'CR-V', type: 'SUV', capacity: 5, price: 52, image: '/car4.png' },
    { id: 4, name: 'New MG ZS', type: 'SUV', capacity: 6, price: 100, image: '/car5.png' },
    { id: 4, name: 'MG ZX Excite', type: 'Hatchback', capacity: 1, price: 30, image: '/car6.png' },
  // Ensure no cars have undefined or missing fields
];

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Car Rental</h1>

      {/* Search Bar */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Car List */}
      <CarList cars={cars} searchTerm={searchTerm} />
    </div>
  );
};

export default IndexPage;
