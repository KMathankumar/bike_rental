import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Review = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      {/* Customer Reviews Section */}
      <div className="max-w-[calc(100%-80px)] border border-gray-300 rounded p-4 mx-auto">
        <div className="text-xs font-semibold mb-2">
          Customer Reviews of this Rideon Rental
        </div>
        
        {/* Rating Summary */}
        <div className="flex items-baseline space-x-2 mb-2">
          <div className="text-3xl font-bold leading-none">4.1</div>
          <div className="text-xs text-gray-700">out of</div>
          <div className="text-2xl font-bold leading-none">5</div>
        </div>
        
        {/* Star Rating */}
        <div className="flex items-center space-x-1 text-xs text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStarHalfAlt className="text-orange-500" />
            <FaRegStar className="text-orange-500" />
          </div>
          <span>(1477 reviews)</span>
        </div>
        
        {/* Rating Breakdown */}
        <div className="space-y-2 mb-4">
          {/* 5 Stars */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-14 inline-block">5 stars</span>
            <div className="flex-1 bg-gray-300 rounded h-2 relative">
              <div 
                className="bg-orange-600 h-2 rounded" 
                style={{ width: '905px', maxWidth: '100%' }}
              ></div>
            </div>
            <span className="w-8 text-right inline-block">905</span>
          </div>
          
          {/* 4 Stars */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-14 inline-block">4 stars</span>
            <div className="flex-1 bg-gray-300 rounded h-2 relative">
              <div 
                className="bg-orange-600 h-2 rounded" 
                style={{ width: '252px', maxWidth: '100%' }}
              ></div>
            </div>
            <span className="w-8 text-right inline-block">252</span>
          </div>
          
          {/* 3 Stars */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-14 inline-block">3 stars</span>
            <div className="flex-1 bg-gray-300 rounded h-2 relative">
              <div 
                className="bg-orange-600 h-2 rounded" 
                style={{ width: '134px', maxWidth: '100%' }}
              ></div>
            </div>
            <span className="w-8 text-right inline-block">134</span>
          </div>
          
          {/* 2 Stars */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-14 inline-block">2 stars</span>
            <div className="flex-1 bg-gray-300 rounded h-2 relative">
              <div 
                className="bg-orange-600 h-2 rounded" 
                style={{ width: '150px', maxWidth: '100%' }}
              ></div>
            </div>
            <span className="w-8 text-right inline-block">150</span>
          </div>
          
          {/* 1 Star */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-14 inline-block">1 star</span>
            <div className="flex-1 bg-gray-300 rounded h-2 relative">
              <div 
                className="bg-orange-600 h-2 rounded" 
                style={{ width: '36px', maxWidth: '100%' }}
              ></div>
            </div>
            <span className="w-8 text-right inline-block">36</span>
          </div>
        </div>
        
        {/* See All Reviews Button */}
        <button className="border border-gray-400 rounded px-3 py-1 text-xs hover:bg-gray-100">
          See all reviews
        </button>
      </div>
    </div>
  );
};

export default Review;