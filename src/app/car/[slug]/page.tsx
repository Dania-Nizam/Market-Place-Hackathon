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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Car Image Section */}
        <div className="flex justify-center items-center">
          {car?.image ? (
            <Image
              src={urlFor(car.image).url()}
              alt={car.name || "Car image"}
              width={2000}
              height={2000}
              className="w-full max-w-lg rounded-lg shadow-lg object-cover"
            />
          ) : (
            <div className="flex justify-center items-center bg-gray-200 text-gray-500 w-full max-w-lg h-80 rounded-lg">
              No Image Available
            </div>
          )}
        </div>

        {/* Car Details Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {car?.name || "Car Name Not Available"}
          </h1>

          <p className="text-xl font-semibold text-gray-700">
            Price per day:{" "}
            <span className="text-blue-600">
              {car?.pricePerDay ? `$${car.pricePerDay}` : "Not Available"}
            </span>
          </p>

          <ul className="space-y-4 text-lg text-gray-600">
            <li>
              <strong>Fuel Capacity:</strong> {car?.fuelCapacity || "Unknown"}
            </li>
            <li>
              <strong>Transmission:</strong> {car?.transmission || "Unknown"}
            </li>
            <li>
              <strong>Seating Capacity:</strong>{" "}
              {car?.seatingCapacity || "Unknown"}
            </li>
            <li>
              <strong>Inventory:</strong>{" "}
              {car?.inventory || "Out of Stock"}
            </li>
            <li>
              <strong>Original Price:</strong>{" "}
              {car?.originalPrice
                ? `$${car.originalPrice}`
                : "Not Available"}
            </li>
          </ul>

          {car?.description && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {car.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
