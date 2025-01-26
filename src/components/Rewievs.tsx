"use client"
import React, { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  // Fetch reviews from the API
  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        const response = await fetch("/api/reviews");
        const data: Review[] = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: reviews.length + 1, // Generate a new ID
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
    };

    // Simulate sending data to the server
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setFormData({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>

      {/* Form for adding new reviews */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-4 bg-white rounded-lg shadow space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Rating</label>
          <select
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: Number(e.target.value) })
            }
            className="w-full p-2 border rounded"
            required
          >
            <option value={0} disabled>
              Select a rating
            </option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Star{rating > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Comment
          </label>
          <textarea
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
            className="w-full p-2 border rounded"
            placeholder="Write your review"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews list */}
      {loading ? (
        <p className="text-gray-600">Loading reviews...</p>
      ) : reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review.id} className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <span className="text-yellow-500">
                  {"★".repeat(review.rating)}
                  <span className="text-gray-400">
                    {"★".repeat(5 - review.rating)}
                  </span>
                </span>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
      )}
    </div>
  );
};

export default Reviews;
