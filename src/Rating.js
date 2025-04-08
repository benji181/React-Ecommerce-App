import React from 'react';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="d-flex align-items-center">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className="fa-solid fa-star" style={{ color: '#ffc107' }}></i>
      ))}
      {hasHalfStar && (
        <i className="fa-solid fa-star-half-alt" style={{ color: '#ffc107' }}></i>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className="fa-regular fa-star" style={{ color: '#ffc107' }}></i>
      ))}
      <span className="ms-2">({rating.toFixed(1)})</span>
    </div>
  );
};

export default Rating;