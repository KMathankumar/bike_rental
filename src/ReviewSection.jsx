import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ReviewSection = () => {
  // Sample initial reviews data
  const initialReviews = [
    { id: 1, rating: 4, name: 'Varun Mehta', comment: 'Good', date: 'Oct 14, 2023' }
  ];

  // Rating distribution data
  const initialRatings = {
    5: 905,
    4: 252,
    3: 134,
    2: 150,
    1: 36
  };

  const [reviews, setReviews] = useState(initialReviews);
  const [ratings, setRatings] = useState(initialRatings);
  const [newReview, setNewReview] = useState({
    rating: 0,
    name: '',
    comment: ''
  });
  const [showForm, setShowForm] = useState(false);

  // Calculate average rating
  const totalReviews = Object.values(ratings).reduce((sum, count) => sum + count, 0);
  const averageRating = (4.1 * totalReviews) / (totalReviews + 1); // Weighted average

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  // Handle rating selection
  const handleRatingSelect = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  // Submit new review
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      rating: newReview.rating,
      name: newReview.name || 'Anonymous',
      comment: newReview.comment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    setReviews([...reviews, review]);
    setRatings(prev => ({
      ...prev,
      [review.rating]: prev[review.rating] + 1
    }));

    // Reset form
    setNewReview({ rating: 0, name: '', comment: '' });
    setShowForm(false);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 max-w-md">
      {/* Review Header */}
      <h2 className="text-xl font-bold mb-4">Customer Reviews of this Rideon Rental</h2>
      
      {/* Rating Summary */}
      <div className="flex items-center mb-4">
        <div className="text-4xl font-bold mr-4">{averageRating.toFixed(1)}</div>
        <div>
          <div className="flex mb-1">
            {renderStars(averageRating)}
          </div>
          <div className="text-gray-600 text-sm">out of 5 ({totalReviews} reviews)</div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="space-y-2 mb-6">
        {[5, 4, 3, 2, 1].map((stars) => {
          const percentage = (ratings[stars] / totalReviews) * 100;
          return (
            <div key={stars} className="flex items-center">
              <div className="w-16 text-sm">{stars} stars</div>
              <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full" 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="w-12 text-right text-sm">{ratings[stars]}</div>
            </div>
          );
        })}
      </div>

      {/* See All Reviews Button */}
      <button 
        className="border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50 mb-6"
        onClick={() => setShowForm(false)}
      >
        See all reviews
      </button>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Reviews ({reviews.length})</span>
              <span>{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-xs font-bold mr-2">
                {review.rating.toFixed(1)}
              </div>
              <div className="font-semibold">{review.name}</div>
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Write Review Button */}
      {!showForm && (
        <button 
          className="mt-4 text-sm text-blue-600 hover:underline"
          onClick={() => setShowForm(true)}
        >
          Write a review
        </button>
      )}

      {/* Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Your Rating:</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingSelect(star)}
                  className="text-2xl focus:outline-none"
                >
                  {star <= newReview.rating ? (
                    <FaStar className="text-yellow-500" />
                  ) : (
                    <FaRegStar className="text-yellow-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name (optional):</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-1">Your Review:</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              rows="3"
              className="w-full border rounded px-3 py-2 text-sm"
              required
            ></textarea>
          </div>
          
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Submit Review
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border border-gray-300 px-4 py-2 rounded text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReviewSection;