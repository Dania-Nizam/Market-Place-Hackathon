export interface Car {
    id: number;
    name: string;
    type: string;
    capacity: number;
    price: number;
    image: string; // URL or path to the image
  }
  

  export interface FilterState {
    type: string;
    capacity: string | number; // This will allow both string and number types
    price: string | number;    // Same for price
  }
  
  // Example car data type
export interface Car {
    id: number;
    name: string;
    type: string;      // 'Sedan', 'SUV', etc.
    capacity: number;  // Number of passengers
    price: number;     // Price per day
    image: string;     // Image URL
  }
  
  