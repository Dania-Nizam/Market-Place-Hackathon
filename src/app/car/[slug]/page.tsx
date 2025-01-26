import { client } from "@/sanity/lib/client";
import { Car } from "../../../../types/car1";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function getCar(slug: string): Promise<Car> {
  return client.fetch(
    groq`*[_type == "car" && slug.current == $slug][0]{
      _id,
      name,
      type,
      image,
      price,
      description,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      inventory,
      slug
    }`,
    { slug }
  );
}

export default async function CarPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // Destructure slug from params
  const car = await getCar(slug); // Fetch car data based on the slug

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        {/* Car Image */}
        <div className="w-full  mt-36 aspect-square sm:w-[80%] md:w-[70%] mx-auto">
          {car?.image ? (
            <Image
              src={urlFor(car.image).url()}
              alt={car.name || "Car image"}
              width={2000}
              height={2000}
              className="rounded-lg shadow-md object-cover  "
            />
          ) : (
            <div className="flex justify-center items-center bg-gray-200 text-gray-500 h-full rounded-lg">
              No Image Available
            </div>
          )}
        </div>

        {/* Car Details */}
        <div className="flex flex-col gap-6  mt-24 sm:ml-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{car?.name || "Car name not available"}</h1>

          <p className="text-xl font-semibold text-gray-700">
            Price per day:{" "}
            {car?.pricePerDay ? `$${car.pricePerDay}` : "Not available"}
          </p>

          <ul className="space-y-3 text-lg text-gray-600">
            <li>Fuel Capacity: {car?.fuelCapacity || "Unknown"}</li>
            <li>Transmission: {car?.transmission || "Unknown"}</li>
            <li>Seating Capacity: {car?.seatingCapacity || "Unknown"}</li>
            <li>Inventory: {car?.inventory || "Out of stock"}</li>
            <li>
              Original Price:{" "}
              {car?.originalPrice ? `$${car.originalPrice}` : "Not available"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
