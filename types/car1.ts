export interface Car {
    _id:string;
    name:string;
    type:"product";
    image?:{
        asset:{
            _ref:string;
            _type:"image";

        }
    };
    price:number;
    description?:string;
    fuelCapacity:string;
    transmission:string;
    seatingCapacity:string;
    pricePerDay:number;
    originalPrice:number;
    
    inventory:number;
    slug:{
        _type:"slug"
        current:string;
    };




}

