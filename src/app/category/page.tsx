"use client"

import { useState } from 'react';
import CarFilter from '../../components/CarFilter';
import CarList from '../../components/CarList';
import { Car } from '../../types/car';
import { FilterState } from '../../types/car';

// Sample car data
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
  // Add more cars as needed
];

const types = ['Sedan', 'SUV', 'Hatchback', 'Convertible','Sport'];
const capacities = [1,4, 5, 7,6, 2];

const IndexPage = () => {
  const [filters, setFilters] = useState<FilterState>({
    type: '',
    capacity: '',
    price: ''
  });

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Car Rental</h1>
      <div className="flex justify-between space-x-8">
        <CarFilter types={types} capacities={capacities} setFilters={setFilters} />
        <CarList cars={cars} filters={filters} />
      </div>
    </div>
  );
};

export default IndexPage;
