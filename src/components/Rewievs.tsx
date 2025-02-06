"use client";
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

  // Fetch reviews from API
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
      id: reviews.length + 1, // Simulate an ID
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);
    setFormData({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Customer Reviews</h2>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-6 bg-white rounded-lg shadow-lg space-y-4 border border-gray-200"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Rating</label>
          <select
            value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <label className="block text-gray-700 font-medium mb-1">Comment</label>
          <textarea
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your review..."
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 text-white font-semibold rounded-md transition-all duration-300 ${
            formData.name && formData.rating > 0 && formData.comment
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!formData.name || formData.rating === 0 || !formData.comment}
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : reviews.length > 0 ? (
        <ul className="space-y-6">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <span className="text-yellow-500 text-lg">
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
        <p className="text-gray-600 text-center">No reviews yet. Be the first to leave one!</p>
      )}
    </div>
  );
};

export default Reviews;
